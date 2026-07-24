import { ProjectCase } from '../types/portfolio';

export const PROJECTS: ProjectCase[] = [
  {
    id: 'case-chatbot',
    title: '흩어진 인사 규정을 24시간 응대 구조로 전환한 인사/복리후생 AI Chatbot 구축',
    subtitle: '반복적인 인사 및 복지 문의 프로세스 챗봇화 및 응대 부담 감소',
    period: '2025.08 ~ 현재',
    role: '기획 및 AI Chatbot 제작 전담 (개인 기여도 100%)',
    company: '㈜대동',
    badge: 'AI & Automation',
    problem: '사내 복리후생, 휴가, 인사 제도에 대한 반복적인 문의가 담당자에게 끊임없이 집중되어, 기획 업무 집중도가 떨어지고 응대 대기 시간이 발생하는 문제',
    cause: '인사 규정과 복지 안내문이 사내 게시판과 문서에 파편화되어 있어 임직원이 원하는 정보를 직접 찾기 어렵고 검색 비용이 큼',
    aiApproach: '생성형 AI 기반 인사/복리후생 전용 Chatbot을 직접 제작하여, 주요 사내 규정 및 질의응답 시나리오를 구조화된 프롬프트와 지식 기반 데이터로 전환',
    execution: [
      '자주 묻는 인사/복지 FAQ 데이터베이스 텍스트 및 시나리오 구조화',
      'AI 챗봇 프롬프트 엔지니어링 및 예외 상황(담당자 연결 가이드) 처리 모듈 설계',
      '신규 입사자 교육 및 사내 안내 채널을 통한 AI 챗봇 배포 및 가이드북 제공'
    ],
    tools: ['Generative AI Engine', 'Prompt Engineering', 'Custom Chatbot Architecture', 'Excel/Docs Data Structuring'],
    outputs: ['인사/복리후생 AI Chatbot', '사내 인사/복지 FAQ 나리지 베이스', '챗봇 활용 매뉴얼'],
    quantitativeOutcome: '담당자 직접 응대 문의량 약 30% 감소',
    qualitativeOutcome: '24시간 상시 문의 대응 체계 확보, 임직원 정보 접근성 향상, 담당자의 전략적 교육기획 업무 집중 시간 확보',
    myContribution: '인사 규정 데이터 추출 및 시나리오 설계, AI 챗봇 빌딩, 테스트 및 사내 배포 전 과정 주도',
    learnings: '단순 도구 도입보다 규정 문서의 표준화와 정확한 지식 기반 데이터 구조화가 AI 응대 품질의 핵심임을 검증함',
    scalability: '타 부서(총무, IT 지원, 노무) 챗봇 응대 체계로 표준화하여 확산 가능'
  },
  {
    id: 'case-genz-hrd',
    title: '신세대 조직 적응과 소통 구조화를 위한 GenZ 소통/협업 매뉴얼 & AI 교육기획',
    subtitle: '세대 간 소통 격차 해소 및 계층별 역량 강화 교육 프로그램 혁신',
    period: '2025.08 ~ 현재',
    role: '교육기획 & 조직문화 개선 담당',
    company: '㈜대동',
    badge: 'HRD Transformation',
    problem: '신규 입사자 및 GenZ 세대의 조직 적응 과정에서 기존 관리자 세대와의 소통 방식 차이로 인한 협업 효율 저하',
    cause: '기존 공통역량 교육이 일방향 전달식 강의 형태로 진행되어 실제 실무 협업 상황에 적용할 수 있는 구체적 가이드라인 부재',
    aiApproach: '실무 협업 사례 분석과 생성형 AI를 활용한 맞춤형 소통 시나리오 및 계층별 교육 콘텐츠 프레임워크 개발',
    execution: [
      'GenZ 소통 및 협업 현황 인터뷰/설문 데이터 분석',
      'AI 기반 상황별 대화 모의 시나리오 및 소통/협업 매뉴얼 기획',
      '법정필수교육 및 신규입사자 교육 커리큘럼에 소통/협업 실습 과정 결합'
    ],
    tools: ['Generative AI Content Design', 'Survey Data Analysis', 'MS Office', 'Curriculum Mapping'],
    outputs: ['GenZ 소통/협업 매뉴얼 기획안', '계층별 교육 커리큘럼 맵', '사내 교육 콘텐츠 모듈'],
    quantitativeOutcome: '신규입사자 교육 만족도 향상 및 사내 소통 매뉴얼 배포 완료',
    qualitativeOutcome: '세대 간 협업 이해도 증진, 수동적 교육에서 적용 중심 교육 체계로의 전환',
    myContribution: '매뉴얼 기획안 수립, 교육 커리큘럼 설계 및 운영, 교육 데이터 분석 전반 담당',
    learnings: '조직 문화 개선은 명확한 행동 지침(매뉴얼)과 참여형 교육 프로세스가 결합될 때 비로소 실행력을 가짐을 확인',
    scalability: '전사 리더십 교육 및 리모트/하이브리드 협업 가이드라인으로 확장 적용'
  },
  {
    id: 'case-ai-recruitment',
    title: '5일 만에 데이터 구조화로 입증한 AI 면접 & 공정채용 실적 분석',
    subtitle: '몰입과 데이터 분석으로 사회부총리 겸 교육부장관상 수상',
    period: '2020.10 ~ 2020.12',
    role: '공정채용 경진대회 TF 담당자 (개인 기여도 90%)',
    company: '㈜에스알',
    badge: 'Data & AI Analytics',
    problem: '제출 마감 5일 전 채용 제도 현황 실적 분석 데이터가 부재한 상황에서, 기관의 채용 실적과 공정성 성과를 증명해야 하는 위기 상황',
    cause: '전형별 채용 인원 및 제도 개선 데이터가 파편화되어 정량적 성과로 시각화되지 못함',
    aiApproach: 'AI 면접 도입 성과와 여성/지역인재 채용 데이터 등 핵심 정량 지표를 긴급 구조화하고, 평가위원 시각에 맞춘 스토리라인 구성',
    execution: [
      '기관 경영공시 및 내부 엑셀 데이터 집중 정제 및 정량적 채용 실적 산출',
      '핵심 성과로 AI 면접 제도 도입 효과 및 블라인드 채용 가이드 준수 분석',
      '대표이사 신년사(삼무정도경영)와 연계한 공정채용 로드맵 및 발표 자료 종합',
      '채용 담당자와 소통하며 5일간 몰입 집중 작업 실행'
    ],
    tools: ['Excel Data Analytics', 'AI Interview Evaluation Matrix', 'Data Visualization', 'Report Design'],
    outputs: ['공정채용/블라인드 채용 경진대회 제출 실적 보고서', 'AI 면접 및 채용 데이터 분석표'],
    quantitativeOutcome: '공정채용·블라인드채용 경진대회 부총리 겸 교육부장관상 수상 (2020.12)',
    qualitativeOutcome: '공공기관 채용 트렌드 및 공정성 반영 모범사례 공식 인정, 기관 브랜드 이미지 제고',
    myContribution: '채용 실적 데이터 전면 재분석, AI 면접 성과 분석, 발표 및 제출 보고서 작성 주도',
    learnings: '급박한 상황일수록 핵심 본질(AI 면접/공정성 데이터)을 포착하고 평가자의 시각에서 구조화하는 능력이 성패를 결정함을 배움',
    scalability: '채용 전형별 데이터 자동 집계 및 AI 채용 평가 보고 체계 구축 기반 마련'
  },
  {
    id: 'case-esi-analytics',
    title: '감이 아닌 데이터로 증명하는 ESI(직원만족도) 지표 개발 및 상관분석',
    subtitle: '조직 데이터 계량화를 통한 인적자원관리 의사결정 지원',
    period: '2020.06 ~ 2021.02',
    role: 'ESI 지표개발 및 평가 컨설팅 추진 담당자',
    company: '㈜에스알',
    badge: 'HR Data Transformation',
    problem: '기존 직원 만족도 조사가 추상적인 항목으로 구성되어 실제 인사 정책 및 조직문화 개선에 실질적인 인사이트를 제공하지 못함',
    cause: '직무/직급/근속연수/성별 등 다차원적 조직 변수 간의 상관관계 분석 없이 단편적 평균 점수만 집계함',
    aiApproach: 'HRM·ER 지표를 계량화한 ESI(Employee Satisfaction Index)를 신규 개발하고 다변량 데이터 상관분석 기법 적용',
    execution: [
      '직업 만족도, 생산적 노사관계 지수 등 정교한 평가 지표 개발 컨설팅 추진',
      '전사 직원 대상 반기별 ESI 평가 진행 및 그룹별(직급/직렬/근속/성별) 상관분석 실시',
      '분석 결과를 바탕으로 개선이 필요한 조직 및 제도 우선순위 도출하여 경영진 보고'
    ],
    tools: ['HR Data Analytics', 'Correlation Analysis', 'Excel Data Mining', 'Survey Architecture'],
    outputs: ['ESI 지표 체계 및 평가 모델', '그룹별 조직만족도 데이터 분석 보고서'],
    quantitativeOutcome: '전사 ESI 지표 체계 완성 및 반기별 피드백 프로세스 정착',
    qualitativeOutcome: '직관 중심의 조직 관리에서 데이터 기반의 HRD 및 인사 정책 수립 체계로 전환',
    myContribution: 'ESI 컨설팅 추진, 설문 지표 설계, 상관분석 데이터 산출 및 경영진 보고서 작성',
    learnings: '데이터 분석의 가치는 복잡한 통계 기법 자체보다 분석 결과가 실제 인사/조직 변화 조치로 이어지게 만드는 구조에 있음을 정립',
    scalability: '몰입도 지수(Employee Engagement Index) 및 퇴직 위험도 예측 데이터로 확장 가능'
  }
];
