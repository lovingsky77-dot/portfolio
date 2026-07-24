import { SkillCategory } from '../types/portfolio';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Productivity',
    categoryEn: 'Generative AI & Automation',
    items: [
      {
        name: 'Generative AI Engine & Custom Chatbot',
        description: '사내 규정 및 FAQ 데이터를 지식 기반 프롬프트로 구조화하여 인사/복리후생 AI 챗봇 제작 및 반복 문의 30% 감축'
      },
      {
        name: 'Prompt Engineering & Scenario Design',
        description: '업무 상황별 대화 시나리오, 예외 처리, 문서 요약 프롬프트 패턴 설계로 AI 출력물 정확도 확보'
      },
      {
        name: 'AI-Powered Content Generation',
        description: 'GenZ 소통 매뉴얼 및 계층별 교육 가이드북 작성을 위한 생성형 AI 콘텐츠 기획 및 가공'
      }
    ]
  },
  {
    category: 'Data & Analytics',
    categoryEn: 'HR Data Analytics',
    items: [
      {
        name: 'HR Data Correlation Analysis',
        description: 'ESI(직원만족도) 데이터의 직급/근속/성별 그룹별 상관분석을 통해 인사 정책 결정에 실질적 통찰 제공'
      },
      {
        name: 'Advanced MS Excel & Data Cleaning',
        description: '공정채용 실적 및 경영평가 인사 데이터 정제, AI 면접 분석용 엑셀 데이터 매트릭스 구현'
      },
      {
        name: 'Evaluation & Indicator Modeling',
        description: 'MBO 평가 고도화 및 인적자원관리 계량화 지표(생산적 노사관계 지수 등) 모델링'
      }
    ]
  },
  {
    category: 'HRD & Learning',
    categoryEn: 'HRD & Talent Development',
    items: [
      {
        name: 'Educational Curriculum Architecture',
        description: '계층별 공통/직무역량 교육, 법정필수교육, 신규입사자 교육 프로세스 수립 및 17주 PPT 교육 수료율 100% 달성'
      },
      {
        name: 'GenZ Culture & Communication Strategy',
        description: '신세대 조직 적응을 위한 실무 협업 가이드라인 기획 및 세대 간 소통 문화 개선 추진'
      },
      {
        name: 'Needs Analysis & Evaluation System',
        description: '교육 요구도 설문 설계, 피드백 평가 분석, 교육 성과 검증 매커니즘 운영'
      }
    ]
  },
  {
    category: 'Content & Communication',
    categoryEn: 'Strategy & Presentation',
    items: [
      {
        name: 'Strategic Executive Reporting',
        description: '평가위원 및 경영진 중심의 설득력 있는 발표 자료 및 경진대회 보고서 작성 (교육부장관상 수상)'
      },
      {
        name: 'VOE & Employee Relations',
        description: '고충처리(VOE) 채널 운영, 퇴직 면담, 노사협의회 안건 정리 및 원활한 조직 커뮤니케이션'
      },
      {
        name: 'Policy & Manual Documentation',
        description: '인권경영 사규, 유연근무제 가이드, 인사 복리후생 안내문 등 표준 문서화'
      }
    ]
  },
  {
    category: 'Development & Collaboration',
    categoryEn: 'Tools & Systems',
    items: [
      {
        name: 'HR Systems & Audit Standard',
        description: 'ISO 45001, IATF 16949 내외부 Audit 대응 및 인권경영시스템(KMR) 도입/인증'
      },
      {
        name: 'Digital Work Tools Integration',
        description: '사내 포털, 업무용 메신저 및 AI 도구 간 체계적 연동 프로세스 지원'
      }
    ]
  }
];
