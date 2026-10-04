import urllib.request

vids = [
    '/assets/enteryclip1-D-9BQZ3m.mp4',
    '/assets/enteryjustclip2-B4fFT3JE.mp4',
    '/assets/livingclip3-CMaf897D.mp4',
    '/assets/kitchenclip4-BgDz7ZPc.mp4',
    '/assets/bedroomclip5-C6HfqWUM.mp4',
    '/assets/bathroomclip6-DPo7Ze31.mp4'
]

for v in vids:
    url = f'http://localhost:4173{v}'
    req = urllib.request.Request(url, headers={'Range': 'bytes=0-1024'})
    with urllib.request.urlopen(req) as resp:
        print(f'{v}: status={resp.status}, content-range={resp.headers.get("Content-Range")}')
