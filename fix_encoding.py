import os
import glob
import sys

def try_recover(data):
    """Try multiple encoding recovery strategies"""
    if data[:3] == b'\xef\xbb\xbf':
        data = data[3:]
    
    # Method 1: Original was GBK, got read as Latin-1 and saved as UTF-8
    try:
        text = data.decode('utf-8')
        latin_bytes = text.encode('latin-1')
        recovered = latin_bytes.decode('gbk')
        if '\u4f01' in recovered:  # enterprise
            return recovered, 'GBK-via-Latin1'
    except:
        pass
    
    # Method 2: Read as UTF-16 then saved as UTF-8  
    try:
        # Try treating current UTF-8 as if it was Windows-1252 of original GBK
        text = data.decode('utf-8')
        raw_bytes = text.encode('cp1252')
        recovered = raw_bytes.decode('gbk')
        if '\u4f01' in recovered:
            return recovered, 'GBK-via-cp1252'
    except:
        pass
    
    # Method 3: the file was GBK and was just re-encoded as UTF-8 (double encoding)
    try:
        text = data.decode('utf-8')
        # The garbled text is actually GBK bytes interpreted as Latin-1 chars
        gbk_bytes = text.encode('raw_unicode_escape')
        recovered = gbk_bytes.decode('gbk')
        if '\u4f01' in recovered:
            return recovered, 'GBK-via-unicode-escape'
    except:
        pass
    
    # Method 4: Try ISO-8859-1
    try:
        text = data.decode('utf-8')
        raw_bytes = text.encode('iso-8859-1')
        recovered = raw_bytes.decode('gbk')
        if '\u4f01' in recovered:
            return recovered, 'GBK-via-iso8859'
    except:
        pass
    
    return None, 'no-match'

root = r'd:\TRAE_vibe_coding\test\UI'
fixed = 0
failed = 0

for fpath in glob.glob(os.path.join(root, '**', '*.html'), recursive=True):
    with open(fpath, 'rb') as f:
        data = f.read()
    
    recovered, method = try_recover(data)
    
    if recovered:
        # Write back as proper UTF-8 without BOM
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(recovered)
        print(f'FIXED [{method}]: {os.path.basename(fpath)}')
        fixed += 1
    else:
        # If already valid, just ensure UTF-8 no BOM
        try:
            text = data.decode('utf-8')
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(text)
            print(f'KEPT: {os.path.basename(fpath)}')
            fixed += 1
        except:
            print(f'FAILED: {os.path.basename(fpath)}')
            failed += 1

print(f'\nTotal: fixed={fixed}, failed={failed}')
