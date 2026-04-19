import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";
import { Mail, MapPin, Clock, Train, Bus, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "오시는 길·연락처 — ACT ART CENTER 강남센터",
  description:
    "ACT ART CENTER 강남센터 위치·연락처 안내. 서울시 서초구 강남대로 305 현대렉시온 2518호. 지하철·버스로 편리하게, 건물 내 주차 2시간까지 무료.",
  keywords: [
    "ACT ART CENTER 오시는 길",
    "강남 미술치료",
    "강남대로 305",
    "서초 미술치료 센터",
    "ACT ART CENTER 강남센터",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    title: "오시는 길·연락처 — ACT ART CENTER 강남센터",
    description: "서울시 서초구 강남대로 305 현대렉시온 2518호. 주차 2시간 무료.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: "/og/contact.png",
        width: 1200,
        height: 630,
        alt: "ACT ART CENTER 강남센터 오시는 길",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오시는 길·연락처 — ACT ART CENTER 강남센터",
    description: "서울 서초 강남대로 305. 주차 2시간 무료.",
    images: ["/og/contact.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "오시는 길", item: `${SITE_URL}/contact` },
      ],
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      alternateName: "ACT ART CENTER 강남센터",
      url: SITE_URL,
      image: `${SITE_URL}/images/office-hero.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "강남대로 305, 현대렉시온 2518호",
        addressLocality: "서초구",
        addressRegion: "서울특별시",
        postalCode: "06628",
        addressCountry: "KR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.4917,
        longitude: 127.0263,
      },
      hasMap: "https://maps.google.com/?q=서울+서초구+강남대로+305+현대렉시온",
      email: "actartkorea@gmail.com",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "주차",
          value: "건물 내 자주식 주차장, 2시간까지 무료",
        },
      ],
      publicAccess: true,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "actartkorea@gmail.com",
          availableLanguage: ["Korean", "English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "reservations",
          url: `${SITE_URL}/booking`,
        },
      ],
      sameAs: ["https://instagram.com/act.art.center"],
    },
  ],
};

const contactInfo = [
  { icon: Mail, label: "이메일", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "주소", value: CONTACT.address, href: undefined },
  { icon: Clock, label: "운영방식", value: "사전 예약제 · Walk-in 상담 불가 · 영업일 기준 1~2일 내 회신", href: undefined },
];

const directions = [
  {
    icon: Train,
    label: "지하철",
    lines: [
      "강남역 2호선·신분당선 11번 출구 · 도보 약 10분",
      "양재역 3호선·신분당선 7번 출구 · 도보 약 10분",
    ],
  },
  {
    icon: Bus,
    label: "버스",
    lines: [
      "강남대로변 '뱅뱅사거리·우성아파트' 정류장 도보 2분",
      "간선 140·144·360·421·462, 지선 3412, 광역 9408 등 이용 가능",
    ],
  },
  {
    icon: Car,
    label: "자가용·주차",
    lines: [
      "내비게이션: 서울 서초구 강남대로 305 현대렉시온",
      "건물 내 자주식 주차장 · 상담 방문 시 2시간까지 무료",
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <PageHero
        title="오시는 길·연락처 — ACT ART CENTER 강남센터"
        subtitle="편한 방법으로 연락해 주세요. 모든 상담은 사전 예약제로 운영되며, 방문 전 반드시 예약이 필요합니다."
        label="Contact"
        imageSrc="/images/office-hero.jpg"
        imageAlt="ACT ART CENTER 강남센터 내부 — 대형 테이블과 채광 좋은 상담 공간"
      />

      <div className="bg-paper pt-6 pb-2">
        <Container>
          <Breadcrumbs
            items={[
              { name: "홈", href: "/" },
              { name: "오시는 길", href: "/contact" },
            ]}
            emitJsonLd={false}
          />
        </Container>
      </div>

      <SectionWrapper bg="cream" className="overflow-hidden">
        <Container className="relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-night text-xl font-semibold">연락처</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
                      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-500" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-stone text-xs font-medium tracking-wide uppercase">{item.label}</p>
                        <p className="mt-0.5 text-night font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:shadow-[var(--shadow-sm)] rounded-xl transition-shadow">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social */}
              <div className="pt-2">
                <a
                  href={`https://instagram.com/${CONTACT.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  Instagram {CONTACT.instagram}
                </a>
              </div>
            </div>

            {/* Naver Map — 국내 사용자 접근성 우선, iframe X-Frame-Options 이슈 회피 위해 클릭 카드 방식 */}
            <a
              href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EC%84%9C%EC%B4%88%EA%B5%AC%20%EA%B0%95%EB%82%A8%EB%8C%80%EB%A1%9C%20305%20%ED%98%84%EB%8C%80%EB%A0%89%EC%8B%9C%EC%98%A8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="네이버 지도에서 ACT ART CENTER 강남센터 위치 보기 (새 창)"
              className="group relative bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-10 min-h-[400px] lg:h-full hover:shadow-[var(--shadow-md)] transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
            >
              {/* 배경 map grid pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,83,75,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,83,75,0.6) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center shadow-[var(--shadow-sm)]">
                <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              <div className="relative text-center">
                <p className="text-stone text-xs font-medium tracking-[0.12em] uppercase">NAVER MAP</p>
                <p className="mt-2 text-night text-lg font-semibold leading-tight">
                  서울 서초구 강남대로 305
                </p>
                <p className="mt-1 text-charcoal/70 text-sm">현대렉시온 2518호</p>
              </div>

              <span className="relative inline-flex items-center gap-1.5 mt-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg text-sm font-semibold group-hover:bg-primary-100 transition-colors">
                네이버 지도로 열기
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </Container>
      </SectionWrapper>

      {/* 찾아오시는 길 — 대중교통·자가용 */}
      <SectionWrapper bg="paper">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-secondary-500 font-medium text-sm tracking-wide uppercase">Directions</p>
              <h2 className="mt-2 text-night text-2xl lg:text-3xl font-bold tracking-tight">
                찾아오시는 길
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                강남대로변에 위치해 지하철·버스 모두 편리합니다.
                자가용으로 오시는 경우 건물 내 주차장을 이용하실 수 있으며,
                상담 방문 시 <span className="font-semibold text-night">2시간까지 주차가 무료</span>입니다.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {directions.map(({ icon: Icon, label, lines }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)]"
                  style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-500" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-night font-semibold">{label}</p>
                  <ul className="mt-3 space-y-2 text-sm text-charcoal/70 leading-relaxed">
                    {lines.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span
                          className="mt-2 w-1 h-1 rounded-full bg-primary-500 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-stone leading-relaxed max-w-2xl">
              * 위 소요 시간은 일반 도보 기준 근사치입니다. 교통 상황과 출구 선택에 따라
              차이가 있을 수 있으니 방문 전 지도 앱에서 실제 경로를 확인해 주세요.
              주차 무료 검증은 방문 시 안내 데스크에 문의하시면 도움드립니다.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
