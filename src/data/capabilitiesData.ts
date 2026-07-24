import { CapabilityCard } from '../types/portfolio';

export const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'cap-1',
    title: '생성형 AI 업무 적용',
    titleEn: 'Generative AI Implementation',
    step: 'AI & Automation',
    description: '반복적인 질문 응대, 문서 작성, 정보 검색 업무를 생성형 AI 프롬프트와 지식 기반 시스템으로 전환합니다.',
    context: '㈜대동 인사/복리후생 AI Chatbot 제작 및 사내 업무 가이드 구축',
    relatedCaseId: 'case-chatbot',
    iconName: 'Bot'
  },
  {
    id: 'cap-2',
    title: '프롬프트 & 워크플로 설계',
    titleEn: 'Prompt & Workflow Design',
    step: 'Structure',
    description: '업무 목적에 적합한 프롬프트 구조와 예외 처리 시나리오를 설계하여 일관된 AI 결과물 품질을 유지합니다.',
    context: '상황별 GenZ 소통 대화 시나리오 및 HR 가이드라인 생성 프롬프트 설계',
    relatedCaseId: 'case-genz-hrd',
    iconName: 'Workflow'
  },
  {
    id: 'cap-3',
    title: '데이터 분석 & 인사이트 도출',
    titleEn: 'Data Analytics & Insight Mining',
    step: 'Problem Def',
    description: '흩어진 HR 데이터와 설문 수치를 다변량 분석 및 상관관계 분석을 통해 경영진이 판단 가능한 지표로 구조화합니다.',
    context: '㈜에스알 ESI(직원만족도) 지표 개발 및 직급/근속별 상관분석 실시',
    relatedCaseId: 'case-esi-analytics',
    iconName: 'BarChart3'
  },
  {
    id: 'cap-4',
    title: '보고서 & 시각자료 제작',
    titleEn: 'Report & Visual Storytelling',
    step: 'Validation & Scale',
    description: '핵심 성과와 공정성 지표를 평가위원 및 경영진의 시각에서 설득력 있게 시각화하여 대외 표창 및 승인을 도출합니다.',
    context: '공정채용 경진대회 데이터 정제 및 5일 몰입 작업을 통한 장관상 수상',
    relatedCaseId: 'case-ai-recruitment',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'cap-5',
    title: 'HRD 프로그램 혁신',
    titleEn: 'HRD Transformation',
    step: 'Structure',
    description: '일방향 단순 강좌 교육에서 탈피하여, 실제 실무 협업 문제 해결과 연계된 계층별 역량 커리큘럼을 기획합니다.',
    context: '계층별 공통/직무역량 교육 기획 및 17주 PPT 교육 이탈률 0% 달성 경험',
    relatedCaseId: 'case-genz-hrd',
    iconName: 'GraduationCap'
  },
  {
    id: 'cap-6',
    title: '반복 업무 프로세스 효율화',
    titleEn: 'Process Efficiency & Standardization',
    step: 'AI & Automation',
    description: '비정형 인사 문서, 문의 대응, 교육 평가 프로세스를 재사용 가능한 수식 및 AI 자동화 절차로 단순화합니다.',
    context: '계약직/정규직 전환 평가, 유연근무제 문의 대응 표준화',
    relatedCaseId: 'case-chatbot',
    iconName: 'Zap'
  },
  {
    id: 'cap-7',
    title: 'AI 교육 & 조직 확산',
    titleEn: 'AI Education & Cultural Scaling',
    step: 'Validation & Scale',
    description: '조직 구성원들이 AI 도구를 두려움 없이 실무에 도입할 수 있도록 가이드북 제공 및 소통 매뉴얼 교육을 추진합니다.',
    context: '신규 입사자 교육 및 사내 소통 매뉴얼을 통한 AI 기반 업무 방식 전파',
    relatedCaseId: 'case-genz-hrd',
    iconName: 'Users'
  },
  {
    id: 'cap-8',
    title: 'AI 결과물 검토 & 품질관리',
    titleEn: 'AI Quality Control & Audit',
    step: 'Validation & Scale',
    description: 'AI가 생성한 데이터와 문서의 환각(Hallucination) 및 노무/규정 리스크를 검증하고 높은 품질 기준을 유지합니다.',
    context: 'ISO 45001, IATF 16949 등 HR 관련 내/외부 Audit 대응 경험 기반 검증',
    iconName: 'ShieldCheck'
  }
];
