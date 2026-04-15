import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { CONTACT } from "@/lib/constants";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "연락처",
  description: "ACT Art Center 오시는 길, 연락처, 운영시간 안내.",
};

const contactInfo = [
  { icon: Mail, label: "이메일", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "주소", value: CONTACT.address, href: undefined },
  { icon: Clock, label: "운영방식", value: "사전 예약제", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="연락처"
        subtitle="편한 방법으로 연락해 주세요. 영업일 기준 1~2일 이내에 답변드립니다."
        label="Contact"
        imageSrc="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=1920&q=80"
        imageAlt="ACT Art Center 연락처"
      />

      <SectionWrapper bg="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-night text-xl font-semibold">찾아오시는 길</h2>
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
              <div className="flex gap-4 pt-2">
                <a href={`https://instagram.com/${CONTACT.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium">
                  Instagram {CONTACT.instagram}
                </a>
                <a href={`https://pf.kakao.com/${CONTACT.kakao}`} target="_blank" rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium">
                  카카오톡 상담
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(196, 191, 183, 0.15)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.0263!3d37.4917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a0a5a5a5b%3A0x0!2z7ISc7Jq47IucIOyEnOy0iOq1rCDqsJXrgqjrjIDroZwgMzA1!5e0!3m2!1sko!2skr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ACT Art Center 오시는 길 - 서울시 서초구 강남대로 305"
                className="aspect-square lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
