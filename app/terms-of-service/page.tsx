import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 연금추천사이트',
  description: '연금추천사이트 서비스의 이용약관입니다.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-gray-900">
      <h1 className="mb-2 text-2xl font-bold md:text-3xl tracking-tight">이용약관</h1>
      <p className="mb-12 text-sm text-gray-500">최종 업데이트: 2026년 3월 8일</p>

      <div className="space-y-10 leading-relaxed text-[15px]">
        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">제1조 (목적)</h2>
          <p className="text-gray-700">본 약관은 <strong>연금추천사이트</strong> (이하 &quot;사이트&quot;)이 제공하는 연금저축, IRP 등 연금 정보 서비스의 이용 조건 및 절차, 이용자와 사이트 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">제2조 (서비스의 내용)</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700">
            <li>연금저축 및 IRP 세액공제 가이드 제공</li>
            <li>연금 상품 비교 분석 정보 제공</li>
            <li>든든한 은퇴 준비를 위한 팁 (게시판)</li>
            <li>관련 광고 서비스 (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">제3조 (면책 조항)</h2>
          <p className="text-gray-700">본 사이트에서 제공하는 정보는 참고용이며, 법적 또는 재무적 조언을 대신하지 않습니다. 상품 세부 내용, 수익률, 세금 관련 법령은 변경될 수 있으므로 실제 금융 활동을 하시기 전 관련 금융사 및 전문가와 충분한 상담을 거치시길 권장합니다. 본 사이트의 정보를 활용한 투자 결정의 책임은 이용자 본인에게 있습니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-gray-200 pb-2 text-lg font-bold">제4조 (문의)</h2>
          <p className="text-gray-700">이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-blue-600 font-medium hover:underline">tlsfkaus0711@gmail.com</a></p>
        </section>
      </div>
    </main>
  )
}
