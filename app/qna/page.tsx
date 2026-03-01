'use client';

import { useState } from 'react';

const qnaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Q1. 연금저축보험은 어떤 상품인가요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '연금저축보험은 일정 기간 보험료를 납입한 뒤, 정해진 시점부터 연금 형태로 수령하는 장기 금융상품입니다. 노후 대비를 목적으로 활용되는 경우가 많으며, 일정 요건을 충족할 경우 세액공제 혜택이 적용될 수 있습니다. 다만 세제 혜택과 수령 조건은 개인의 소득 수준 및 상품 구조에 따라 달라질 수 있어 사전 확인이 필요합니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q2. 연금저축보험과 연금저축펀드의 차이는 무엇인가요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '연금저축보험은 비교적 안정적인 구조를 기반으로 하며, 일부 상품은 종신형 연금 수령이 가능합니다. 반면 연금저축펀드는 자산 운용 성과에 따라 수익률이 변동될 수 있어 수익 가능성과 함께 원금 변동 가능성도 존재합니다. 선택 시에는 개인의 투자 성향과 위험 감내 수준을 고려하는 것이 바람직합니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q3. 세액공제는 얼마나 받을 수 있나요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '연금저축은 관련 세법에 따라 연간 납입 한도 내에서 세액공제 혜택이 적용될 수 있습니다. 다만 공제율과 한도는 개인의 총급여 수준 등에 따라 달라질 수 있습니다. 또한 향후 연금 수령 시 연금소득세가 부과될 수 있어 가입 전 세금 구조 전반을 확인하는 것이 필요합니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q4. 중도 해지하면 어떻게 되나요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '연금저축보험은 장기 유지가 전제된 상품입니다. 중도 해지할 경우 해지환급금이 납입 원금에 미치지 못할 수 있으며, 기존에 받은 세액공제 혜택에 대해 추징세가 발생할 가능성도 있습니다. 따라서 단기 자금 운용 목적에는 적합하지 않을 수 있습니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q5. 연금은 언제부터 받을 수 있나요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '일반적으로 관련 법령에 따라 일정 연령 이후부터 연금 수령이 가능합니다. 구체적인 개시 연령과 수령 방식은 상품별로 다를 수 있습니다. 연금 개시 시점을 늦출 경우 월 수령액이 달라질 수 있으므로 설계 단계에서 충분한 상담이 필요합니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q6. 종신형 연금이 유리한가요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '종신형 연금은 평생 지급된다는 특징이 있어 장수 리스크에 대비하는 데 도움이 될 수 있습니다. 다만 초기 수령액이 확정기간형에 비해 낮게 설정될 수 있으며, 개인의 건강 상태와 재무 계획에 따라 적합성은 달라질 수 있습니다. 각 수령 방식의 장단점을 비교한 뒤 선택하는 것이 바람직합니다.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Q7. 가입 전 가장 중요하게 확인할 점은 무엇인가요?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': '가입 전에는 ▲사업비 및 수수료 구조 ▲납입 유지 조건 ▲세제 적용 기준 ▲연금 수령 방식 ▲중도 해지 시 불이익 여부 등을 종합적으로 검토하는 것이 필요합니다. 연금저축보험은 장기 금융상품이므로 자신의 소득 구조와 지출 계획을 고려한 설계가 중요합니다.'
      }
    }
  ]
};

const qnaList = [
  {
    id: 1,
    question: 'Q1. 연금저축보험은 어떤 상품인가요?',
    answer: '연금저축보험은 일정 기간 보험료를 납입한 뒤, 정해진 시점부터 연금 형태로 수령하는 장기 금융상품입니다. 노후 대비를 목적으로 활용되는 경우가 많으며, 일정 요건을 충족할 경우 세액공제 혜택이 적용될 수 있습니다. 다만 세제 혜택과 수령 조건은 개인의 소득 수준 및 상품 구조에 따라 달라질 수 있어 사전 확인이 필요합니다.',
  },
  {
    id: 2,
    question: 'Q2. 연금저축보험과 연금저축펀드의 차이는 무엇인가요?',
    answer: '연금저축보험은 비교적 안정적인 구조를 기반으로 하며, 일부 상품은 종신형 연금 수령이 가능합니다. 반면 연금저축펀드는 자산 운용 성과에 따라 수익률이 변동될 수 있어 수익 가능성과 함께 원금 변동 가능성도 존재합니다. 선택 시에는 개인의 투자 성향과 위험 감내 수준을 고려하는 것이 바람직합니다.',
  },
  {
    id: 3,
    question: 'Q3. 세액공제는 얼마나 받을 수 있나요?',
    answer: '연금저축은 관련 세법에 따라 연간 납입 한도 내에서 세액공제 혜택이 적용될 수 있습니다. 다만 공제율과 한도는 개인의 총급여 수준 등에 따라 달라질 수 있습니다. 또한 향후 연금 수령 시 연금소득세가 부과될 수 있어 가입 전 세금 구조 전반을 확인하는 것이 필요합니다.',
  },
  {
    id: 4,
    question: 'Q4. 중도 해지하면 어떻게 되나요?',
    answer: '연금저축보험은 장기 유지가 전제된 상품입니다. 중도 해지할 경우 해지환급금이 납입 원금에 미치지 못할 수 있으며, 기존에 받은 세액공제 혜택에 대해 추징세가 발생할 가능성도 있습니다. 따라서 단기 자금 운용 목적에는 적합하지 않을 수 있습니다.',
  },
  {
    id: 5,
    question: 'Q5. 연금은 언제부터 받을 수 있나요?',
    answer: '일반적으로 관련 법령에 따라 일정 연령 이후부터 연금 수령이 가능합니다. 구체적인 개시 연령과 수령 방식은 상품별로 다를 수 있습니다. 연금 개시 시점을 늦출 경우 월 수령액이 달라질 수 있으므로 설계 단계에서 충분한 상담이 필요합니다.',
  },
  {
    id: 6,
    question: 'Q6. 종신형 연금이 유리한가요?',
    answer: '종신형 연금은 평생 지급된다는 특징이 있어 장수 리스크에 대비하는 데 도움이 될 수 있습니다. 다만 초기 수령액이 확정기간형에 비해 낮게 설정될 수 있으며, 개인의 건강 상태와 재무 계획에 따라 적합성은 달라질 수 있습니다. 각 수령 방식의 장단점을 비교한 뒤 선택하는 것이 바람직합니다.',
  },
  {
    id: 7,
    question: 'Q7. 가입 전 가장 중요하게 확인할 점은 무엇인가요?',
    answer: '가입 전에는 ▲사업비 및 수수료 구조 ▲납입 유지 조건 ▲세제 적용 기준 ▲연금 수령 방식 ▲중도 해지 시 불이익 여부 등을 종합적으로 검토하는 것이 필요합니다. 연금저축보험은 장기 금융상품이므로 자신의 소득 구조와 지출 계획을 고려한 설계가 중요합니다.',
  }
];

export default function QnAPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <article className="max-w-3xl mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문 (QnA)</h1>
        <p className="text-gray-600">연금저축에 대해 가장 많이 묻는 질문들을 모았습니다.</p>
      </header>

      <div className="space-y-4">
        {qnaList.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              aria-expanded={openId === item.id}
            >
              <span className="font-semibold text-gray-900 text-lg">{item.question}</span>
              <span className={`transform transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openId === item.id ? 'max-h-96 py-5 border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
