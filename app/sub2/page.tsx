import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '나에게 맞는 연금저축 찾기',
  description: '연금저축펀드 vs 연금저축보험 완벽 비교 및 추천 가이드',
  alternates: {
    canonical: '/sub2',
  },
};

import React from 'react';
import Link from 'next/link';

const sub2Contents = [
  {
    id: '1',
    title: '연금저축보험 비교 기준 정리',
    core: '연금저축보험 상품 선택 전 필수 확인 요소',
    description: (
      <div className="space-y-6 text-justify">
        <p>은퇴 이후 안정적인 현금 흐름 확보를 위해 연금저축보험 비교에 대한 관심이 높아지고 있다. 연금저축보험은 일정 기간 납입 후 연금 형태로 수령하는 구조의 장기 금융상품이다. 상품 선택 시에는 단순 수익률보다 구조와 유지 조건을 함께 확인하는 것이 중요하다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">✔ 비교 핵심 요소</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">비교 항목</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">확인 내용</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">유의 사항</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">수령 방식</td>
                <td className="p-3">종신형 / 확정기간형</td>
                <td className="p-3">수령 기간에 따라 총 수령액 달라질 수 있음</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">세액공제</td>
                <td className="p-3">연간 납입 한도 내 공제</td>
                <td className="p-3">소득 구간별 공제율 상이</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">사업비</td>
                <td className="p-3">초기·유지 비용 구조</td>
                <td className="p-3">장기 유지 전제 필요</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">중도 해지</td>
                <td className="p-3 text-red-600 font-medium">해지환급금 수준</td>
                <td className="p-3">세제 혜택 반환 가능성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">연금저축보험 비교 시에는 본인의 은퇴 시점, 예상 생활비, 유지 가능 기간을 종합적으로 고려하는 접근이 필요하다.</p>
      </div>
    ),
  },
  {
    id: '2',
    title: '보험형 vs 펀드형 연금저축 차이 비교',
    core: '안정성과 수익성, 내게 맞는 운용 구조 찾기',
    description: (
      <div className="space-y-6 text-justify">
        <p>연금저축 상품은 보험형과 펀드형으로 구분된다. 두 유형은 운용 방식과 수령 구조에서 차이가 있다.</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">구분</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center text-blue-700 whitespace-nowrap">보험형</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center text-green-700 whitespace-nowrap">펀드형</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">운용 방식</td>
                <td className="p-3">비교적 안정적 구조</td>
                <td className="p-3">시장 성과에 따라 변동</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">수익 구조</td>
                <td className="p-3">예측 가능성 상대적 높음</td>
                <td className="p-3">수익·손실 가능성 존재</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">수령 방식</td>
                <td className="p-3">종신형 선택 가능</td>
                <td className="p-3">확정기간형 중심</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">위험도</td>
                <td className="p-3 text-blue-600 font-medium">상대적으로 낮은 편</td>
                <td className="p-3 text-green-600 font-medium">시장 변동 영향</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">보험형은 안정성을 고려하는 경우 검토 대상이 될 수 있으며, 펀드형은 수익 가능성을 고려하는 경우 선택될 수 있다. 단, 투자 성향과 재무 상황에 따른 판단이 필요하다.</p>
      </div>
    ),
  },
  {
    id: '3',
    title: '연금저축 세액공제 구조 비교',
    core: '연말정산 혜택 극대화를 위한 공제 조건 확인',
    description: (
      <div className="space-y-6 text-justify">
        <p>연금저축은 세액공제 혜택이 적용될 수 있는 상품이다. 다만 공제 한도와 세율은 개인 소득에 따라 달라질 수 있다.</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">항목</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center w-1/3">연간 공제 한도</td>
                <td className="p-3">관련 세법 기준 적용</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">공제 방식</td>
                <td className="p-3">세액공제</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">수령 시 과세</td>
                <td className="p-3">연금소득세 적용 가능</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">중도 해지</td>
                <td className="p-3 text-red-600 font-medium">기타소득세 부과 가능성</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">세제 혜택은 가입 시점과 수령 시점의 세금 구조를 함께 고려하는 것이 바람직하다. 세무 상황에 따라 실제 효과는 달라질 수 있다.</p>
      </div>
    ),
  },
  {
    id: '4',
    title: '연금 수령 방식 비교',
    core: '종신형 vs 확정기간형, 전략적 수령 방식 선택',
    description: (
      <div className="space-y-6 text-justify">
        <p>연금저축보험은 수령 방식에 따라 구조가 달라질 수 있다.</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">수령 유형</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">특징</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">고려 요소</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">종신형</td>
                <td className="p-3">평생 지급</td>
                <td className="p-3">초기 수령액 상대적 낮을 수 있음</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">확정기간형</td>
                <td className="p-3">일정 기간 지급</td>
                <td className="p-3">기간 종료 후 지급 종료</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">혼합형</td>
                <td className="p-3">기간 + 종신 결합</td>
                <td className="p-3">설계 방식에 따라 다름</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">연금 개시 연령을 늦출 경우 월 수령액이 증가할 수 있으나, 실제 설계 내용은 상품별로 다를 수 있어 확인이 필요하다.</p>
      </div>
    ),
  },
  {
    id: '5',
    title: '사업비·수수료 비교 중요성',
    core: '장기 수익과 실수령액을 좌우하는 비용 구조 점검',
    description: (
      <div className="space-y-6 text-justify">
        <p>연금저축 비교 시 사업비와 수수료 구조는 장기 수익에 영향을 줄 수 있다.</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">항목</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center text-blue-700 whitespace-nowrap">보험형</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center text-green-700 whitespace-nowrap">펀드형</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">초기 사업비</td>
                <td className="p-3">존재 가능</td>
                <td className="p-3">상대적으로 낮은 편</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">운용 보수</td>
                <td className="p-3">제한적</td>
                <td className="p-3">발생 가능</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">총 비용 구조</td>
                <td className="p-3">계약 조건에 따름</td>
                <td className="p-3">펀드별 상이</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">예상 수익률뿐 아니라 비용 차감 후 실질 수령액을 기준으로 비교하는 것이 합리적이다.</p>
      </div>
    ),
  },
  {
    id: '6',
    title: '유지 조건 및 납입 유연성 비교',
    core: '장기 유지 성공을 위한 계약 변경 및 유연성 확인',
    description: (
      <div className="space-y-6 text-justify">
        <p>장기 금융상품 특성상 유지 조건 확인이 중요하다.</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-900">
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">비교 항목</th>
                <th className="p-3 border-b border-gray-200 font-semibold text-center whitespace-nowrap">확인 필요 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center w-1/3">최소 유지 기간</td>
                <td className="p-3">해지 시 환급률 확인</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">납입 중지 가능 여부</td>
                <td className="p-3">소득 변동 대비</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-medium bg-gray-50 text-center">추가 납입</td>
                <td className="p-3">가능 여부 상품별 상이</td>
              </tr>
              <tr>
                <td className="p-3 font-medium bg-gray-50 text-center">계약 변경</td>
                <td className="p-3">일부 제한 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">연금저축보험은 장기간 유지가 전제되는 상품이므로, 여유 자금 범위 내에서 설계하는 접근이 필요하다.</p>
      </div>
    ),
  },
];

export default async function Sub2Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const contentId = resolvedParams.content;

  const currentId = typeof contentId === 'string' ? contentId : '1';
  const contentData = sub2Contents.find((item) => item.id === currentId);

  if (!contentData) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">존재하지 않는 페이지입니다.</h1>
        <p className="text-gray-600">요청하신 콘텐츠 파라미터(?content={currentId || '없음'})를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 서브 네비게이션 탭 */}
      <nav className="flex flex-wrap gap-2 mb-6">
        {sub2Contents.map((item) => (
          <Link
            key={item.id}
            href={`/sub2?content=${item.id}`}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              currentId === item.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
        <header className="mb-8 border-b border-gray-100 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{contentData.title}</h1>
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">
            핵심: {contentData.core}
          </div>
        </header>
        <div className="text-gray-700 leading-relaxed">
          <div className="text-lg">{contentData.description}</div>
        </div>
      </article>
    </div>
  );
}
