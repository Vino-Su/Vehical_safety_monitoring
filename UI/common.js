(function () {
  'use strict';

  var MENU_DATA = [
    {
      key: 'road',
      label: '开放道路资源管理',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.5 1L2 7v16h7v-6h5v6h7V7L11.5 1zm0 2.2L19 8.5V21h-3v-6H7v6H4V8.5l7.5-5.3z"/></svg>',
      children: [
        {
          key: 'road-catalog',
          label: '城市道路开放目录',
          children: [
            { key: 'filing', label: '道路信息建档', path: 'road/catalog/filing.html' },
            { key: 'control', label: '道路资源动态管控', path: 'road/catalog/control.html' }
          ]
        },
        {
          key: 'road-visualization',
          label: '道路资源可视化',
          children: [
            { key: 'road-map', label: '地图可视化展示', path: 'road/visualization/map.html' }
          ]
        },
        {
          key: 'road-evaluation',
          label: '开放道路评估管理',
          children: [
            { key: 'eval-result', label: '评估结果管理', path: 'road/evaluation/result.html' },
            { key: 'eval-config', label: '评估指标配置', path: 'road/evaluation/config.html' },
            { key: 'eval-log', label: '评估日志管理', path: 'road/evaluation/log.html' }
          ]
        },
        {
          key: 'road-statistics',
          label: '区域统计查询',
          children: [
            { key: 'stats', label: '区域统计查询', path: 'road/statistics/index.html' }
          ]
        }
      ]
    },
    {
      key: 'monitor',
      label: '测试示范监管',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.57-3.77-1.21-7-5.74-7-10.57V6.3l7-3.12z"/></svg>',
      children: [
        {
          key: 'access-info',
          label: '准入信息管理',
          children: [
            { key: 'company', label: '企业信息登记', path: 'monitor/access-info/company.html' },
            { key: 'vehicle', label: '车辆信息登记', path: 'monitor/access-info/vehicle.html' },
            { key: 'person', label: '人员信息登记', path: 'monitor/access-info/person.html' }
          ]
        },
        {
          key: 'access-apply',
          label: '准入申请',
          children: [
            { key: 'road-test', label: '道路测试准入申请', path: 'monitor/access-apply/road-test.html' },
            { key: 'demo-apply', label: '示范应用准入申请', path: 'monitor/access-apply/demo-apply.html' },
            { key: 'demo-operate', label: '示范运营准入申请', path: 'monitor/access-apply/demo-operate.html' },
            { key: 'business', label: '业务申请管理', path: 'monitor/access-apply/business.html' }
          ]
        },
        {
          key: 'access-approve',
          label: '准入审批管理',
          children: [
            { key: 'approve', label: '审批管理', path: 'monitor/access-approve/approve.html' },
            { key: 'terminate', label: '资格终止管理', path: 'monitor/access-approve/terminate.html' },
            { key: 'report', label: '报告管理', path: 'monitor/access-approve/report.html' }
          ]
        },
        {
          key: 'approve-config-group',
          label: '审批配置',
          children: [
            { key: 'approve-config', label: '审批配置', path: 'monitor/approve-config/config.html' }
          ]
        },
        {
          key: 'vehicle-monitor',
          label: '车辆状态监控',
          children: [
            { key: 'monitor-map', label: '监控一张图', path: 'monitor/vehicle-monitor/monitor-map.html' },
            { key: 'running', label: '车辆运行监控', path: 'monitor/vehicle-monitor/running.html' },
            { key: 'alarm', label: '异常状态告警', path: 'monitor/vehicle-monitor/alarm.html' },
            { key: 'accident', label: '事故数据上报', path: 'monitor/vehicle-monitor/accident.html' },
            { key: 'accident-review', label: '事故审核', path: 'monitor/vehicle-monitor/accident-review.html' }
          ]
        },
        {
          key: 'service',
          label: '测试服务管理',
          children: [
            { key: 'notice', label: '信息发布管理', path: 'monitor/service/notice.html' },
            { key: 'fence', label: '电子围栏管理', path: 'monitor/service/fence.html' },
            { key: 'evaluation', label: '测试评价管理', path: 'monitor/service/evaluation.html' }
          ]
        },
        {
          key: 'public',
          label: '信息公开与在线反馈',
          children: [
            { key: 'info', label: '信息公开', path: 'monitor/public/info.html' },
            { key: 'feedback', label: '在线反馈', path: 'monitor/public/feedback.html' }
          ]
        }
      ]
    },
    {
      key: 'analysis',
      label: '监测数据分析',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
      children: [
        {
          key: 'data-analysis',
          label: '测试数据分析',
          children: [
            { key: 'overview', label: '测试数据总览', path: 'data-analysis/analysis/overview.html' },
            { key: 'alarm-stats', label: '异常告警统计', path: 'data-analysis/analysis/alarm-stats.html' },
            { key: 'violation-stats', label: '违法事故统计', path: 'data-analysis/analysis/violation-stats.html' },
            { key: 'running-analysis', label: '运行状态分析', path: 'data-analysis/analysis/running-analysis.html' },
            { key: 'warning-analysis', label: '预警事件分析', path: 'data-analysis/analysis/warning-analysis.html' },
            { key: 'mileage-analysis', label: '测试里程分析', path: 'data-analysis/analysis/mileage-analysis.html' },
            { key: 'industry-analysis', label: '产业发展分析', path: 'data-analysis/analysis/industry-analysis.html' }
          ]
        },
        {
          key: 'data-query',
          label: '数据查询检索',
          children: [
            { key: 'company-query', label: '企业数据查询', path: 'data-analysis/query/company-query.html' },
            { key: 'safety-driver-query', label: '安全员数据查询', path: 'data-analysis/query/safety-driver-query.html' },
            { key: 'vehicle-query', label: '车辆数据查询', path: 'data-analysis/query/vehicle-query.html' },
            { key: 'device-query', label: '设备数据查询', path: 'data-analysis/query/device-query.html' },
            { key: 'fault-query', label: '车辆故障查询', path: 'data-analysis/query/fault-query.html' }
          ]
        },
        {
          key: 'accident-analysis',
          label: '事故数据分析',
          children: [
            { key: 'accident-parse', label: '事故数据解析', path: 'data-analysis/accident/accident-parse.html' },
            { key: 'accident-cause', label: '事故成因分析', path: 'data-analysis/accident/accident-cause.html' },
            { key: 'accident-feature', label: '事故特征分析', path: 'data-analysis/accident/accident-feature.html' },
            { key: 'accident-judge', label: '事故分析研判', path: 'data-analysis/accident/accident-judge.html' }
          ]
        },
        {
          key: 'demo-analysis',
          label: '测试示范分析',
          children: [
            { key: 'road-test-analysis', label: '道路测试分析', path: 'data-analysis/demo/road-test-analysis.html' },
            { key: 'demo-apply-analysis', label: '示范应用分析', path: 'data-analysis/demo/demo-apply-analysis.html' },
            { key: 'demo-operate-analysis', label: '示范运营分析', path: 'data-analysis/demo/demo-operate-analysis.html' }
          ]
        }
      ]
    },
    {
      key: 'platform',
      label: '平台管理',
      icon: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.57-3.77-1.21-7-5.74-7-10.57V6.3l7-3.12z"/></svg>',
      children: [
        {
          key: 'dict',
          label: '数据字典管理',
          children: [
            { key: 'dict-manage', label: '字典项管理', path: 'platform/dict/index.html' }
          ]
        },
        {
          key: 'log',
          label: '操作日志管理',
          children: [
            { key: 'log-manage', label: '日志查询', path: 'platform/log/index.html' }
          ]
        }
      ]
    }
  ];

  function getBasePath() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var segments = path.split('/');
    var uiIndex = -1;
    for (var i = 0; i < segments.length; i++) {
      if (segments[i] === 'UI') { uiIndex = i; break; }
    }
    if (uiIndex === -1) {
      var depth = segments.length - 2;
      return depth > 0 ? '../'.repeat(depth) : './';
    }
    var depth = segments.length - uiIndex - 2;
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  function findPageInfo(key, data, parents) {
    parents = parents || [];
    var fallback = null;
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      if (item.key === key) {
        if (item.path) {
          return { item: item, parents: parents };
        }
        if (!fallback) {
          fallback = { item: item, parents: parents };
        }
      }
      if (item.children) {
        var result = findPageInfo(key, item.children, parents.concat([item]));
        if (result) {
          if (result.item.path) return result;
          if (!fallback) fallback = result;
        }
      }
    }
    return fallback;
  }

  function shouldExpand(key, targetKey, data) {
    if (key === targetKey) return true;
    var info = findPageInfo(targetKey, data);
    if (!info) return false;
    for (var i = 0; i < info.parents.length; i++) {
      if (info.parents[i].key === key) return true;
    }
    return false;
  }

  function renderSidebarHTML(data, basePath, activeKey, level) {
    level = level || 1;
    var html = '';
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var hasChildren = item.children && item.children.length > 0;
      var isActive = item.key === activeKey;
      var expanded = shouldExpand(item.key, activeKey, MENU_DATA);

      if (hasChildren) {
        var expandClass = expanded ? ' expanded' : '';
        html += '<div class="menu-group' + expandClass + '" data-key="' + item.key + '">';
        html += '<div class="menu-item level-' + level + (expanded ? ' menu-item-expanded' : '') + '" data-key="' + item.key + '">';
        if (level === 1 && item.icon) {
          html += '<span class="menu-icon">' + item.icon + '</span>';
        }
        html += '<span class="menu-text">' + item.label + '</span>';
        html += '<span class="menu-arrow"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg></span>';
        html += '</div>';
        html += '<div class="menu-submenu"' + (expanded ? '' : ' style="display:none"') + '>';
        html += renderSidebarHTML(item.children, basePath, activeKey, level + 1);
        html += '</div>';
        html += '</div>';
      } else {
        var activeClass = isActive ? ' menu-item-active' : '';
        html += '<a class="menu-item level-' + level + activeClass + '" href="' + basePath + item.path + '" data-key="' + item.key + '">';
        if (level === 1 && item.icon) {
          html += '<span class="menu-icon">' + item.icon + '</span>';
        }
        html += '<span class="menu-text">' + item.label + '</span>';
        html += '</a>';
      }
    }
    return html;
  }

  function renderBreadcrumb(activeKey) {
    if (activeKey === 'home') {
      return '<nav class="flex items-center text-sm"><span class="text-[#000000d9]">首页</span></nav>';
    }
    var info = findPageInfo(activeKey, MENU_DATA);
    if (!info) return '';
    var html = '<nav class="flex items-center text-sm">';
    html += '<a href="' + getBasePath() + 'layout.html" class="text-[#00000073] hover:text-[#1677ff]">首页</a>';
    for (var i = 0; i < info.parents.length; i++) {
      html += '<span class="mx-2 text-[#00000040]">/</span>';
      html += '<span class="text-[#00000073]">' + info.parents[i].label + '</span>';
    }
    html += '<span class="mx-2 text-[#00000040]">/</span>';
    html += '<span class="text-[#000000d9]">' + info.item.label + '</span>';
    html += '</nav>';
    return html;
  }

  function injectStyles() {
    var cssText = [
      '*{margin:0;padding:0;box-sizing:border-box}',
      'html,body{height:100%;font-family:"Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',
      '#app{display:flex!important;height:100vh!important;overflow:hidden!important}',
      '#sidebar{width:224px!important;min-width:224px!important;max-width:224px!important;height:100vh!important;background:#001529!important;display:flex!important;flex-direction:column!important;overflow:hidden!important;flex-shrink:0!important}',
      '.sidebar-logo{height:64px;display:flex;align-items:center;justify-content:center;padding:0 16px;border-bottom:1px solid rgba(255,255,255,0.08)}',
      '.sidebar-logo h1{color:#fff;font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.sidebar-menu{flex:1;overflow-y:auto;overflow-x:hidden;padding:8px 0}',
      '.sidebar-menu::-webkit-scrollbar{width:4px}',
      '.sidebar-menu::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.2);border-radius:2px}',
      '.menu-item{display:flex;align-items:center;padding:0 16px;height:40px;line-height:40px;color:rgba(255,255,255,0.65);cursor:pointer;transition:all .2s;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.menu-item:hover{color:#fff;background:rgba(255,255,255,0.08)}',
      '.menu-item.level-1{padding-left:24px;font-size:14px}',
      '.menu-item.level-2{padding-left:48px;font-size:14px}',
      '.menu-item.level-3{padding-left:72px;font-size:14px}',
      '.menu-item-active{color:#fff!important;background:#1677ff!important}',
      '.menu-icon{margin-right:8px;display:inline-flex;align-items:center;flex-shrink:0}',
      '.menu-text{flex:1;overflow:hidden;text-overflow:ellipsis}',
      '.menu-arrow{margin-left:auto;transition:transform .2s;display:inline-flex;align-items:center;flex-shrink:0}',
      '.menu-item-expanded .menu-arrow{transform:rotate(180deg)}',
      '.menu-submenu{overflow:hidden;transition:max-height .2s ease}',
      '#topnav{height:64px!important;min-height:64px!important;max-height:64px!important;background:#fff!important;border-bottom:1px solid #f0f0f0!important;display:flex!important;align-items:center!important;justify-content:space-between!important;padding:0 24px!important;flex-shrink:0!important}',
      '.topnav-right{display:flex;align-items:center;gap:16px}',
      '.topnav-right .notification{position:relative;cursor:pointer;color:#00000073}',
      '.topnav-right .notification .badge{position:absolute;top:-4px;right:-4px;background:#ff4d4f;color:#fff;font-size:10px;min-width:16px;height:16px;line-height:16px;text-align:center;border-radius:8px;padding:0 4px}',
      '.topnav-right .user-info{display:flex;align-items:center;gap:8px;cursor:pointer;color:#000000d9}',
      '.topnav-right .avatar{width:28px;height:28px;border-radius:50%;background:#1677ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px}',
      '.ant-btn{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:32px!important;padding:0 15px!important;font-size:14px!important;border-radius:6px!important;cursor:pointer!important;transition:all .2s!important;border:1px solid #d9d9d9!important;background:#fff!important;color:#000000d9!important;white-space:nowrap!important;gap:4px}',
      '.ant-btn:hover{color:#4096ff!important;border-color:#4096ff!important}',
      '.ant-btn-primary{background:#1677ff!important;border-color:#1677ff!important;color:#fff!important}',
      '.ant-btn-primary:hover{background:#4096ff!important;border-color:#4096ff!important}',
      '.ant-btn-danger{background:#ff4d4f!important;border-color:#ff4d4f!important;color:#fff!important}',
      '.ant-btn-danger:hover{background:#ff7875!important;border-color:#ff7875!important}',
      '.ant-btn-link{border:none!important;background:transparent!important;color:#1677ff!important;padding:0 4px!important;height:auto!important}',
      '.ant-btn-link:hover{color:#4096ff!important}',
      '.ant-input{height:32px!important;padding:0 12px!important;border:1px solid #d9d9d9!important;border-radius:6px!important;font-size:14px!important;color:#000000d9!important;width:100%!important;outline:none}',
      '.ant-input:focus{border-color:#1677ff!important;box-shadow:0 0 0 2px rgba(22,119,255,.1)!important}',
      '.ant-select{height:32px!important;padding:0 12px!important;border:1px solid #d9d9d9!important;border-radius:6px!important;font-size:14px!important;color:#000000d9!important;background:#fff!important;cursor:pointer!important;display:flex!important;align-items:center!important;justify-content:space-between!important;min-width:120px!important}',
      '.ant-tabs{display:flex!important;align-items:center!important;gap:0!important;background:#fff!important;border-bottom:2px solid #f0f0f0!important;padding:0!important;margin-bottom:16px!important;overflow-x:auto!important}',
      '.ant-tab{display:inline-flex!important;align-items:center!important;height:40px!important;padding:0 20px!important;font-size:14px!important;color:#00000073!important;cursor:pointer!important;transition:all .2s!important;border:none!important;background:transparent!important;white-space:nowrap!important;position:relative!important;margin:0!important}',
      '.ant-tab:hover{color:#1677ff!important}',
      '.ant-tab.active{color:#1677ff!important;font-weight:500!important}',
      '.ant-tab.active::after{content:""!important;position:absolute!important;bottom:-2px!important;left:0!important;right:0!important;height:2px!important;background:#1677ff!important}',
      '.ant-table-wrapper{background:#fff!important;border-radius:8px!important;overflow:hidden!important}',
      '.ant-table{width:100%!important;border-collapse:collapse!important}',
      '.ant-table thead th{background:#fafafa!important;padding:12px 16px!important;font-weight:600!important;font-size:14px!important;color:#000000d9!important;text-align:left!important;border-bottom:1px solid #f0f0f0!important;white-space:nowrap!important}',
      '.ant-table tbody td{padding:12px 16px!important;font-size:14px!important;color:#000000d9!important;border-bottom:1px solid #f0f0f0!important}',
      '.ant-table tbody tr:hover{background:#fafafa}',
      '.ant-tag{display:inline-flex;align-items:center;height:22px;padding:0 7px;font-size:12px;border-radius:4px;border:1px solid;white-space:nowrap}',
      '.ant-tag-success{color:#52c41a;background:#f6ffed;border-color:#b7eb8f}',
      '.ant-tag-warning{color:#faad14;background:#fffbe6;border-color:#ffe58f}',
      '.ant-tag-error{color:#ff4d4f;background:#fff2f0;border-color:#ffccc7}',
      '.ant-tag-processing{color:#1677ff;background:#e6f4ff;border-color:#91caff}',
      '.ant-tag-default{color:#00000073;background:#fafafa;border-color:#d9d9d9}',
      '.ant-pagination{display:flex;align-items:center;gap:8px;margin-top:16px;font-size:14px;color:#00000073}',
      '.ant-pagination .page-item{min-width:32px;height:32px;display:flex;align-items:center;justify-content:center;border:1px solid #d9d9d9;border-radius:6px;cursor:pointer;transition:all .2s;padding:0 6px}',
      '.ant-pagination .page-item:hover{color:#1677ff;border-color:#1677ff}',
      '.ant-pagination .page-item.active{background:#1677ff;border-color:#1677ff;color:#fff}',
      '.ant-modal-mask{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,.45)!important;z-index:1000!important;display:flex!important;align-items:center!important;justify-content:center!important}',
      '.ant-modal{background:#fff!important;border-radius:8px!important;width:600px!important;max-width:90vw!important;max-height:80vh!important;display:flex!important;flex-direction:column!important;box-shadow:0 6px 16px rgba(0,0,0,.08),0 3px 6px -4px rgba(0,0,0,.12),0 9px 28px 8px rgba(0,0,0,.05)!important}',
      '.ant-modal.wide{width:800px!important}',
      '.ant-modal-header{padding:16px 24px!important;border-bottom:1px solid #f0f0f0!important;display:flex!important;align-items:center!important;justify-content:space-between!important}',
      '.ant-modal-header h3{font-size:16px;font-weight:600;color:#000000d9}',
      '.ant-modal-close{cursor:pointer;color:#00000073;font-size:18px;line-height:1;transition:color .2s}',
      '.ant-modal-close:hover{color:#000000d9}',
      '.ant-modal-body{padding:24px;overflow-y:auto;flex:1}',
      '.ant-modal-footer{padding:12px 24px;border-top:1px solid #f0f0f0;display:flex;justify-content:flex-end;gap:8px}',
      '.ant-form-item{margin-bottom:20px;display:flex;flex-direction:column}',
      '.ant-form-label{text-align:left;padding-bottom:6px;line-height:20px;font-size:14px;color:#000000d9;font-weight:500}',
      '.ant-form-label .required{color:#ff4d4f;margin-right:4px}',
      '.ant-form-control{width:100%}',
      '.filter-bar{background:#fff!important;padding:16px 24px!important;border-radius:8px!important;margin-bottom:16px!important}',
      '.filter-bar .filter-row{display:flex!important;flex-wrap:wrap!important;gap:20px 24px!important;align-items:center!important}',
      '.filter-bar .filter-item{display:inline-flex!important;flex-direction:row!important;align-items:center!important;gap:8px!important}',
      '.filter-bar .filter-item label{font-size:14px!important;color:#000000d9!important;font-weight:normal!important;white-space:nowrap!important;min-width:auto!important}',
      '.page-header{display:flex!important;align-items:center!important;justify-content:space-between!important;margin-bottom:16px!important}',
      '.page-header h2{font-size:20px!important;font-weight:600!important;color:#000000d9!important}',
      '.card{background:#fff!important;border-radius:8px!important;padding:16px 24px!important}',
      '.stat-card{background:#fff!important;border-radius:8px!important;padding:20px 24px!important;display:flex!important;align-items:center!important;gap:16px!important}',
      '.stat-card .stat-icon{width:48px;height:48px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:24px}',
      '.stat-card .stat-info .stat-value{font-size:28px;font-weight:600;color:#000000d9;line-height:1.2}',
      '.stat-card .stat-info .stat-label{font-size:14px;color:#00000073;margin-top:4px}',
      '.ant-descriptions{width:100%}',
      '.ant-descriptions-row{display:flex;border-bottom:1px solid #f0f0f0}',
      '.ant-descriptions-label{width:140px;min-width:140px;padding:10px 12px;background:#fafafa;font-size:14px;color:#00000073;font-weight:500}',
      '.ant-descriptions-value{flex:1;padding:10px 12px;font-size:14px;color:#000000d9}',
      '.ant-modal-body .ant-table th,.ant-modal-body .ant-table td{text-align:center!important}',
      '.ant-modal-body .ant-table-wrapper .ant-pagination-bar{padding:12px 0 0;display:flex;align-items:center;justify-content:flex-end;gap:12px;font-size:13px;color:#00000073}',
      '.ant-modal-body .ant-pagination-bar select{width:70px;height:28px;font-size:12px;padding:0 4px;border:1px solid #d9d9d9;border-radius:6px;outline:none;background:#fff;cursor:pointer}',
      '.ant-modal-body .ant-pagination-bar button{height:28px;padding:0 12px;font-size:12px}',
      '.ant-modal-body .ant-table-wrapper{box-shadow:none!important;border:1px solid #f0f0f0;border-radius:6px}'
    ].join('');
    
    var css = document.createElement('style');
    css.setAttribute('data-ant-style', 'true');
    css.textContent = cssText;
    document.head.appendChild(css);
  }

  function initSidebarEvents() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.addEventListener('click', function (e) {
      var menuItem = e.target.closest('.menu-item');
      if (!menuItem) return;
      // 如果点击的是链接（有href属性），不处理展开/收起，让页面正常跳转
      if (menuItem.tagName === 'A') {
        return;
      }
      // 支持一级和二级菜单标题触发展开/收起，实现三级菜单导航
      if (!menuItem.classList.contains('level-1') && !menuItem.classList.contains('level-2')) return;
      var group = menuItem.parentElement;
      if (!group.classList.contains('menu-group')) return;
      var submenu = group.querySelector('.menu-submenu');
      if (!submenu) return;
      // 对于非链接的菜单项（有子菜单的），阻止默认行为并处理展开/收起
      e.preventDefault();
      var isExpanded = group.classList.contains('expanded');
      if (isExpanded) {
        group.classList.remove('expanded');
        menuItem.classList.remove('menu-item-expanded');
        submenu.style.display = 'none';
      } else {
        group.classList.add('expanded');
        menuItem.classList.add('menu-item-expanded');
        submenu.style.display = 'block';
      }
    });
  }

  function openModal(title, bodyHTML, options) {
    options = options || {};
    var wide = options.wide;
    var footerHTML = options.footer || '<button class="ant-btn" onclick="closeModal()">取消</button><button class="ant-btn ant-btn-primary" onclick="closeModal()">确定</button>';
    var mask = document.createElement('div');
    mask.className = 'ant-modal-mask';
    mask.id = 'modal-mask';
    mask.onclick = function (e) { if (e.target === mask) closeModal(); };
    var modal = document.createElement('div');
    modal.className = 'ant-modal' + (wide ? ' wide' : '');
    modal.innerHTML =
      '<div class="ant-modal-header"><h3>' + title + '</h3><span class="ant-modal-close" onclick="closeModal()">✕</span></div>' +
      '<div class="ant-modal-body">' + bodyHTML + '</div>' +
      '<div class="ant-modal-footer">' + footerHTML + '</div>';
    mask.appendChild(modal);
    document.body.appendChild(mask);
    if (typeof options.onOpen === 'function') {
      setTimeout(function () { options.onOpen(); }, 50);
    }
    setTimeout(convertStaticSelects, 50);
  }

  function closeModal() {
    var mask = document.getElementById('modal-mask');
    if (mask) mask.remove();
  }

  function init() {
    if (typeof PAGE_ID === 'undefined') {
      console.warn('[common.js] PAGE_ID not defined');
      return;
    }
    injectStyles();
    var basePath = getBasePath();
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.cssText = 'width:224px;min-width:224px;max-width:224px;height:100vh;background:#001529;display:flex;flex-direction:column;overflow:hidden;flex-shrink:0';
      sidebar.innerHTML =
        '<div class="sidebar-logo"><h1>智能网联汽车安全监测平台</h1></div>' +
        '<nav class="sidebar-menu">' + renderSidebarHTML(MENU_DATA, basePath, PAGE_ID) + '</nav>';
    }
    var topnav = document.getElementById('topnav');
    if (topnav) {
      topnav.style.cssText = 'height:64px;min-height:64px;background:#fff;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;padding:0 24px;flex-shrink:0';
      topnav.innerHTML =
        '<div>' + renderBreadcrumb(PAGE_ID) + '</div>' +
        '<div class="topnav-right">' +
          '<span class="notification"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg><span class="badge">3</span></span>' +
          '<span class="user-info"><span class="avatar">管</span><span>管理员</span></span>' +
        '</div>';
    }
    var app = document.getElementById('app');
    if (app) {
      app.style.cssText = 'display:flex!important;height:100vh!important;overflow:hidden!important;flex-direction:row!important';
    }
    initSidebarEvents();
    convertStaticSelects();
  }

  var SELECT_OPTIONS_MAP = {
    '全部': ['全部'],
    '全部区域': ['全部区域','樊城区','襄城区','襄州区','南漳县','谷城县','老河口市','枣阳市','宜城市','保康县'],
    '申请类型': ['全部','新增申请','续期申请','变更申请','新增车辆相同配置'],
    '申请状态': ['全部','第三方初审中','联席小组审批中','临牌回传中','已通过','已退回','已撤回'],
    '道路等级': ['全部','一级公路','二级公路','三级公路','四级公路','城市主干路','城市次干路','城市支路'],
    '开放状态': ['全部','开放','暂停','关闭','待开放'],
    '自动驾驶等级': ['全部','L0','L1','L2','L3','L4','L5'],
    '所属区域': ['全部','樊城区','襄城区','襄州区','南漳县','谷城县','老河口市','枣阳市','宜城市','保康县'],
    '所属企业': ['全部','襄阳智行科技','东风汽车','百度Apollo','华为MDC','蔚来汽车','小鹏汽车','AutoX','长安汽车'],
    '业务类型': ['全部','道路测试','示范应用','示范运营'],
    '变更类型': ['全部','新增开放','暂停开放','恢复开放','关闭开放','等级调整'],
    '驾照类型': ['全部','A1','A2','A3','B1','B2','C1','C2'],
    '处理状态': ['全部','待处理','处理中','已处理','已关闭'],
    '告警类型': ['全部','超速告警','偏离路线','紧急制动','碰撞预警','系统故障','通信异常'],
    '故障类型': ['全部','传感器故障','通信故障','控制器故障','制动系统故障','转向系统故障'],
    '越界方向': ['全部','驶入禁入区','驶出允许区'],
    '事故类型': ['全部','追尾事故','侧面碰撞','正面碰撞','刮擦事故','单车事故','翻车事故'],
    '当前审批节点': ['全部','第三方初审','联席小组审批','临牌回传'],
    '审核状态': ['全部','待审核','审核中','已通过','已退回'],
    '终止类型': ['全部','主动终止','强制终止','到期终止'],
    '触发方式': ['全部','自动触发','人工触发'],
    '报告类型': ['全部','月度报告','季度报告','年度报告','专项报告'],
    '报送对象': ['全部','工业和信息化部','公安部','交通运输部'],
    '材料类型': ['全部','专家评审材料','现场实车审查材料','安全评估材料','测试报告'],
    '评估等级': ['全部','优秀','良好','一般','较差'],
    '生成方式': ['全部','自动生成','人工评估'],
    '信息类型': ['全部','公告公示','办事指南','测试示范报告'],
    '发布状态': ['全部','已发布','待发布','已下架'],
    '适用对象': ['全部','测试主体','第三方机构','社会公众','监管部门'],
    '报告周期': ['全部','月度','季度','年度'],
    '子类型': ['全部','政策法规','技术标准','管理规范','测试公告'],
    '所属应用': ['全部','准入管理','监测管理','数据分析','道路管理','平台管理'],
    '状态': ['全部','启用','禁用'],
    '操作类型': ['全部','新增','修改','删除','查询','导出','审核'],
    '在线/离线': ['全部','在线','离线'],
    '风险等级': ['全部','低风险','中风险','高风险'],
    '复杂度等级': ['全部','简单','一般','复杂'],
    '建议开放等级': ['全部','一级','二级','三级','四级'],
    '车道类型': ['全部','单车道','双车道','多车道'],
    '交通流量等级': ['全部','低','中','高'],
    '感知设备类型': ['全部','摄像头','激光雷达','毫米波雷达','超声波雷达','GNSS'],
    '边缘计算节点': ['全部','有','无'],
    '适用测试场景': ['全部','城市道路','高速公路','乡村道路','停车场','交叉路口'],
    '适用自动驾驶等级': ['全部','L2','L3','L4','L5'],
    '适用业务类型': ['全部','道路测试','示范应用','示范运营'],
    '执行动作': ['全部','自动开放','自动暂停','人工审核'],
    '允许测试类型': ['全部','道路测试','示范应用','示范运营'],
    '是否必填': ['全部','是','否'],
    '性别': ['全部','男','女'],
    '有无严重交通违法行为': ['全部','有','无'],
    '有无交通事故记录': ['全部','有','无'],
    '是否熟悉': ['全部','是','否'],
    '是否掌握': ['全部','是','否'],
    '是否具备': ['全部','是','否'],
    '行政区域': ['全部','樊城区','襄城区','襄州区','南漳县','谷城县','老河口市','枣阳市','宜城市','保康县'],
    '运行模式': ['全部','道路测试','示范应用','示范运营'],
    '企业': ['全部','襄阳智行科技','东风汽车','百度Apollo','华为MDC','蔚来汽车','小鹏汽车','AutoX','长安汽车'],
    '事故类型_筛选': ['全部','追尾事故','侧面碰撞','正面碰撞','刮擦事故','单车事故','翻车事故'],
    '时段': ['全部','工作日','周末','全天'],
    '画像维度': ['全局画像','区域画像','企业画像'],
    '道路参数': ['曲率','坡度','路面类型','车道数','限速值'],
    '报告模板': ['智能网联汽车安全监测平台数据分析报告模板','智能网联汽车安全监测平台产业发展分析报告模板','智能网联汽车安全监测平台行业分析报告模板']
  };

  function getOptionsForSelect(text, parentLabel) {
    var key = parentLabel || text;
    if (SELECT_OPTIONS_MAP[key]) return SELECT_OPTIONS_MAP[key];
    if (text === '全部') return ['全部'];
    if (text.indexOf('全部') === 0) return [text];
    if (text.indexOf('请选择') === 0) return [];
    return [text];
  }

  function convertStaticSelects() {
    var selects = document.querySelectorAll('.ant-select');
    for (var i = 0; i < selects.length; i++) {
      var el = selects[i];
      if (el.tagName === 'SELECT') continue;
      if (el.getAttribute('onclick')) continue;
      var text = el.textContent.trim();
      var parentLabel = '';
      var filterItem = el.closest('.filter-item');
      var formItem = el.closest('.ant-form-item');
      if (filterItem) {
        var labelEl = filterItem.querySelector('label');
        if (labelEl) parentLabel = labelEl.textContent.trim();
      } else if (formItem) {
        var labelEl2 = formItem.querySelector('.ant-form-label');
        if (labelEl2) parentLabel = labelEl2.textContent.replace(/[*\s]/g, '');
      }
      var options = getOptionsForSelect(text, parentLabel);
      if (options.length === 0) continue;
      var selectEl = document.createElement('select');
      selectEl.className = 'ant-input';
      selectEl.style.cssText = 'height:32px;padding:0 8px 0 12px;border:1px solid #d9d9d9;border-radius:6px;font-size:14px;outline:none;width:100%;cursor:pointer;background-color:#fff;';
      for (var j = 0; j < options.length; j++) {
        var opt = document.createElement('option');
        opt.value = options[j];
        opt.textContent = options[j];
        if (options[j] === text) opt.selected = true;
        selectEl.appendChild(opt);
      }
      el.parentNode.replaceChild(selectEl, el);
    }
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();