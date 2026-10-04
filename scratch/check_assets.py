import urllib.request
import re

with urllib.request.urlopen('http://localhost:4173/') as resp:
    html = resp.read().decode('utf-8')

js_files = re.findall(r'src="([^"]+)"', html)
css_files = re.findall(r'href="([^"]+\.css)"', html)

print('JS files in HTML:', js_files)
print('CSS files in HTML:', css_files)

for f in js_files + css_files:
    url = f'http://localhost:4173{f}' if f.startswith('/') else f'http://localhost:4173/{f}'
    try:
        with urllib.request.urlopen(url) as r:
            data = r.read()
            print(f'Fetched {url}: Status {r.status}, size {len(data)} bytes')
            if f.endswith('.js'):
                # Check for video asset references inside JS bundle
                vids = re.findall(r'/assets/[^"]+\.mp4', data.decode('utf-8', errors='ignore'))
                print('Referenced MP4s inside JS:', len(vids), vids)
    except Exception as e:
        print(f'Failed {url}: {e}')
