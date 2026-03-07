import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 | 연금추천사이트',
  description: '연금추천사이트 서비스의 쿠키 정책입니다.',
  alternates: { canonical: '/cookie-policy' },
}

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-gray-900">
      <h1 className="mb-2 text-2xl font-bold md:text-3xl tracking-tight">쿠키 정책</h1>
      <p className="mb-12 text-sm text-gray-500">최종 업데이트: 2026년 3월 8일</p>

      <div className="space-y-10 leading-relaxed text-[15px]">
        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">1. 쿠키란 무엇인가요?</h2>
          <p className="text-gray-700">쿠키(Cookie)는 웹사이트가 이용자의 브라우저에 저장하는 아주 작은 텍스트 파일입니다. 재방문 유저를 식별하거나 서비스 분석, 맞춤형 광고 등을 제공하기 위한 목적으로 사용됩니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">2. 사용하는 쿠키의 목적</h2>
          <h3 className="mt-6 mb-2 text-base font-bold">분석 및 통계 쿠키 (Google Analytics)</h3>
          <p className="text-gray-700">방문자들이 어떤 연금 정보에 관심이 많은지, 사이트 이용 패턴은 어떠한지 분석하여 더 나은 정보를 제공하는 데 활용합니다.</p>
          <h3 className="mt-6 mb-2 text-base font-bold">광고 쿠키 (Google AdSense)</h3>
          <p className="text-gray-700">Google과 협력업체가 이용자의 이전 웹 활동 기록에 기반해 유용한 개인 맞춤형 광고를 제공하기 위해 사용합니다. 관련된 상세 내용은 <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">구글 개인정보처리방침</a>을 따릅니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">3. 쿠키 관리 및 거부</h2>
          <p className="text-gray-700">이용자는 브라우저 설정을 통해 언제든지 쿠키 저장을 거부하실 수 있습니다.</p>
          <p className="mt-4 text-gray-700">
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">Google 광고 설정</a>에서 맞춤 광고용 쿠키를 직접 제어할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">4. 문의</h2>
          <p className="text-gray-700">이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-blue-600 font-medium hover:underline">tlsfkaus0711@gmail.com</a></p>
        </section>
      </div>
    </main>
  )
}
