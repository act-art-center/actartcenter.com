import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "ACT ART CENTER 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm lg:prose-base">
          <h1 className="text-night text-center mb-12 text-3xl lg:text-4xl font-bold tracking-tight">
            개인정보처리방침
          </h1>

          <p className="text-charcoal/70 text-sm text-center mb-12">시행일: 2026년 4월 15일</p>

          <div className="space-y-10 text-charcoal/80 leading-[var(--leading-normal)]">
            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제1조 (목적)</h2>
              <p>
                ACT ART CENTER(이하 &ldquo;센터&rdquo;)는 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고
                이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을
                수립·공개합니다.
              </p>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제2조 (처리하는 개인정보의 항목 및 수집 방법)</h2>
              <p>센터는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <h3 className="text-night font-semibold mt-4 mb-2">1. 상담 예약 시</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>필수항목: 성명, 연락처(휴대전화번호)</li>
                <li>선택항목: 이메일, 상담 관련 사전 정보</li>
              </ul>
              <h3 className="text-night font-semibold mt-4 mb-2">2. 홈페이지 이용 시</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>자동수집항목: 접속 IP 정보, 쿠키, 서비스 이용 기록, 방문 일시</li>
              </ul>
              <h3 className="text-night font-semibold mt-4 mb-2">3. 수집 방법</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>홈페이지 예약 폼, 전화, 이메일, 카카오톡 상담</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제3조 (개인정보의 처리 목적)</h2>
              <p>센터는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>상담 예약 접수 및 일정 관리</li>
                <li>상담 서비스 제공 및 상담 기록 관리</li>
                <li>예약 확인, 변경, 취소 등 안내 연락</li>
                <li>서비스 개선 및 통계 분석 (비식별 처리)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제4조 (개인정보의 처리 및 보유기간)</h2>
              <p>센터는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>상담 예약 정보: 최종 상담일로부터 3년 (의료법 관련 준용)</li>
                <li>홈페이지 이용 기록: 3개월</li>
                <li>정보주체가 삭제를 요청하는 경우 지체 없이 파기</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제5조 (개인정보의 제3자 제공)</h2>
              <p>
                센터는 정보주체의 개인정보를 제3조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며,
                정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만
                개인정보를 제3자에게 제공합니다.
              </p>
              <p className="mt-2">현재 개인정보를 제3자에게 제공하고 있지 않습니다.</p>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제6조 (개인정보처리의 위탁)</h2>
              <p>센터는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-sand">
                      <th className="py-2 px-3 text-left text-night font-semibold">위탁받는 자</th>
                      <th className="py-2 px-3 text-left text-night font-semibold">위탁 업무</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sand/50">
                      <td className="py-2 px-3">Vercel Inc.</td>
                      <td className="py-2 px-3">웹사이트 호스팅 및 운영</td>
                    </tr>
                    <tr className="border-b border-sand/50">
                      <td className="py-2 px-3">Google LLC</td>
                      <td className="py-2 px-3">웹사이트 접속 통계 분석 (Google Analytics)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제7조 (정보주체의 권리·의무 및 행사 방법)</h2>
              <p>정보주체는 센터에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리정지 요구</li>
              </ul>
              <p className="mt-2">
                위 권리 행사는 센터에 대해 이메일({`actartkorea@gmail.com`})을 통하여 하실 수 있으며,
                센터는 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제8조 (개인정보의 파기)</h2>
              <p>센터는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>전자적 파일 형태: 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                <li>종이 문서: 분쇄기로 분쇄하거나 소각하여 파기</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제9조 (개인정보의 안전성 확보 조치)</h2>
              <p>센터는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>개인정보에 대한 접근 제한: 개인정보를 처리하는 인원을 최소화하고 접근 권한을 관리</li>
                <li>개인정보의 암호화: 비밀번호 등은 암호화되어 저장·관리</li>
                <li>보안 프로그램 설치 및 갱신: SSL(HTTPS) 암호화 통신 적용</li>
                <li>개인정보 접근 기록의 보관: 개인정보 처리 시스템에 접근한 기록을 보관·관리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제10조 (쿠키의 설치·운영 및 거부)</h2>
              <p>
                센터는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는
                &lsquo;쿠키(Cookie)&rsquo;를 사용합니다.
              </p>
              <p className="mt-2">
                이용자는 웹브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 쿠키 저장을 거부할 경우
                일부 서비스 이용에 어려움이 발생할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제11조 (개인정보 보호책임자)</h2>
              <p>센터는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className="mt-3 p-4 bg-primary-50 rounded-xl text-sm">
                <p><strong>개인정보 보호책임자</strong></p>
                <p className="mt-1">성명: 고은별</p>
                <p>직위: 대표</p>
                <p>연락처: actartkorea@gmail.com</p>
                <p>이메일: actartkorea@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제12조 (권익침해 구제방법)</h2>
              <p>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>개인정보침해 신고센터 (한국인터넷진흥원): (국번없이) 118 / privacy.kisa.or.kr</li>
                <li>개인정보 분쟁조정위원회: (국번없이) 1833-6972 / www.kopico.go.kr</li>
                <li>대검찰청 사이버수사과: (국번없이) 1301 / www.spo.go.kr</li>
                <li>경찰청 사이버수사국: (국번없이) 182 / ecrm.cyber.go.kr</li>
              </ul>
            </section>

            <section>
              <h2 className="text-night text-lg font-semibold mb-4">제13조 (개인정보처리방침의 변경)</h2>
              <p>이 개인정보처리방침은 2026년 4월 15일부터 적용됩니다. 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.</p>
              <p className="mt-2">변경 이력: 해당 없음 (최초 제정)</p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-sand text-center text-stone text-sm">
            <p>ACT ART CENTER</p>
            <p>서울시 서초구 강남대로 305, 현대렉시온 2518호</p>
            <p>actartkorea@gmail.com</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
