import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { CONTACT, NAV_ITEMS, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-night text-stone py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <Logo className="w-8 h-8" invert />
              <span className="font-[var(--font-display)] text-xl">
                ACT ART CENTER
              </span>
            </Link>
            <p
              className="mt-3 text-stone/70 font-[var(--font-accent)] text-lg"
              style={{ transform: "rotate(-1deg)" }}
            >
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 text-sm text-stone/60 max-w-[28ch] leading-relaxed">
              수용전념치료와 미술치료를 결합한 전문 심리치료 센터
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">서비스</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services/individual" className="text-sm text-stone/70 hover:text-white transition-colors">개인 미술치료</Link></li>
              <li><Link href="/services/group" className="text-sm text-stone/70 hover:text-white transition-colors">그룹 프로그램</Link></li>
              <li><Link href="/services/child" className="text-sm text-stone/70 hover:text-white transition-colors">아동·청소년</Link></li>
              <li><Link href="/services/online" className="text-sm text-stone/70 hover:text-white transition-colors">온라인 상담</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">안내</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/pricing" className="text-sm text-stone/70 hover:text-white transition-colors">비용 안내</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">연락처</h3>
            <ul className="space-y-2.5 text-sm text-stone/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${CONTACT.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram {CONTACT.instagram}
                </a>
              </li>
              <li className="pt-2 text-stone/50">{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone/40">
          <p>&copy; {new Date().getFullYear()} ACT ART CENTER. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-stone/70 transition-colors">
            개인정보처리방침
          </Link>
        </div>
      </Container>
    </footer>
  );
}
