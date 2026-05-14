# -*- coding: utf-8 -*-
import os, glob, sys, re

ROOT = r'd:\TRAE_vibe_coding\test\UI'

# Read common.js for reference of correct Chinese text
common_js_path = os.path.join(ROOT, 'common.js')
with open(common_js_path, 'r', encoding='utf-8') as f:
    common_content = f.read()

# Extract all Chinese text patterns from common.js for comparison
import re
cn_pattern = re.compile(r'[\u4e00-\u9fff\u3400-\u4dbf]+')

def find_mapping():
    """Try to build a character-level mapping by comparing corrupted vs correct"""
    mapping = {}
    
    # Analyze a few corrupted files
    test_files = glob.glob(os.path.join(ROOT, '**', '*.html'), recursive=True)[:5]
    
    for fpath in test_files:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find garbled Chinese-looking chars (high Unicode range that aren't CJK Unified)
        garbled = set()
        for ch in content:
            if '\u3000' <= ch <= '\u9fff' and ch not in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789':
                garbled.add(ch)
        
        print(f"File: {os.path.basename(fpath)}, unique CJK chars: {len(garbled)}")
    
    return mapping

find_mapping()

# Let's try the most likely recovery: 
# Original GBK → read as Latin-1 → saved as UTF-8
# Recovery: UTF-8 → decode to string → encode as Latin-1 → decode as GBK

print("\n=== Testing recovery on a single file ===")
test_file = os.path.join(ROOT, 'monitor', 'access-apply', 'road-test.html')
with open(test_file, 'r', encoding='utf-8') as f:
    corrupted = f.read()

# The corrupted text contains garbled Chinese. 
# If original was GBK, read as Latin-1, saved as UTF-8:
# Latin-1 of each GBK byte became a Unicode char, then encoded to UTF-8

try:
    # Method A: treat each garbled char as its Latin-1 representation, then decode as GBK
    latin_bytes = corrupted.encode('latin-1')
    recovered = latin_bytes.decode('gbk')
    if '道路测试' in recovered or '申请' in recovered:
        print("METHOD A: SUCCESS (Latin-1 → GBK)")
        print(recovered[:300])
except:
    print("METHOD A: FAILED")

try:
    # Method B: treat each garbled char as its cp1252 representation, then decode as GBK  
    cp1252_bytes = corrupted.encode('cp1252')
    recovered = cp1252_bytes.decode('gbk')
    if '道路测试' in recovered:
        print("METHOD B: SUCCESS (cp1252 → GBK)")
        print(recovered[:300])
except:
    print("METHOD B: FAILED")

# Method C: maybe it's the reverse - UTF-8 was read as GBK and saved as UTF-8
try:
    # Reversed: decode current UTF-8 as GBK → encode as Latin-1 → decode as UTF-8
    gbk_bytes = corrupted.encode('gbk')
    recovered = gbk_bytes.decode('utf-8', errors='replace')
    if '道路测试' in recovered:
        print("METHOD C: SUCCESS")
        print(recovered[:300])
except:
    print("METHOD C: FAILED")

# Method D: raw bytes directly 
with open(test_file, 'rb') as f:
    raw = f.read()
# Skip BOM
if raw[:3] == b'\xef\xbb\xbf':
    raw = raw[3:]
print(f"\nRaw bytes (first 100): {raw[:100].hex()}")
