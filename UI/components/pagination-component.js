/**
 * Pagination 分页组件
 * 用法：
 *   1. 在页面引入：<script src="../../components/pagination-component.js"></script>
 *   2. HTML 中放置容器：<div id="paginationBar"></div>
 *   3. JS 中初始化：
 *      var pager = new Pagination({
 *        container: 'paginationBar',   // 容器 ID
 *        pageSize: 10,                 // 每页条数（默认10）
 *        pageSizeOptions: [10, 20, 50], // 可切换条数选项
 *        onPageChange: function(page, size) {
 *          // 页码或每页条数变化时回调
 *          // page: 当前页码, size: 每页条数
 *          renderMyList(page, size);
 *        },
 *        onPageSizeChange: function(size) {
 *          // 每页条数变化时的单独回调（可选）
 *        }
 *      });
 *
 *   4. 更新总数据量：pager.setTotal(totalCount);
 *   5. 重置到第一页：pager.reset();
 *   6. 销毁：pager.destroy();
 */
(function (global) {
  'use strict';

  function Pagination(options) {
    if (!options || !options.container) {
      throw new Error('Pagination: container is required');
    }

    var self = this;
    self._container = document.getElementById(options.container);
    if (!self._container) {
      throw new Error('Pagination: container element #' + options.container + ' not found');
    }

    self._pageSize = options.pageSize || 10;
    self._pageSizeOptions = options.pageSizeOptions || [10, 20, 50];
    self._currentPage = 1;
    self._total = 0;
    self._onPageChange = options.onPageChange || function() {};
    self._onPageSizeChange = options.onPageSizeChange || function() {};
    self._destroyed = false;

    self._render();
  }

  Pagination.prototype._render = function() {
    var self = this;
    if (self._destroyed) return;

    var totalPages = self._getTotalPages();
    var html =
      '<div class="flex items-center gap-3 text-sm text-[#00000073]" style="display:flex;align-items:center;gap:12px;font-size:13px">' +
        '<span id="' + self._container.id + '-total">共 <b>' + self._total + '</b> 条</span>' +
        '<select id="' + self._container.id + '-size" style="width:70px;height:28px;font-size:12px;padding:0 4px;border:1px solid #d9d9d9;border-radius:6px;outline:none;background:#fff;cursor:pointer">' +
          self._pageSizeOptions.map(function(s) {
            return '<option value="' + s + '"' + (s === self._pageSize ? ' selected' : '') + '>' + s + '</option>';
          }).join('') +
        '</select>' +
        '<span>条/页</span>' +
        '<button id="' + self._container.id + '-prev" class="ant-btn" style="height:28px;padding:0 12px;font-size:12px">上一页</button>' +
        '<span id="' + self._container.id + '-info">第 ' + self._currentPage + ' / ' + totalPages + ' 页</span>' +
        '<button id="' + self._container.id + '-next" class="ant-btn" style="height:28px;padding:0 12px;font-size:12px">下一页</button>' +
      '</div>';

    self._container.innerHTML = html;
    self._bindEvents();

    // 如果总条数为0，禁用按钮
    self._updateButtons();
  };

  Pagination.prototype._bindEvents = function() {
    var self = this;
    if (self._destroyed) return;

    var sizeEl = document.getElementById(self._container.id + '-size');
    var prevEl = document.getElementById(self._container.id + '-prev');
    var nextEl = document.getElementById(self._container.id + '-next');

    if (sizeEl) {
      sizeEl.addEventListener('change', function() {
        if (self._destroyed) return;
        self._pageSize = parseInt(this.value);
        self._currentPage = 1;
        self._render();
        self._onPageSizeChange(self._pageSize);
        self._onPageChange(self._currentPage, self._pageSize);
      });
    }

    if (prevEl) {
      prevEl.addEventListener('click', function() {
        if (self._destroyed) return;
        if (self._currentPage > 1) {
          self._currentPage--;
          self._render();
          self._onPageChange(self._currentPage, self._pageSize);
        }
      });
    }

    if (nextEl) {
      nextEl.addEventListener('click', function() {
        if (self._destroyed) return;
        var totalPages = self._getTotalPages();
        if (self._currentPage < totalPages) {
          self._currentPage++;
          self._render();
          self._onPageChange(self._currentPage, self._pageSize);
        }
      });
    }
  };

  Pagination.prototype._updateButtons = function() {
    var self = this;
    if (self._destroyed) return;

    var totalPages = self._getTotalPages();
    var prevEl = document.getElementById(self._container.id + '-prev');
    var nextEl = document.getElementById(self._container.id + '-next');
    var infoEl = document.getElementById(self._container.id + '-info');

    if (prevEl) {
      var isDisabled = self._currentPage <= 1 || self._total === 0;
      prevEl.disabled = isDisabled;
      prevEl.style.opacity = isDisabled ? '0.5' : '1';
      prevEl.style.cursor = isDisabled ? 'not-allowed' : 'pointer';
    }
    if (nextEl) {
      var isDisabled2 = self._currentPage >= totalPages || self._total === 0;
      nextEl.disabled = isDisabled2;
      nextEl.style.opacity = isDisabled2 ? '0.5' : '1';
      nextEl.style.cursor = isDisabled2 ? 'not-allowed' : 'pointer';
    }
    if (infoEl) {
      infoEl.textContent = '第 ' + self._currentPage + ' / ' + totalPages + ' 页';
    }
  };

  Pagination.prototype._getTotalPages = function() {
    return Math.ceil(this._total / this._pageSize) || 1;
  };

  /** 设置总数据条数，自动刷新分页栏 */
  Pagination.prototype.setTotal = function(total) {
    if (this._destroyed) return;
    this._total = total || 0;
    var totalPages = this._getTotalPages();
    if (this._currentPage > totalPages) {
      this._currentPage = totalPages || 1;
    }
    var totalEl = document.getElementById(this._container.id + '-total');
    if (totalEl) {
      totalEl.innerHTML = '共 <b>' + this._total + '</b> 条';
    }
    var infoEl = document.getElementById(this._container.id + '-info');
    if (infoEl) {
      infoEl.textContent = '第 ' + this._currentPage + ' / ' + totalPages + ' 页';
    }
    this._updateButtons();
  };

  /** 获取当前页码 */
  Pagination.prototype.getCurrentPage = function() {
    return this._currentPage;
  };

  /** 获取每页条数 */
  Pagination.prototype.getPageSize = function() {
    return this._pageSize;
  };

  /** 重置到第一页 */
  Pagination.prototype.reset = function() {
    if (this._destroyed) return;
    this._currentPage = 1;
    this._render();
    this._onPageChange(this._currentPage, this._pageSize);
  };

  /** 销毁组件，释放事件绑定 */
  Pagination.prototype.destroy = function() {
    this._destroyed = true;
    this._container.innerHTML = '';
  };

  global.Pagination = Pagination;
})(window);