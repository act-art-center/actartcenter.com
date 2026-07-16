from pathlib import Path

OUT = Path('public/blog-illustrations')
OUT.mkdir(parents=True, exist_ok=True)

# 16:9 horizontal illustrations for blog cards. Each slug has a distinct ACTIE/ARTTY scene.
posts = [
    ('blog-hero', 'ACTIE_ARTTY', 'library-canvas', '#E8D7B8', '#0E5C50', 'wide-shelf'),
    ('grief-art-therapy-loss-recovery', 'ARTTY', 'memory-lantern', '#D9DFD1', '#D9A13B', 'quiet-river'),
    ('art-therapy-not-drawing-skill', 'ACTIE', 'gentle-marks', '#EFE4D3', '#C8795A', 'practice-dots'),
    ('unfinished-drawing-art-therapy', 'ARTTY', 'unfinished-paper', '#F2D9C8', '#7FA392', 'dashed-path'),
    ('safe-paper-art-therapy-room', 'ACTIE', 'safe-paper', '#E8E0D2', '#B9895B', 'safe-frame'),
    ('child-lines-colors-art-therapy', 'ARTTY', 'child-lines', '#CFE1DA', '#E2B84E', 'play-lines'),
    ('caregiver-fatigue-art-therapy', 'ACTIE', 'rest-cup', '#EFE1C6', '#6E8B7C', 'rest-wave'),
    ('parent-words-for-child-drawing', 'ARTTY', 'speech-bubbles', '#DCE7D4', '#D7A06A', 'two-circles'),
    ('art-therapy-science', 'ACTIE', 'chart-easel', '#E9D6B8', '#5F8A8B', 'science-grid'),
    ('act-6-processes', 'ACTIE_ARTTY', 'hexaflex-map', '#E8C46B', '#2E6B5F', 'hexagons'),
    ('anxiety-art-therapy', 'ARTTY', 'thread-unwind', '#EAD9CF', '#7788A8', 'thread'),
    ('mindfulness-drawing', 'ACTIE', 'mindful-circle', '#F0DFC0', '#8A9A5B', 'circle-rings'),
    ('trauma-art-expression', 'ARTTY', 'bridge-canvas', '#D7E0E0', '#8D6E63', 'bridge'),
    ('values-vision-board', 'ACTIE_ARTTY', 'vision-stars', '#DDE7C8', '#C48A3A', 'stars'),
]

def bg_pattern(kind: str) -> str:
    if kind == 'wide-shelf':
        return '<rect x="160" y="180" width="1280" height="70" rx="35" fill="#fff" opacity="0.28"/><path d="M160 650 H1440" stroke="#fff" stroke-width="22" opacity="0.28"/>'
    if kind == 'quiet-river':
        return '<path d="M0 660 C260 585 430 705 760 625 C1050 555 1270 660 1600 590 L1600 900 L0 900 Z" fill="#fff" opacity="0.34"/>'
    if kind == 'practice-dots':
        return ''.join(f'<circle cx="{180+i*120}" cy="{140+(i%3)*80}" r="9" fill="#0E5C50" opacity="0.18"/>' for i in range(11))
    if kind == 'dashed-path':
        return '<path d="M180 650 C390 500 560 720 760 575 S1130 520 1390 650" fill="none" stroke="#0E5C50" stroke-width="18" stroke-linecap="round" stroke-dasharray="95 44" opacity="0.32"/>'
    if kind == 'safe-frame':
        return '<rect x="190" y="145" width="1220" height="610" rx="62" fill="#fff" opacity="0.25" stroke="#0E5C50" stroke-width="12" stroke-dasharray="28 24"/>'
    if kind == 'play-lines':
        return '<path d="M130 675 C285 545 470 735 620 610 C810 455 920 745 1115 605 C1270 495 1390 610 1490 545" fill="none" stroke="#D35D47" stroke-width="18" stroke-linecap="round" opacity="0.38"/>'
    if kind == 'rest-wave':
        return '<circle cx="1220" cy="230" r="145" fill="#fff" opacity="0.25"/><path d="M190 665 C410 575 560 700 750 620 C960 530 1160 700 1400 610" fill="none" stroke="#fff" stroke-width="24" opacity="0.35"/>'
    if kind == 'two-circles':
        return '<circle cx="1190" cy="230" r="100" fill="#fff" opacity="0.3"/><circle cx="1320" cy="330" r="62" fill="#fff" opacity="0.24"/>'
    if kind == 'science-grid':
        return '<path d="M230 670 H1370 M230 560 H1370 M230 450 H1370" stroke="#fff" stroke-width="8" opacity="0.24"/><path d="M310 610 L510 475 L735 530 L960 335 L1250 435" fill="none" stroke="#0E5C50" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" opacity="0.48"/>'
    if kind == 'hexagons':
        return '<polygon points="800,150 1035,285 1035,555 800,690 565,555 565,285" fill="none" stroke="#fff" stroke-width="18" opacity="0.42"/><circle cx="800" cy="420" r="82" fill="#fff" opacity="0.25"/>'
    if kind == 'thread':
        return '<path d="M210 600 C395 260 545 720 720 420 C900 120 1035 770 1390 330" fill="none" stroke="#0E5C50" stroke-width="16" stroke-linecap="round" opacity="0.36"/>'
    if kind == 'circle-rings':
        return '<circle cx="800" cy="430" r="265" fill="none" stroke="#fff" stroke-width="22" opacity="0.36"/><circle cx="800" cy="430" r="155" fill="none" stroke="#0E5C50" stroke-width="14" opacity="0.32"/>'
    if kind == 'bridge':
        return '<path d="M210 670 C430 465 610 465 800 670 C990 465 1170 465 1390 670" fill="none" stroke="#fff" stroke-width="32" stroke-linecap="round" opacity="0.42"/>'
    if kind == 'stars':
        return ''.join(f'<path d="M{230+i*180} {170+(i%2)*95} l20 44 48 6-36 32 10 48-42-25-42 25 10-48-36-32 48-6z" fill="#fff" opacity="0.35"/>' for i in range(7))
    return ''

def figure(x: int, y: int, scale: float, gender: str, action: str) -> str:
    s = f'<g transform="translate({x} {y}) scale({scale})" stroke="#111" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">'
    if gender == 'ARTTY':
        s += '<path d="M-58 -92 C-82 -45 -80 20 -55 58 H62 C84 5 78 -58 46 -92 C18 -124 -30 -126 -58 -92 Z" fill="#111" stroke="none"/>'
    else:
        s += '<path d="M-45 -95 C-62 -66 -50 -40 -16 -34 C22 -27 58 -45 54 -76 C50 -108 -19 -124 -45 -95 Z" fill="#111" stroke="none"/>'
    s += '<circle cx="0" cy="-68" r="43" fill="#fff"/>'
    s += '<circle cx="-14" cy="-72" r="4" fill="#111" stroke="none"/><circle cx="17" cy="-72" r="4" fill="#111" stroke="none"/><path d="M-10 -50 C2 -42 15 -45 23 -54" fill="none" stroke-width="5"/>'
    s += '<path d="M-52 10 Q0 -15 52 10 L67 145 Q0 170 -67 145 Z" fill="#fff"/>'
    s += '<path d="M-46 148 L-58 290 M46 148 L58 290"/><path d="M-68 292 H-18 M18 292 H68"/>'
    arms = {
        'library-canvas': '<path d="M-55 35 L-150 100 M55 35 L150 100"/><rect x="-115" y="75" width="230" height="135" rx="14" fill="#fff"/><path d="M-60 145 H60 M-60 175 H35" stroke-width="6"/>',
        'memory-lantern': '<path d="M-55 35 L-140 95 M55 35 L130 70"/><path d="M95 72 C145 72 145 155 95 155 C45 155 45 72 95 72 Z" fill="#fff"/><path d="M95 102 C78 123 79 139 96 146 C116 135 114 120 95 102 Z" fill="#D9A13B" stroke="none"/>',
        'gentle-marks': '<path d="M-52 35 C-120 70 -145 120 -176 175 M52 35 C118 72 145 122 176 175"/><circle cx="-185" cy="183" r="13" fill="#fff"/><circle cx="185" cy="183" r="13" fill="#fff"/>',
        'unfinished-paper': '<path d="M-58 36 L-155 75 M58 36 L155 75"/><rect x="-120" y="85" width="240" height="150" rx="14" fill="#fff"/><path d="M-70 165 C-20 125 38 205 82 155" fill="none" stroke="#0E5C50" stroke-width="8" stroke-dasharray="30 18"/>',
        'safe-paper': '<path d="M-55 35 L-145 85 M55 35 L145 85"/><rect x="-115" y="80" width="230" height="150" rx="16" fill="#fff"/><path d="M0 170 C-40 140 -55 105 -25 94 C-8 88 0 104 0 116 C2 104 14 88 31 94 C60 108 40 142 0 170 Z" fill="#D35D47" stroke="none"/>',
        'child-lines': '<path d="M-55 35 L-150 125 M52 36 L118 105"/><path d="M100 95 L205 200" stroke-width="18"/><path d="M205 200 L235 232" stroke-width="8"/>',
        'rest-cup': '<path d="M-55 36 L-125 112 M55 36 L125 112"/><path d="M-40 112 H40 L27 185 H-27 Z" fill="#fff"/><path d="M40 128 C82 128 80 170 35 162" fill="none"/>',
        'speech-bubbles': '<path d="M-56 36 L-150 94 M56 36 L150 94"/><path d="M75 -126 H215 Q242 -126 242 -98 V-32 Q242 -6 215 -6 H135 L98 30 L108 -6 H75 Q48 -6 48 -32 V-98 Q48 -126 75 -126 Z" fill="#fff"/>',
        'chart-easel': '<path d="M-55 36 L-150 118 M55 36 L150 90"/><rect x="-125" y="70" width="250" height="145" rx="16" fill="#fff"/><path d="M-82 175 L-28 132 L24 148 L85 104" fill="none" stroke="#0E5C50" stroke-width="8"/>',
        'hexaflex-map': '<path d="M-55 36 L-135 95 M55 36 L135 95"/><polygon points="0,58 70,98 70,178 0,218 -70,178 -70,98" fill="#fff"/><circle cx="0" cy="138" r="19" fill="#0E5C50" stroke="none"/>',
        'thread-unwind': '<path d="M-55 36 C-125 88 -150 150 -205 122 M55 36 C120 80 150 145 205 112"/><path d="M-205 122 C-100 55 20 215 205 112" fill="none" stroke="#D35D47" stroke-width="7"/>',
        'mindful-circle': '<path d="M-55 36 L-145 105 M55 36 L120 135"/><circle cx="0" cy="150" r="82" fill="none" stroke="#0E5C50" stroke-width="8"/><path d="M118 130 L175 190"/>',
        'bridge-canvas': '<path d="M-55 36 L-150 130 M55 36 L150 130"/><path d="M-130 178 C-60 100 60 100 130 178" fill="none" stroke="#0E5C50" stroke-width="12"/>',
        'vision-stars': '<path d="M-55 36 L-150 110 M55 36 L150 110"/><path d="M0 88 l18 40 44 6-33 30 9 44-38-23-38 23 9-44-33-30 44-6z" fill="#D9A13B" stroke="none"/>',
    }
    s += arms.get(action, arms['gentle-marks'])
    s += '</g>'
    return s

def svg(slug, who, action, bg, accent, pattern):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="ACT ART CENTER blog illustration: {slug}">
  <rect width="1600" height="900" rx="64" fill="#F8F4EC"/>
  <rect x="70" y="70" width="1460" height="760" rx="70" fill="{bg}"/>
  <circle cx="1220" cy="190" r="92" fill="{accent}" opacity="0.75"/>
  <circle cx="340" cy="210" r="58" fill="#fff" opacity="0.42"/>
  {bg_pattern(pattern)}
'''
    if who == 'ACTIE_ARTTY':
        content += figure(620, 415, 1.04, 'ACTIE', action) + '\n' + figure(980, 415, 1.04, 'ARTTY', action) + '\n'
    else:
        content += figure(800, 410, 1.25, who, action) + '\n'
    content += '  <path d="M150 780 C420 710 620 825 820 760 C1050 690 1240 820 1450 735" fill="none" stroke="#0E5C50" stroke-width="15" stroke-linecap="round" opacity="0.18"/>\n</svg>\n'
    return content

for slug, who, action, bg, accent, pattern in posts:
    path = OUT / f'{slug}.svg'
    path.write_text(svg(slug, who, action, bg, accent, pattern), encoding='utf-8')
    print(path)
