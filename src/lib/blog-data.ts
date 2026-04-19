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
    excerpt: "미술치료가 뇌와 마음에 미치는 영향에 대한 최신 연구를 살펴봅니다. 시각적 표현이 언어적 처리와 다른 치유의 경로를 제공하는 메커니즘을 이해합니다.",
    category: "미술치료",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    date: "2026년 4월 10일",
    author: "고은별",
    readTime: "8분",
  },
  {
    slug: "act-6-processes",
    title: "ACT의 6가지 핵심 프로세스",
    excerpt: "수용전념치료의 핵심 원리와 일상에서의 적용 방법을 알아봅니다. 심리적 유연성을 높이는 여섯 가지 핵심 프로세스를 하나씩 살펴봅니다.",
    category: "ACT",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    date: "2026년 4월 5일",
    author: "고은별",
    readTime: "10분",
  },
  {
    slug: "anxiety-art-therapy",
    title: "불안을 그림으로 표현하기",
    excerpt: "불안을 시각적으로 외재화하면 어떤 변화가 일어나는지 이야기합니다. ACT의 수용과 탈융합 원리를 미술 활동에 적용하는 방법을 소개합니다.",
    category: "증상별 가이드",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    date: "2026년 3월 28일",
    author: "고은별",
    readTime: "7분",
  },
  {
    slug: "mindfulness-drawing",
    title: "마음챙김 드로잉: 현재에 머무르기",
    excerpt: "그리는 행위 자체에 집중하는 마음챙김 드로잉이 가져오는 실제적 변화와 일상에서 실천하는 방법을 안내합니다.",
    category: "실습 가이드",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    date: "2026년 3월 20일",
    author: "고은별",
    readTime: "6분",
  },
  {
    slug: "trauma-art-expression",
    title: "트라우마와 미술 표현의 관계",
    excerpt: "말로 표현하기 어려운 트라우마 경험이 미술 활동을 통해 안전하게 처리되는 과정을 설명합니다.",
    category: "미술치료",
    image: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&q=80",
    date: "2026년 3월 15일",
    author: "고은별",
    readTime: "9분",
  },
  {
    slug: "values-vision-board",
    title: "가치 탐색: 비전 보드 만들기",
    excerpt: "ACT에서 말하는 '가치'를 시각적으로 탐색하는 비전 보드 워크숍 과정을 소개합니다.",
    category: "ACT",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&q=80",
    date: "2026년 3월 8일",
    author: "고은별",
    readTime: "5분",
  },
];
