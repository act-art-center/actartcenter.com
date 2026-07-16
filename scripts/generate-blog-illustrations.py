from pathlib import Path

OUT = Path('public/blog-illustrations')
OUT.mkdir(parents=True, exist_ok=True)

# Wide 16:9 blog illustrations using the real ACTIE / ARTTY character assets.
# Important: no stickman placeholder figures. Each card is unique by character, pose, prop, palette, and composition.
POSTS = [
    {
        'slug': 'blog-hero',
        'title': 'ACT 미술치료 이야기',
        'bg': '#E8D7B8', 'accent': '#0E5C50',
        'chars': [('/characters/acttie-reading.png', 230, 210, 370), ('/characters/artty-paint.png', 930, 190, 410)],
        'props': 'library',
    },
    {
        'slug': 'grief-art-therapy-loss-recovery',
        'title': '상실의 시간을 지나갈 때',
        'bg': '#D9DFD1', 'accent': '#D9A13B',
        'chars': [('/characters/artty-thoughtful.png', 860, 170, 430)],
        'props': 'lantern_river',
    },
    {
        'slug': 'art-therapy-not-drawing-skill',
        'title': '그림 실력보다 표현의 과정',
        'bg': '#EFE4D3', 'accent': '#C8795A',
        'chars': [('/characters/acttie-reading.png', 870, 185, 405)],
        'props': 'practice_marks',
    },
    {
        'slug': 'unfinished-drawing-art-therapy',
        'title': '완성되지 않은 그림도 이야기입니다',
        'bg': '#F2D9C8', 'accent': '#7FA392',
        'chars': [('/characters/artty-scenes.png', 870, 160, 435)],
        'props': 'unfinished_canvas',
    },
    {
        'slug': 'safe-paper-art-therapy-room',
        'title': '종이가 안전한 자리가 되는 순간',
        'bg': '#E8E0D2', 'accent': '#B9895B',
        'chars': [('/characters/acttie-reading.png', 900, 195, 385)],
        'props': 'safe_paper',
    },
    {
        'slug': 'child-lines-colors-art-therapy',
        'title': '아이의 선과 색을 천천히 보기',
        'bg': '#CFE1DA', 'accent': '#E2B84E',
        'chars': [('/characters/artty-paint.png', 880, 145, 460)],
        'props': 'child_lines',
    },
    {
        'slug': 'caregiver-fatigue-art-therapy',
        'title': '돌봄으로 지친 마음을 쉬게 하는 시간',
        'bg': '#EFE1C6', 'accent': '#6E8B7C',
        'chars': [('/characters/acttie-laptop.png', 875, 190, 405)],
        'props': 'rest_cup',
    },
    {
        'slug': 'parent-words-for-child-drawing',
        'title': '아이 그림 앞에서 건네는 말',
        'bg': '#DCE7D4', 'accent': '#D7A06A',
        'chars': [('/characters/artty-welcome.png', 850, 170, 430)],
        'props': 'speech_bubbles',
    },
    {
        'slug': 'art-therapy-science',
        'title': '미술치료 효과의 과학적 근거',
        'bg': '#E9D6B8', 'accent': '#5F8A8B',
        'chars': [('/characters/acttie-laptop.png', 900, 185, 400)],
        'props': 'science_chart',
    },
    {
        'slug': 'act-6-processes',
        'title': 'ACT의 6가지 핵심 프로세스',
        'bg': '#E8C46B', 'accent': '#2E6B5F',
        'chars': [('/characters/twins-together.png', 790, 175, 520)],
        'props': 'hexaflex',
    },
    {
        'slug': 'anxiety-art-therapy',
        'title': '불안을 그림으로 표현하기',
        'bg': '#EAD9CF', 'accent': '#7788A8',
        'chars': [('/characters/artty-thoughtful.png', 890, 160, 430)],
        'props': 'thread_unwind',
    },
    {
        'slug': 'mindfulness-drawing',
        'title': '마음챙김 드로잉',
        'bg': '#F0DFC0', 'accent': '#8A9A5B',
        'chars': [('/characters/acttie-reading.png', 910, 190, 390)],
        'props': 'mindful_circle',
    },
    {
        'slug': 'trauma-art-expression',
        'title': '트라우마와 미술 표현의 관계',
        'bg': '#D7E0E0', 'accent': '#8D6E63',
        'chars': [('/characters/artty-scenes.png', 860, 160, 440)],
        'props': 'bridge',
    },
    {
        'slug': 'values-vision-board',
        'title': '가치 탐색 비전 보드',
        'bg': '#DDE7C8', 'accent': '#C48A3A',
        'chars': [('/characters/twins-together.png', 790, 160, 520)],
        'props': 'vision_stars',
    },
]

def prop_svg(kind: str) -> str:
    common = '<path d="M110 735 C360 660 585 805 820 720 C1045 640 1265 780 1490 700" fill="none" stroke="#0E5C50" stroke-width="16" stroke-linecap="round" opacity="0.16"/>'
    if kind == 'library':
        return '''<rect x="130" y="145" width="600" height="110" rx="32" fill="#fff" opacity="0.32"/>
<rect x="175" y="180" width="90" height="38" rx="10" fill="#0E5C50" opacity="0.45"/>
<rect x="290" y="175" width="120" height="48" rx="10" fill="#D9A13B" opacity="0.75"/>
<rect x="435" y="182" width="88" height="36" rx="10" fill="#C8795A" opacity="0.65"/>
<rect x="550" y="176" width="115" height="46" rx="10" fill="#fff" opacity="0.65"/>''' + common
    if kind == 'lantern_river':
        return '''<path d="M0 660 C260 585 430 705 760 625 C1050 555 1270 660 1600 590 L1600 900 L0 900 Z" fill="#fff" opacity="0.30"/>
<path d="M250 265 C320 265 320 385 250 385 C180 385 180 265 250 265Z" fill="#fff" opacity="0.74" stroke="#111" stroke-width="8"/><path d="M250 303 C225 335 232 362 254 369 C282 347 274 323 250 303Z" fill="#D9A13B"/>''' + common
    if kind == 'practice_marks':
        dots=''.join(f'<circle cx="{160+i*90}" cy="{190+(i%4)*78}" r="12" fill="#0E5C50" opacity="0.20"/>' for i in range(11))
        return dots + '<path d="M210 600 C360 520 455 655 610 575" fill="none" stroke="#C8795A" stroke-width="18" stroke-linecap="round" opacity="0.48"/>' + common
    if kind == 'unfinished_canvas':
        return '''<rect x="165" y="190" width="520" height="355" rx="36" fill="#fff" opacity="0.68" stroke="#111" stroke-width="8"/>
<path d="M250 395 C345 265 455 495 590 335" fill="none" stroke="#0E5C50" stroke-width="16" stroke-dasharray="70 34" stroke-linecap="round" opacity="0.52"/>''' + common
    if kind == 'safe_paper':
        return '''<rect x="160" y="165" width="540" height="390" rx="42" fill="#fff" opacity="0.62" stroke="#0E5C50" stroke-width="10" stroke-dasharray="26 20"/>
<path d="M430 380 C350 320 320 240 380 220 C410 210 430 245 430 275 C438 245 465 210 500 222 C565 248 520 325 430 380Z" fill="#D35D47" opacity="0.82"/>''' + common
    if kind == 'child_lines':
        return '''<path d="M135 610 C285 470 440 690 600 545 C760 405 865 650 1010 520" fill="none" stroke="#D35D47" stroke-width="20" stroke-linecap="round" opacity="0.42"/>
<circle cx="250" cy="245" r="46" fill="#fff" opacity="0.38"/><circle cx="375" cy="310" r="28" fill="#fff" opacity="0.34"/>''' + common
    if kind == 'rest_cup':
        return '''<circle cx="310" cy="260" r="118" fill="#fff" opacity="0.28"/>
<path d="M255 380 H390 L360 545 H285Z" fill="#fff" opacity="0.75" stroke="#111" stroke-width="8"/>
<path d="M390 415 C465 410 460 505 370 485" fill="none" stroke="#111" stroke-width="8"/>
<path d="M285 340 C270 300 300 280 285 240 M340 340 C320 300 355 280 338 240" fill="none" stroke="#6E8B7C" stroke-width="9" stroke-linecap="round" opacity="0.7"/>''' + common
    if kind == 'speech_bubbles':
        return '''<path d="M190 185 H545 Q590 185 590 230 V365 Q590 410 545 410 H335 L260 478 L282 410 H190 Q145 410 145 365 V230 Q145 185 190 185Z" fill="#fff" opacity="0.72" stroke="#111" stroke-width="8"/>
<circle cx="285" cy="300" r="12" fill="#D7A06A"/><circle cx="370" cy="300" r="12" fill="#D7A06A"/><circle cx="455" cy="300" r="12" fill="#D7A06A"/>''' + common
    if kind == 'science_chart':
        return '''<rect x="160" y="165" width="560" height="390" rx="36" fill="#fff" opacity="0.62" stroke="#111" stroke-width="8"/>
<path d="M235 485 H650 M235 390 H650 M235 295 H650" stroke="#5F8A8B" stroke-width="7" opacity="0.38"/>
<path d="M245 455 L350 355 L475 392 L625 260" fill="none" stroke="#0E5C50" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>''' + common
    if kind == 'hexaflex':
        return '''<polygon points="380,145 560,250 560,460 380,565 200,460 200,250" fill="#fff" opacity="0.58" stroke="#111" stroke-width="8"/>
<circle cx="380" cy="355" r="62" fill="#2E6B5F" opacity="0.72"/>
<g fill="#2E6B5F" opacity="0.55"><circle cx="380" cy="200" r="25"/><circle cx="515" cy="280" r="25"/><circle cx="515" cy="430" r="25"/><circle cx="380" cy="510" r="25"/><circle cx="245" cy="430" r="25"/><circle cx="245" cy="280" r="25"/></g>''' + common
    if kind == 'thread_unwind':
        return '''<path d="M155 555 C340 225 500 690 690 395 C890 80 1040 700 1390 300" fill="none" stroke="#0E5C50" stroke-width="18" stroke-linecap="round" opacity="0.36"/>
<circle cx="310" cy="330" r="60" fill="#fff" opacity="0.38"/><circle cx="310" cy="330" r="28" fill="#7788A8" opacity="0.48"/>''' + common
    if kind == 'mindful_circle':
        return '''<circle cx="410" cy="410" r="215" fill="none" stroke="#fff" stroke-width="24" opacity="0.46"/>
<circle cx="410" cy="410" r="132" fill="none" stroke="#0E5C50" stroke-width="14" opacity="0.40"/>
<circle cx="410" cy="410" r="48" fill="#8A9A5B" opacity="0.45"/>''' + common
    if kind == 'bridge':
        return '''<path d="M165 615 C360 390 565 390 760 615" fill="none" stroke="#fff" stroke-width="34" stroke-linecap="round" opacity="0.58"/>
<path d="M215 615 C385 465 535 465 710 615" fill="none" stroke="#0E5C50" stroke-width="12" stroke-linecap="round" opacity="0.45"/>''' + common
    if kind == 'vision_stars':
        return ''.join(f'<path d="M{170+i*115} {165+(i%2)*88} l20 44 48 6-36 32 10 48-42-25-42 25 10-48-36-32 48-6z" fill="#fff" opacity="0.42"/>' for i in range(7)) + common
    return common

def svg(item):
    title = item['title']
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="ACT ART CENTER blog illustration: {title}">
  <rect width="1600" height="900" rx="64" fill="#F8F4EC"/>
  <rect x="70" y="70" width="1460" height="760" rx="72" fill="{item['bg']}"/>
  <circle cx="1245" cy="190" r="98" fill="{item['accent']}" opacity="0.74"/>
  <circle cx="315" cy="190" r="58" fill="#fff" opacity="0.40"/>
  <text x="145" y="120" font-family="Pretendard, Arial, sans-serif" font-size="34" font-weight="700" fill="#111" opacity="0.58">ACT ART CENTER</text>
  {prop_svg(item['props'])}
'''
    for href, x, y, w in item['chars']:
        content += f'  <image href="{href}" x="{x}" y="{y}" width="{w}" height="{w}" preserveAspectRatio="xMidYMid meet"/>\n'
    content += '</svg>\n'
    return content

for item in POSTS:
    path = OUT / f"{item['slug']}.svg"
    path.write_text(svg(item), encoding='utf-8')
    print(path)
