with open('js/main.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'mobile' in l.lower() or 'nav' in l.lower() or 'init' in l.lower():
        print(f"Line {i+1}: {l.strip()[:80]}")
