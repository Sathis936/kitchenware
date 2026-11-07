with open('home2.html', 'r', encoding='utf-8') as f:
    c = f.read()

import re
header = re.findall(r'<header.*?</header>', c, re.DOTALL)
print("=== HEADER ===")
if header:
    print(header[0])

footer = re.findall(r'<footer.*?</footer>', c, re.DOTALL)
print("=== FOOTER ===")
if footer:
    print(footer[0])
