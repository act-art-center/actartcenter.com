export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
};

export const BLOG_CATEGORIES = [
  "전체",
  "미술치료",
  "ACT",
  "증상별 가이드",
  "실습 가이드",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "art-therapy-science",
    title: "미술치료 효과의 과학적 근거",
    excerpt: "Kaimal의 코르티솔 연구, Shella의 병상 미술치료 데이터, van der Kolk의 브로카 발견까지. 미술치료가 어디까지 과학적으로 입증되어 있는지 임상가의 시선으로 정리했습니다.",
    category: "미술치료",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    date: "2026년 4월 10일",
    author: "고은별",
    readTime: "11분",
  },
  {
    slug: "act-6-processes",
    title: "ACT의 6가지 핵심 프로세스",
    excerpt: "수용, 탈융합, 현재 순간 접촉, 맥락으로서의 자기, 가치, 전념 행동. Hayes의 헥사플렉스를 미술치료 장면과 연결하며 하나씩 풀어 봅니다.",
    category: "ACT",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    date: "2026년 4월 5일",
    author: "고은별",
    readTime: "10분",
  },
  {
    slug: "anxiety-art-therapy",
    title: "불안을 그림으로 표현하기",
    excerpt: "불안은 없애는 대상이 아니라 형태를 주는 대상입니다. Huang의 최신 메타분석과 폴리베이갈 이론을 바탕으로, 불안에 색과 모양을 입히는 세 가지 실습을 소개합니다.",
    category: "증상별 가이드",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    date: "2026년 3월 28일",
    author: "고은별",
    readTime: "9분",
  },
  {
    slug: "mindfulness-drawing",
    title: "마음챙김 드로잉: 현재에 머무르기",
    excerpt: "가부좌 명상이 어렵게 느껴지시는 분들을 위해. Kabat-Zinn의 MBSR과 Csikszentmihalyi의 몰입 이론을 바탕으로, 펜 한 자루로 시작하는 다섯 가지 드로잉 실습을 안내합니다.",
    category: "실습 가이드",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    date: "2026년 3월 20일",
    author: "고은별",
    readTime: "9분",
  },
  {
    slug: "trauma-art-expression",
    title: "트라우마와 미술 표현의 관계",
    excerpt: "트라우마 기억 앞에서 말이 막히는 신경학적 이유와, 미술이 그 자리에 다리를 놓을 수 있는 근거. Schouten과 Malchiodi의 연구를 통해 페이싱 원칙을 살펴봅니다.",
    category: "미술치료",
    image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&q=80",
    date: "2026년 3월 15일",
    author: "고은별",
    readTime: "10분",
  },
  {
    slug: "values-vision-board",
    title: "가치 탐색: 비전 보드 만들기",
    excerpt: "머리로 생각한 가치와 몸이 움직이는 가치 사이의 간격을 좁히는 도구. ACT의 가치 명료화 연구를 바탕으로 집에서 따라 할 수 있는 네 단계 비전 보드 가이드를 드립니다.",
    category: "ACT",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&q=80",
    date: "2026년 3월 8일",
    author: "고은별",
    readTime: "9분",
  },
];
