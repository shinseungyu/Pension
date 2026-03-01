import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '연금저축 핵심 혜택',
  description: '연말정산 세액공제, 과세이연, 저율과세 등 연금저축의 핵심 혜택 알아보기',
  alternates: {
    canonical: '/sub1',
  },
};

const sub1Contents = [
  {
    id: '1',
    title: '은퇴 준비, 연금 전략 재점검 필요성 커져',
    core: '고령화 시대, 개인연금을 활용한 안정적 노후 대비',
    description: (
      <div className="space-y-4 text-justify">
        <p>고령화가 빠르게 진행되면서 은퇴 이후의 소득 공백에 대한 우려가 커지고 있다. 기대수명이 늘어난 만큼 노후 생활 기간도 길어지고 있어, 안정적인 현금 흐름을 확보하려는 움직임이 확산되는 분위기다. 특히 30~40대 직장인들 사이에서는 “조금이라도 일찍 시작하자”는 인식이 점차 자리 잡고 있다.</p>
        <p>과거에는 은퇴 시점이 가까워진 중장년층 중심으로 연금 상품을 검토하는 경우가 많았지만, 최근에는 장기적인 재무 설계를 고려해 미리 준비하는 사례가 늘고 있다. 물가 상승과 의료비 부담 증가 가능성도 이러한 흐름에 영향을 주는 요인으로 꼽힌다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 개인연금 활용, 선택 기준은</h3>
        <p>개인연금 상품은 크게 보험형, 펀드형, 신탁형 등으로 구분된다. 보험형은 비교적 안정적인 구조를 선호하는 이들에게 적합하다는 평가를 받으며, 일정 조건을 충족할 경우 종신형 연금 수령이 가능하다는 점이 특징이다.</p>
        <p>반면 펀드형은 투자 성과에 따라 수령 금액이 달라질 수 있어 수익성과 변동성을 함께 고려해야 한다. 기대 수익이 높은 만큼 원금 변동 가능성도 존재하므로 자신의 위험 감내 수준에 맞는 선택이 중요하다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 세제 혜택과 장기 유지의 중요성</h3>
        <p>일부 연금 상품은 납입 금액에 대해 세액공제 혜택이 적용될 수 있어 절세 수단으로도 활용된다. 다만 세제 혜택은 소득 수준과 납입 한도에 따라 달라질 수 있으므로 사전에 조건을 충분히 확인하는 것이 필요하다.</p>
        <p>또한 연금 상품은 장기 유지가 전제되는 구조인 만큼, 중도 해지 시 불이익이 발생할 수 있다. 세제 혜택 반환이나 수수료 부담 등이 생길 수 있어 단기 자금 운용 목적에는 적합하지 않을 수 있다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ “조기 시작이 복리 효과 높인다”</h3>
        <p>전문가들은 연금 준비는 시작 시점이 빠를수록 시간에 따른 복리 효과를 기대할 수 있다고 조언한다. 매월 부담 가능한 수준에서 꾸준히 납입하는 방식이 장기적으로 안정적인 자산 형성에 도움이 된다는 설명이다.</p>
        <p>노후 준비는 선택이 아닌 필수로 인식되고 있다. 개인의 소득 구조와 지출 상황, 기존 자산 현황을 종합적으로 고려해 자신에게 맞는 연금 전략을 세우는 것이 무엇보다 중요하다는 지적이 나온다.</p>
      </div>
    ),
  },
  {
    id: '2',
    title: '노후 대비와 절세 전략, 연금저축보험 재조명',
    core: '노후 준비와 절세를 동시에 고려하는 필수 전략',
    description: (
      <div className="space-y-4 text-justify">
        <p>은퇴 이후 생활자금에 대한 관심이 높아지면서 연금저축보험을 찾는 이들이 다시 늘고 있다. 과거에는 고소득 직장인이나 자영업자를 중심으로 가입이 이뤄졌다면, 최근에는 20~40대 직장인들 사이에서도 장기적인 관점에서 미리 준비하려는 분위기가 확산되는 모습이다.</p>
        <p>물가 상승과 기대수명 증가로 인해 은퇴 후 필요한 자금 규모가 커질 수 있다는 인식이 자리 잡으면서, 노후 대비를 보다 체계적으로 시작하려는 움직임이 이어지고 있다.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 연금저축보험이 주목받는 이유</h3>
        <p>연금저축보험은 일정 기간 보험료를 납입한 뒤 정해진 시점부터 연금 형태로 수령하는 구조의 상품이다. 특히 세액공제 혜택을 받을 수 있다는 점이 주요 장점으로 꼽힌다. 연간 납입액에 대해 일정 한도 내에서 세제 혜택이 적용될 수 있어, 노후 준비와 절세를 동시에 고려하는 이들에게 관심을 받고 있다.</p>
        <p>다만 세제 적용 범위는 개인의 소득 수준과 납입 금액 등에 따라 달라질 수 있다. 따라서 단순히 절세 효과만을 기대하기보다는 자신의 재무 여건과 장기 계획을 충분히 고려한 설계가 필요하다는 조언이 나온다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 다른 연금상품과의 차이점은</h3>
        <p>연금저축 상품은 보험형, 펀드형, 신탁형 등으로 나뉜다. 이 가운데 보험형은 상대적으로 안정적인 운용을 선호하는 가입자에게 적합하다는 평가를 받는다. 일정 조건을 충족할 경우 종신형 연금 수령이 가능하다는 점도 특징이다.</p>
        <p>반면 펀드형은 투자 성과에 따라 연금 수령액이 변동될 수 있어 수익성과 위험 요소를 함께 고려해야 한다. 안정성을 우선할지, 투자 수익을 기대할지에 따라 선택 기준이 달라질 수 있다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 가입 전 살펴볼 부분</h3>
        <p>연금저축보험은 장기 유지를 전제로 설계된 상품이다. 중도 해지 시 세액공제 받은 금액을 반환해야 하는 등 불이익이 발생할 수 있어 단기 자금 운용에는 적합하지 않을 수 있다. 또한 연금 개시 시점, 수령 방식, 추가 납입 가능 여부 등 세부 조건도 꼼꼼히 확인해야 한다.</p>
        <p>최근에는 온라인 비교 플랫폼을 통해 여러 상품의 구조를 손쉽게 살펴볼 수 있어 정보 접근성이 높아졌다. 다만 수익률이나 광고 문구에만 의존하기보다는 사업비, 유지 조건, 보장 내용 등을 종합적으로 검토하는 것이 중요하다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 빠른 준비가 유리하다는 조언</h3>
        <p>전문가들은 연금 준비는 시작 시점이 빠를수록 장기적인 복리 효과를 기대할 수 있다고 설명한다. 물론 개인의 소득 구조와 지출 규모, 기존 자산 현황에 따라 적정 납입 수준은 달라질 수 있다.</p>
        <p>노후는 모두에게 공통된 과제이지만 준비 방법은 다양하다. 연금저축보험은 절세와 노후 자금 마련을 함께 고려하는 이들에게 하나의 선택지가 될 수 있다. 충분한 비교와 상담을 통해 자신에게 맞는 방향을 찾는 과정이 무엇보다 중요하다.</p>
      </div>
    ),
  },
  {
    id: '3',
    title: '노후 소득 공백 대비, 개인연금 관심 확대',
    core: '장기 계획 기반의 안정적 수익원이 핵심',
    description: (
      <div className="space-y-4 text-justify">
        <p>은퇴 이후 일정한 소득이 끊기는 &apos;소득 공백기&apos;에 대한 우려가 커지면서 개인연금 상품에 대한 관심이 높아지고 있다. 국민연금만으로는 생활비 전부를 충당하기 어렵다는 인식이 확산되면서 추가적인 대비 수단을 찾는 움직임이 이어지고 있다.</p>
        <p>특히 기대수명이 길어지면서 노후 기간이 20~30년에 이를 수 있다는 전망도 나온다. 이에 따라 단순 저축이 아닌, 장기간 안정적으로 현금 흐름을 만들 수 있는 구조에 주목하는 분위기다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 안정성과 수익성 사이 선택</h3>
        <p>개인연금은 보험형과 투자형 등으로 나뉜다. 보험형은 일정 조건 충족 시 종신형 연금 수령이 가능해 안정성을 중시하는 가입자에게 적합하다는 평가를 받는다. 반면 투자형은 운용 성과에 따라 수령액이 달라질 수 있어 수익 가능성과 변동성을 함께 고려해야 한다.</p>
        <p>전문가들은 단순히 예상 수익률만 보기보다는 장기 유지 가능 여부, 수수료 구조, 연금 개시 시점 등을 종합적으로 살펴야 한다고 조언한다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 장기 계획 기반 설계 필요</h3>
        <p>연금 상품은 단기 투자 수단이 아니라 장기 재무 전략의 일부다. 중도 해지 시 세제 혜택 반환 등 불이익이 발생할 수 있어 가입 전 충분한 검토가 필요하다. 자신의 소득 수준과 지출 구조에 맞춰 무리 없는 납입 계획을 세우는 것이 중요하다는 지적이다.</p>
      </div>
    ),
  },
  {
    id: '4',
    title: '퇴직 이후 삶의 질, 연금 설계에 달렸다',
    core: '안정적 생활비 확보를 위한 장기 운용 필요성',
    description: (
      <div className="space-y-4 text-justify">
        <p>은퇴 이후 가장 큰 고민으로 꼽히는 부분은 안정적인 생활비 확보다. 평균 수명이 늘어나면서 노후 기간이 길어졌고, 이에 따라 단순 저축만으로는 충분하지 않을 수 있다는 인식이 확산되고 있다. 이 같은 흐름 속에서 매월 일정 금액을 수령할 수 있는 연금 상품에 대한 관심이 이어지고 있다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 준비 시점이 중요한 이유</h3>
        <p>연금은 장기간에 걸쳐 자금을 형성하는 구조다. 가입 시점이 빠를수록 납입 기간이 길어져 부담을 분산할 수 있고, 장기 운용에 따른 효과도 기대할 수 있다. 특히 일정 금액을 꾸준히 납입하는 방식은 계획적인 자산 형성에 도움이 된다는 평가다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 상품별 구조 이해 필요</h3>
        <p>연금 상품은 보험형, 투자형 등으로 나뉘며 각각 특징이 다르다. 안정적인 수령을 중시한다면 보장 구조를, 수익 가능성을 고려한다면 운용 방식을 면밀히 살펴야 한다. 단순 비교보다는 자신의 재무 목표에 맞는지 확인하는 과정이 중요하다.</p>
        <p>전문가들은 연금 설계가 곧 은퇴 이후 삶의 질을 좌우할 수 있는 요소라고 강조한다.</p>
      </div>
    ),
  },
  {
    id: '5',
    title: '물가 상승 시대, 노후 자금 전략 재정비',
    core: '인플레이션에 대비하는 실질적 자산 방어책',
    description: (
      <div className="space-y-4 text-justify">
        <p>최근 물가 상승 흐름이 이어지면서 은퇴 이후 필요한 생활비 규모도 재산정해야 한다는 의견이 나온다. 과거 기준으로 계산한 노후 자금이 현재 상황에서는 부족할 수 있다는 우려 때문이다.</p>
        <p>이에 따라 단기 저축보다 장기적인 현금 흐름 확보에 초점을 맞춘 연금 전략이 재조명되고 있다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 세제 지원 제도 활용</h3>
        <p>일부 연금 상품은 세제 혜택을 제공해 실질적인 부담을 낮추는 데 도움을 줄 수 있다. 다만 혜택 범위와 조건은 개인별 상황에 따라 달라질 수 있어 사전에 충분한 확인이 필요하다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 중도 해지 리스크 유의</h3>
        <p>연금 상품은 장기 유지가 전제되는 만큼, 중도 해지 시 손실이나 세제 반환 등의 불이익이 발생할 수 있다. 따라서 여유 자금 범위 내에서 납입 계획을 세우는 것이 바람직하다는 조언이 나온다.</p>
        <p>노후 자금 마련은 단순한 금융 선택을 넘어 장기적인 생활 전략의 일부로 접근해야 한다는 지적이다.</p>
      </div>
    ),
  },
  {
    id: '6',
    title: '다층 연금 구조, 균형 있는 준비 필요',
    core: '국민·퇴직·개인연금의 조합 시너지',
    description: (
      <div className="space-y-4 text-justify">
        <p>전문가들은 안정적인 노후를 위해 &apos;다층 연금 구조&apos;의 중요성을 강조한다. 국민연금, 퇴직연금, 개인연금을 균형 있게 활용해 소득원을 분산하는 방식이다. 특정 제도에만 의존하기보다 여러 축을 조합하는 전략이 리스크를 줄일 수 있다는 설명이다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 개인 상황에 맞춘 설계</h3>
        <p>연금 설계는 개인의 소득 수준, 지출 구조, 은퇴 시점 등에 따라 달라져야 한다. 일률적인 기준보다는 자신의 재무 상태를 기반으로 적정 납입 규모를 정하는 것이 중요하다.</p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 pt-4 border-t border-gray-100">◆ 장기 관리가 핵심</h3>
        <p>연금은 가입 이후의 관리도 중요하다. 납입 현황을 주기적으로 점검하고, 필요 시 조정하는 유연한 접근이 필요하다. 변화하는 경제 환경 속에서 장기적인 안정성을 확보하기 위해서는 지속적인 관심과 관리가 요구된다.</p>
        <p>노후 준비는 선택이 아닌 필수로 인식되고 있다. 지금의 작은 준비가 향후 안정적인 생활 기반으로 이어질 수 있다는 점에서 체계적인 계획 수립이 중요하다는 의견이 나온다.</p>
      </div>
    ),
  },
];

export default async function Sub1Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const contentId = resolvedParams.content;

  const currentId = typeof contentId === 'string' ? contentId : '1';
  const contentData = sub1Contents.find((item) => item.id === currentId);

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
        {sub1Contents.map((item) => (
          <Link
            key={item.id}
            href={`/sub1?content=${item.id}`}
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
