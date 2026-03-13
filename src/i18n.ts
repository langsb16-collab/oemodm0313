import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: { 
        login: "Login", 
        signup: "Sign up", 
        marketplace: "Marketplace", 
        factories: "Factories", 
        howItWorks: "How it Works",
        dashboard: "Dashboard",
        rfq: "Submit RFQ",
        production: "Production"
      },
      hero: { 
        badge: "AI-Powered Manufacturing Marketplace",
        title: "Find the Best Factories Worldwide", 
        subtitle: "",
        description: "AI connects brands with verified factories worldwide.", 
        searchButton: "Search", 
        searchPlaceholder: "Search factories..." 
      },
      landing: {
        features: {
          matching: "AI Factory Matching",
          automation: "RFQ Automation",
          tracking: "Production Tracking",
          logistics: "Global Logistics",
          matchingDesc: "Our AI analyzes your design files and requirements to find the perfect factory match in seconds.",
          quality: "Verified Quality",
          qualityDesc: "Every factory in our network is strictly vetted for certifications, capacity, and ethical standards.",
          realtime: "Real-time Tracking",
          realtimeDesc: "Monitor your production line from anywhere in the world with live updates and quality reports."
        },
        stats: {
          factories: "factories",
          countries: "countries",
          rfqs: "RFQs processed"
        },
        categories: {
          title: "Popular Categories",
          subtitle: "Specialized manufacturing networks across all industries.",
          viewAll: "View All",
          electronics: "Electronics",
          apparel: "Apparel",
          automotive: "Automotive",
          medical: "Medical"
        },
        sourcing: {
          title: "AI-Powered Sourcing",
          subtitle: "Built for Speed."
        },
        footer: {
          desc: "The world's leading AI-powered manufacturing marketplace. Connecting modern brands with global factory networks.",
          platform: "Platform",
          company: "Company",
          network: "Factory Network",
          pricing: "Pricing",
          about: "About Us",
          careers: "Careers",
          contact: "Contact",
          privacy: "Privacy Policy",
          rights: "© 2026 OEM AI Platform. All rights reserved."
        }
      },
      dashboard: {
        title: "Dashboard",
        activeRFQs: "Active RFQs",
        productionOrders: "Production Orders",
        avgLeadTime: "Avg. Lead Time",
        pendingQuotes: "Pending Quotes",
        productionVolume: "Production Volume",
        recentActivity: "Recent Activity",
        last6Months: "Last 6 Months",
        lastYear: "Last Year",
        viewAll: "View All",
        exploreMarketplace: "Explore Marketplace",
        monthlyOutput: "Monthly Output across all factories",
        activities: {
          quote: "Factory X submitted a quote for \"Eco-friendly Packaging\"",
          production: "Mass production for \"Smart Watch V2\" has begun",
          rfq: "Your RFQ for \"Organic Cotton Tees\" is now live"
        },
        months: {
          jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
          jul: "Jul", aug: "Aug", sep: "Sep", oct: "Oct", nov: "Nov", dec: "Dec"
        }
      },
      rfq: {
        title: "Create OEM Request",
        subtitle: "Our AI will analyze your requirements and match you with the best global factories.",
        steps: {
          productInfo: "Product Info",
          specs: "Specifications",
          aiAnalysis: "AI Analysis"
        },
        form: {
          productName: "Product Name",
          productNamePlaceholder: "e.g. Wireless Noise Cancelling Headphones",
          category: "Category",
          categories: {
            electronics: "Consumer Electronics",
            apparel: "Apparel & Textiles",
            home: "Home & Kitchen",
            beauty: "Beauty & Personal Care"
          },
          description: "Detailed Description",
          descriptionPlaceholder: "Describe your product requirements, target audience, and key features...",
          quantity: "Target Quantity",
          quantityPlaceholder: "1,000",
          price: "Target Price (per unit)",
          pricePlaceholder: "25.00",
          files: "Design Files (CAD, PDF, Images)",
          uploadText: "Click to upload or drag and drop",
          uploadLimit: "Maximum file size 50MB"
        },
        ai: {
          ready: "AI Analysis Ready",
          desc: "Our AI is ready to analyze your request and identify potential manufacturing risks and optimizations.",
          insight: "AI Insight",
          recommendation: "Based on your category, we recommend factories with ISO 9001 and CE certifications for smoother entry into the EU market."
        },
        buttons: {
          back: "Back",
          continue: "Continue",
          submit: "Submit RFQ"
        }
      },
      common: {
        exit: "Exit Platform",
        status: "Status",
        freeMode: "Free Access Mode",
        overview: "Overview",
        clear: "Clear"
      },
      marketplace: {
        title: "Marketplace",
        searchPlaceholder: "Search factories, products, or industries...",
        filters: "Filters",
        minOrder: "Min. Order",
        capacity: "Capacity",
        viewProfile: "View Profile",
        categories: {
          electronics: "Electronics",
          apparel: "Apparel",
          cosmetics: "Cosmetics",
          automotive: "Automotive",
          furniture: "Furniture",
          packaging: "Packaging"
        }
      },
      faq: { 
        title: "Frequently Asked Questions", 
        bot: "AI Assistant",
        welcome: "Hi! I'm your AI assistant. Here are some common questions:",
        items: [
          { q: "What is OEM platform?", a: "This platform connects buyers with factories worldwide using AI matching." },
          { q: "How to request OEM manufacturing?", a: "Go to the RFQ page, fill in your product details, and our AI will match you with factories." },
          { q: "What is MOQ?", a: "MOQ stands for Minimum Order Quantity, which is the smallest amount a factory is willing to produce." },
          { q: "How to search for factories?", a: "Use the Marketplace search bar to filter by industry, country, or certifications." },
          { q: "Is sample request possible?", a: "Yes, you can request samples directly from factory profiles before mass production." },
          { q: "How does AI matching work?", a: "Our AI analyzes your design files, materials, and volume to find factories with the exact matching capabilities." },
          { q: "What industries are supported?", a: "We support electronics, apparel, automotive, medical devices, furniture, and more." },
          { q: "How do I pay for orders?", a: "We support secure bank transfers, credit cards, and escrow services for your protection." },
          { q: "Is my design IP protected?", a: "Yes, all factories sign strict NDAs, and our platform uses encrypted file storage." },
          { q: "Can I track production in real-time?", a: "Yes, factories provide daily updates, photos, and videos through the production tracker." },
          { q: "What certifications do factories have?", a: "Factories are vetted for ISO, CE, UL, and various industry-specific certifications." },
          { q: "How are shipping costs calculated?", a: "Costs are based on weight, volume, destination, and chosen shipping method (Air/Sea)." },
          { q: "What is the average lead time?", a: "Lead times vary by product, typically ranging from 15 to 45 days after sample approval." },
          { q: "Can I visit the factory?", a: "Yes, we can arrange physical visits or provide 360-degree virtual tours of the facilities." },
          { q: "How do you handle quality disputes?", a: "We provide mediation services and third-party inspection reports to resolve any issues." },
          { q: "Are there any platform fees?", a: "Basic usage is free. We charge a small service fee on successful transactions." },
          { q: "Can I use my own logistics provider?", a: "Absolutely. You can choose to use our integrated logistics or your own preferred partner." },
          { q: "What file formats are accepted for RFQs?", a: "We accept PDF, STEP, DWG, AI, and most standard industrial design formats." },
          { q: "How do I communicate with the factory?", a: "Use our built-in chat system which includes real-time translation for seamless communication." },
          { q: "Is there a mobile app?", a: "Yes, our app is available on both iOS and Android for on-the-go management." },
          { q: "What is ODM vs OEM?", a: "OEM is manufacturing your design; ODM is choosing a factory's existing design to brand as your own." },
          { q: "How do I verify factory capacity?", a: "Capacity data is verified by our team and updated monthly on factory profiles." },
          { q: "Can I get a custom quote for small batches?", a: "Yes, many of our factories specialize in small-batch flexible manufacturing." },
          { q: "What are the payment terms?", a: "Standard terms are 30% deposit and 70% before shipping, but this can be negotiated." },
          { q: "How do I manage multiple projects?", a: "Your dashboard provides a centralized view of all active RFQs and production orders." },
          { q: "Is there an inspection service?", a: "Yes, we offer professional third-party inspection services at various production stages." },
          { q: "How do I handle returns?", a: "Returns are handled according to the specific contract terms negotiated with the factory." },
          { q: "What is the 'Verified' badge?", a: "It indicates the factory has passed our rigorous on-site audit and document verification." },
          { q: "Can I export my production data?", a: "Yes, all reports and data can be exported in CSV or PDF format from your dashboard." },
          { q: "How do I contact support?", a: "You can reach our 24/7 support team via the chat widget or email at support@oem-ai.com." }
        ]
      }
    }
  },
  ko: {
    translation: {
      header: { 
        login: "로그인", 
        signup: "회원가입", 
        marketplace: "마켓플레이스", 
        factories: "제조사", 
        howItWorks: "이용방법",
        dashboard: "대시보드",
        rfq: "RFQ 제출",
        production: "생산 관리"
      },
      hero: { 
        badge: "AI 기반 제조 마켓플레이스",
        title: "세계 최고의 제조사를 찾으세요", 
        subtitle: "",
        description: "AI가 전 세계 검증된 제조사와 브랜드를 연결합니다.", 
        searchButton: "검색", 
        searchPlaceholder: "제조사 검색..." 
      },
      landing: {
        features: {
          matching: "AI 제조사 매칭",
          automation: "RFQ 자동화",
          tracking: "생산 추적",
          logistics: "글로벌 물류",
          matchingDesc: "AI가 디자인 파일과 요구 사항을 분석하여 몇 초 만에 완벽한 제조사를 찾아냅니다.",
          quality: "검증된 품질",
          qualityDesc: "네트워크의 모든 공장은 인증, 생산 능력 및 윤리적 기준에 대해 엄격하게 심사됩니다.",
          realtime: "실시간 추적",
          realtimeDesc: "실시간 업데이트와 품질 보고서를 통해 전 세계 어디서나 생산 라인을 모니터링하세요."
        },
        stats: {
          factories: "제조사",
          countries: "국가",
          rfqs: "처리된 RFQ"
        },
        categories: {
          title: "인기 카테고리",
          subtitle: "모든 산업 분야의 전문 제조 네트워크.",
          viewAll: "전체 보기",
          electronics: "전자제품",
          apparel: "의류",
          automotive: "자동차",
          medical: "의료기기"
        },
        sourcing: {
          title: "AI 기반 소싱",
          subtitle: "속도를 위한 설계."
        },
        footer: {
          desc: "세계 최고의 AI 기반 제조 마켓플레이스. 현대적인 브랜드와 글로벌 공장 네트워크를 연결합니다.",
          platform: "플랫폼",
          company: "회사",
          network: "제조사 네트워크",
          pricing: "가격 정책",
          about: "회사 소개",
          careers: "채용",
          contact: "문의하기",
          privacy: "개인정보 처리방침",
          rights: "© 2026 OEM AI 플랫폼. 모든 권리 보유."
        }
      },
      dashboard: {
        title: "대시보드",
        activeRFQs: "활성 RFQ",
        productionOrders: "생산 주문",
        avgLeadTime: "평균 리드타임",
        pendingQuotes: "대기 중인 견적",
        productionVolume: "생산량",
        recentActivity: "최근 활동",
        last6Months: "최근 6개월",
        lastYear: "최근 1년",
        viewAll: "전체 보기",
        exploreMarketplace: "마켓플레이스 둘러보기",
        monthlyOutput: "모든 공장의 월간 생산량",
        activities: {
          quote: "Factory X가 \"친환경 패키징\"에 대한 견적을 제출했습니다",
          production: "\"Smart Watch V2\"의 대량 생산이 시작되었습니다",
          rfq: "\"유기농 면 티셔츠\"에 대한 RFQ가 활성화되었습니다"
        },
        months: {
          jan: "1월", feb: "2월", mar: "3월", apr: "4월", may: "5월", jun: "6월",
          jul: "7월", aug: "8월", sep: "9월", oct: "10월", nov: "11월", dec: "12월"
        }
      },
      rfq: {
        title: "OEM 요청 생성",
        subtitle: "AI가 귀하의 요구 사항을 분석하여 최적의 글로벌 제조사와 매칭해 드립니다.",
        steps: {
          productInfo: "제품 정보",
          specs: "상세 사양",
          aiAnalysis: "AI 분석"
        },
        form: {
          productName: "제품명",
          productNamePlaceholder: "예: 무선 노이즈 캔슬링 헤드폰",
          category: "카테고리",
          categories: {
            electronics: "가전제품",
            apparel: "의류 및 섬유",
            home: "홈 & 주방",
            beauty: "뷰티 & 퍼스널 케어"
          },
          description: "상세 설명",
          descriptionPlaceholder: "제품 요구 사항, 타겟 고객 및 주요 기능을 설명해주세요...",
          quantity: "목표 수량",
          quantityPlaceholder: "1,000",
          price: "목표 단가 (개당)",
          pricePlaceholder: "25.00",
          files: "디자인 파일 (CAD, PDF, 이미지)",
          uploadText: "클릭하여 업로드하거나 파일을 여기로 끌어다 놓으세요",
          uploadLimit: "최대 파일 크기 50MB"
        },
        ai: {
          ready: "AI 분석 완료",
          desc: "AI가 요청을 분석하여 잠재적인 제조 리스크와 최적화 방안을 식별할 준비가 되었습니다.",
          insight: "AI 인사이트",
          recommendation: "귀하의 카테고리를 바탕으로, EU 시장에 보다 원활하게 진입하기 위해 ISO 9001 및 CE 인증을 보유한 제조사를 추천합니다."
        },
        buttons: {
          back: "이전",
          continue: "계속하기",
          submit: "RFQ 제출"
        }
      },
      common: {
        exit: "플랫폼 나가기",
        status: "상태",
        freeMode: "무료 액세스 모드",
        overview: "개요",
        clear: "지우기"
      },
      marketplace: {
        title: "마켓플레이스",
        searchPlaceholder: "제조사, 제품 또는 산업 검색...",
        filters: "필터",
        minOrder: "최소 주문량",
        capacity: "생산 능력",
        viewProfile: "프로필 보기",
        categories: {
          electronics: "전자제품",
          apparel: "의류",
          cosmetics: "화장품",
          automotive: "자동차",
          furniture: "가구",
          packaging: "패키징"
        }
      },
      faq: { 
        title: "자주 묻는 질문", 
        bot: "AI 어시스턴트",
        welcome: "안녕하세요! AI 어시스턴트입니다. 자주 묻는 질문들을 확인해보세요:",
        items: [
          { q: "OEM 플랫폼이란 무엇인가요?", a: "AI 매칭을 통해 전 세계 구매자와 제조사를 연결해주는 플랫폼입니다." },
          { q: "OEM 제조 요청은 어떻게 하나요?", a: "RFQ 페이지에서 제품 상세 정보를 입력하면 AI가 적합한 제조사를 매칭해 드립니다." },
          { q: "MOQ란 무엇인가요?", a: "최소 주문 수량(Minimum Order Quantity)의 약자로, 공장에서 생산 가능한 최소 물량을 의미합니다." },
          { q: "제조사 검색은 어떻게 하나요?", a: "마켓플레이스 검색창에서 산업, 국가, 인증별로 필터링하여 검색할 수 있습니다." },
          { q: "샘플 요청이 가능한가요?", a: "네, 대량 생산 전 제조사 프로필에서 직접 샘플을 요청할 수 있습니다." },
          { q: "AI 매칭은 어떻게 작동하나요?", a: "AI가 디자인 파일, 소재, 수량을 분석하여 정확한 생산 능력을 갖춘 공장을 찾아냅니다." },
          { q: "어떤 산업 분야가 지원되나요?", a: "전자제품, 의류, 자동차, 의료기기, 가구 등 다양한 산업을 지원합니다." },
          { q: "결제는 어떻게 하나요?", a: "안전한 은행 송금, 신용카드, 에스크로 서비스를 지원하여 거래를 보호합니다." },
          { q: "디자인 지식재산권(IP)은 보호되나요?", a: "네, 모든 공장은 엄격한 비밀유지계약(NDA)을 체결하며, 플랫폼은 암호화된 저장소를 사용합니다." },
          { q: "생산 과정을 실시간으로 볼 수 있나요?", a: "네, 생산 추적기를 통해 매일 업데이트되는 사진과 영상을 확인할 수 있습니다." },
          { q: "공장들은 어떤 인증을 보유하고 있나요?", a: "ISO, CE, UL 등 산업별 필수 인증을 보유한 검증된 공장들만 입점해 있습니다." },
          { q: "배송비는 어떻게 계산되나요?", a: "무게, 부피, 목적지 및 선택한 배송 방식(항공/해상)에 따라 계산됩니다." },
          { q: "평균 리드타임은 얼마나 되나요?", a: "제품별로 다르지만, 보통 샘플 승인 후 15일에서 45일 정도 소요됩니다." },
          { q: "공장 방문이 가능한가요?", a: "네, 직접 방문 일정을 조율하거나 360도 가상 투어 서비스를 이용할 수 있습니다." },
          { q: "품질 분쟁은 어떻게 해결하나요?", a: "플랫폼에서 중재 서비스를 제공하며, 제3자 검수 보고서를 통해 문제를 해결합니다." },
          { q: "플랫폼 이용료가 있나요?", a: "기본 이용은 무료입니다. 거래 성공 시 소정의 서비스 수수료가 발생합니다." },
          { q: "개인 물류 업체를 이용할 수 있나요?", a: "네, 플랫폼 통합 물류 외에 원하시는 물류 파트너를 자유롭게 선택할 수 있습니다." },
          { q: "RFQ 제출 시 어떤 파일 형식이 지원되나요?", a: "PDF, STEP, DWG, AI 등 대부분의 표준 산업 디자인 형식을 지원합니다." },
          { q: "제조사와 어떻게 소통하나요?", a: "내장된 채팅 시스템을 이용하며, 실시간 번역 기능으로 언어 장벽 없이 소통 가능합니다." },
          { q: "모바일 앱이 있나요?", a: "네, iOS와 안드로이드 앱을 통해 어디서든 프로젝트를 관리할 수 있습니다." },
          { q: "ODM과 OEM의 차이는 무엇인가요?", a: "OEM은 고객의 디자인으로 생산하는 것이고, ODM은 공장의 기존 디자인에 브랜드만 입히는 것입니다." },
          { q: "공장의 생산 능력을 어떻게 믿을 수 있나요?", a: "저희 팀이 매달 공장 프로필의 생산 능력 데이터를 직접 검증하고 업데이트합니다." },
          { q: "소량 생산도 견적을 받을 수 있나요?", a: "네, 많은 제조사들이 소량 다품종 유연 생산 시스템을 갖추고 있습니다." },
          { q: "결제 조건은 어떻게 되나요?", a: "일반적으로 착수금 30%, 선적 전 70%이나 협의를 통해 조정 가능합니다." },
          { q: "여러 프로젝트를 동시에 관리할 수 있나요?", a: "대시보드에서 모든 활성 RFQ와 생산 주문을 한눈에 관리할 수 있습니다." },
          { q: "검수 서비스가 있나요?", a: "네, 생산 단계별로 전문적인 제3자 검수 서비스를 옵션으로 제공합니다." },
          { q: "반품 처리는 어떻게 하나요?", a: "제조사와 체결한 개별 계약 조건에 따라 반품 및 환불 절차가 진행됩니다." },
          { q: "‘Verified’ 배지는 무엇을 의미하나요?", a: "현장 실사와 서류 검증을 통과한 신뢰할 수 있는 제조사임을 의미합니다." },
          { q: "생산 데이터를 내보낼 수 있나요?", a: "네, 대시보드에서 모든 보고서와 데이터를 CSV나 PDF로 내보낼 수 있습니다." },
          { q: "고객 지원팀에 어떻게 연락하나요?", a: "채팅 위젯이나 이메일(support@oem-ai.com)을 통해 24시간 지원을 받으실 수 있습니다." }
        ]
      }
    }
  },
  zh: {
    translation: {
      header: { login: "登录", signup: "注册", marketplace: "市场", factories: "工厂", howItWorks: "运作方式", dashboard: "仪表板", rfq: "提交 RFQ", production: "生产" },
      hero: { badge: "AI 驱动的制造市场", title: "在全球范围内寻找最佳工厂", subtitle: "", description: "AI 将品牌与全球经过验证的工厂联系起来。", searchButton: "搜索", searchPlaceholder: "搜索工厂..." },
      landing: {
        features: { matching: "AI 工厂匹配", automation: "RFQ 自动化", tracking: "生产追踪", logistics: "全球物流", matchingDesc: "我们的 AI 分析您的设计文件和要求，在几秒钟内找到完美的工厂匹配。", quality: "验证质量", qualityDesc: "我们网络中的每家工厂都经过严格的认证、产能和道德标准审查。", realtime: "实时追踪", realtimeDesc: "通过实时更新和质量报告，从世界任何地方监控您的生产线。" },
        stats: { factories: "工厂", countries: "国家", rfqs: "已处理的 RFQ" },
        categories: { title: "热门类别", subtitle: "跨所有行业的专业制造网络。", viewAll: "查看全部", electronics: "电子产品", apparel: "服装", automotive: "汽车", medical: "医疗" },
        sourcing: { title: "AI 驱动的采购", subtitle: "为速度而生。" },
        footer: { desc: "全球领先的 AI 驱动制造市场。将现代品牌与全球工厂网络联系起来。", platform: "平台", company: "公司", network: "工厂网络", pricing: "定价", about: "关于我们", careers: "职业", contact: "联系我们", privacy: "隐私政策", rights: "© 2026 OEM AI 平台。保留所有权利。" }
      },
      dashboard: { title: "仪表板", activeRFQs: "活跃 RFQ", productionOrders: "生产订单", avgLeadTime: "平均交期", pendingQuotes: "待定报价", productionVolume: "生产量", recentActivity: "近期活动" },
      marketplace: { title: "市场", searchPlaceholder: "搜索工厂、产品或行业...", filters: "筛选", minOrder: "最小起订量", capacity: "产能", viewProfile: "查看个人资料" },
      faq: { 
        title: "常见问题", 
        bot: "AI 助手",
        welcome: "您好！我是您的 AI 助手。以下是一些常见问题：",
        items: [
          { q: "什么是 OEM 平台？", a: "该平台利用 AI 匹配技术连接全球买家和工厂。" },
          { q: "如何申请 OEM 制造？", a: "前往 RFQ 页面，填写您的产品详情，我们的 AI 将为您匹配工厂。" },
          { q: "什么是最小起订量 (MOQ)？", a: "MOQ 代表最小起订量，是工厂愿意生产的最小数量。" },
          { q: "如何搜索工厂？", a: "使用市场搜索栏，按行业、国家或认证进行过滤。" },
          { q: "可以申请样品吗？", a: "可以，在批量生产前，您可以直接从工厂资料页申请样品。" },
          { q: "AI 匹配如何工作？", a: "我们的 AI 分析您的设计文件、材料和数量，以找到具有精确匹配能力的工厂。" },
          { q: "支持哪些行业？", a: "我们支持电子、服装、汽车、医疗器械、家具等行业。" },
          { q: "如何支付订单？", a: "我们支持安全的银行转账、信用卡和托管服务，以保护您的交易。" },
          { q: "我的设计知识产权受保护吗？", a: "是的，所有工厂都签署了严格的 NDA，我们的平台使用加密文件存储。" },
          { q: "我可以实时追踪生产吗？", a: "可以，工厂通过生产追踪器提供每日更新、照片和视频。" },
          { q: "工厂拥有哪些认证？", a: "工厂经过 ISO、CE、UL 和各种行业特定认证的审查。" },
          { q: "运费如何计算？", a: "费用基于重量、体积、目的地和选择的运输方式（空运/海运）。" },
          { q: "平均交货时间是多少？", a: "交货时间因产品而异，通常在样品批准后 15 至 45 天不等。" },
          { q: "我可以参观工厂吗？", a: "可以，我们可以安排实地参观或提供设施的 360 度虚拟导览。" },
          { q: "如何处理质量纠纷？", a: "我们提供调解服务和第三方检测报告来解决任何问题。" },
          { q: "有平台费用吗？", a: "基本使用是免费的。我们对成功的交易收取少量的服务费。" },
          { q: "我可以使用自己的物流供应商吗？", a: "当然可以。您可以选择使用我们的综合物流或您自己首选的合作伙伴。" },
          { q: "RFQ 接受哪些文件格式？", a: "我们接受 PDF、STEP、DWG、AI 和大多数标准工业设计格式。" },
          { q: "如何与工厂沟通？", a: "使用我们的内置聊天系统，其中包括实时翻译，实现无缝沟通。" },
          { q: "有移动应用吗？", a: "是的，我们的应用可在 iOS 和 Android 上使用，方便随时随地管理。" },
          { q: "什么是 ODM 与 OEM？", a: "OEM 是按您的设计制造；ODM 是选择工厂现有的设计作为您自己的品牌。" },
          { q: "如何验证工厂产能？", a: "产能数据由我们的团队验证，并每月在工厂资料页更新。" },
          { q: "我可以获得小批量定制报价吗？", a: "可以，我们的许多工厂专门从事小批量灵活制造。" },
          { q: "付款条件是什么？", a: "标准条件是 30% 定金，发货前支付 70%，但这可以协商。" },
          { q: "如何管理多个项目？", a: "您的仪表板提供所有活跃 RFQ 和生产订单的集中视图。" },
          { q: "有检测服务吗？", a: "是的，我们在不同的生产阶段提供专业的第三方检测服务。" },
          { q: "如何处理退货？", a: "退货根据与工厂协商的具体合同条款处理。" },
          { q: "什么是“已验证”徽章？", a: "这表示工厂已通过我们严格的现场审核和文件验证。" },
          { q: "我可以导出我的生产数据吗？", a: "可以，所有报告和数据都可以从您的仪表板以 CSV 或 PDF 格式导出。" },
          { q: "如何联系支持人员？", a: "您可以全天候通过聊天挂件或发送电子邮件至 support@oem-ai.com 联系我们的支持团队。" }
        ]
      }
    }
  },
  ja: {
    translation: {
      header: { login: "ログイン", signup: "サインアップ", marketplace: "マーケットプレイス", factories: "工場", howItWorks: "仕組み", dashboard: "ダッシュボード", rfq: "RFQを提出", production: "生産" },
      hero: { badge: "AI 駆動の製造マーケットプレイス", title: "世界最高の工場を見つける", subtitle: "", description: "AI がブランドと世界中の検証済み工場を繋ぎます。", searchButton: "検索", searchPlaceholder: "工場を検索..." },
      landing: {
        features: { matching: "AI 工場マッチング", automation: "RFQ 自動化", tracking: "生産追跡", logistics: "グローバル物流", matchingDesc: "当社の AI が設計ファイルと要件を分析し、数秒で最適な工場を見つけます。", quality: "検証済み品質", qualityDesc: "当社のネットワーク内のすべての工場は、認証、生産能力、倫理基準について厳格に審査されています。", realtime: "リアルタイム追跡", realtimeDesc: "ライブアップデートと品質レポートにより、世界中のどこからでも生産ラインを監視できます。" },
        stats: { factories: "工場", countries: "国", rfqs: "処理済み RFQ" },
        categories: { title: "人気のカテゴリー", subtitle: "あらゆる業界の専門的な製造ネットワーク。", viewAll: "すべて見る", electronics: "電子機器", apparel: "アパレル", automotive: "自動車", medical: "医療" },
        sourcing: { title: "AI 駆動のソーシング", subtitle: "スピードのために構築。" },
        footer: { desc: "世界をリードする AI 駆動の製造マーケットプレイス。モダンブランドとグローバルな工場ネットワークを繋ぎます。", platform: "プラットフォーム", company: "会社", network: "工場ネットワーク", pricing: "価格設定", about: "私たちについて", careers: "採用情報", contact: "お問い合わせ", privacy: "プライバシーポリシー", rights: "© 2026 OEM AI プラットフォーム。All rights reserved." }
      },
      dashboard: { 
        title: "ダッシュボード", 
        activeRFQs: "アクティブな RFQ", 
        productionOrders: "生産注文", 
        avgLeadTime: "平均リードタイム", 
        pendingQuotes: "保留中の見積もり", 
        productionVolume: "生産量", 
        recentActivity: "最近の活動",
        last6Months: "過去6ヶ月",
        lastYear: "過去1年",
        viewAll: "すべて表示",
        exploreMarketplace: "マーケットプレイスを探索",
        monthlyOutput: "全工場の月間生産量"
      },
      marketplace: { 
        title: "マーケットプレイス", 
        searchPlaceholder: "工場、製品、または業界を検索...", 
        filters: "フィルター", 
        minOrder: "最小注文数", 
        capacity: "生産能力", 
        viewProfile: "プロフィールを表示",
        categories: {
          electronics: "電子機器",
          apparel: "アパレル",
          cosmetics: "化粧品",
          automotive: "自動車",
          furniture: "家具",
          packaging: "パッケージング"
        }
      },
      faq: { 
        title: "よくある質問", 
        bot: "AI アシスタント",
        welcome: "こんにちは！AI アシスタントです。よくある質問はこちらです：",
        items: [
          { q: "OEMプラットフォームとは何ですか？", a: "このプラットフォームは、AIマッチングを使用して世界中のバイヤーと工場を繋ぎます。" },
          { q: "OEM製造を依頼するにはどうすればよいですか？", a: "RFQページに移動し、製品の詳細を入力してください。AIが最適な工場をマッチングします。" },
          { q: "MOQとは何ですか？", a: "MOQは最小注文数量の略で、工場が生産を受け付ける最小の数量です。" },
          { q: "工場を検索するにはどうすればよいですか？", a: "マーケットプレイスの検索バーを使用し、業界、国、または認証でフィルタリングしてください。" },
          { q: "サンプルの依頼は可能ですか？", a: "はい、量産前に工場プロフィールから直接サンプルを依頼できます。" },
          { q: "AIマッチングはどのように機能しますか？", a: "当社のAIが設計ファイル、材料、数量を分析し、正確な生産能力を持つ工場を見つけます。" },
          { q: "どのような業界がサポートされていますか？", a: "電子機器、アパレル、自動車、医療機器、家具などをサポートしています。" },
          { q: "注文の支払いはどのように行いますか？", a: "お客様の保護のため、安全な銀行振込、クレジットカード、エスクローサービスをサポートしています。" },
          { q: "私のデザインの知的財産は保護されますか？", a: "はい、すべての工場が厳格なNDAに署名し、当社のプラットフォームは暗号化されたファイルストレージを使用します。" },
          { q: "生産をリアルタイムで追跡できますか？", a: "はい、工場は生産トラッカーを通じて毎日の更新、写真、ビデオを提供します。" },
          { q: "工場はどのような認証を持っていますか？", a: "工場はISO、CE、UL、および各種業界固有の認証について審査されています。" },
          { q: "配送料はどのように計算されますか？", a: "重量、容積、目的地、および選択した配送方法（航空/海上）に基づいて計算されます。" },
          { q: "平均的なリードタイムはどのくらいですか？", a: "リードタイムは製品によって異なりますが、通常、サンプル承認後15〜45日です。" },
          { q: "工場を訪問できますか？", a: "はい、物理的な訪問の手配や、施設の360度バーチャルツアーの提供が可能です。" },
          { q: "品質に関する紛争はどのように処理されますか？", a: "問題解決のために、調停サービスと第三者検査レポートを提供します。" },
          { q: "プラットフォーム手数料はありますか？", a: "基本的な使用は無料です。取引成立時に少額のサービス手数料を申し受けます。" },
          { q: "自社の物流業者を使用できますか？", a: "もちろんです。当社の統合物流またはお客様が希望するパートナーを選択できます。" },
          { q: "RFQで受け入れられるファイル形式は何ですか？", a: "PDF、STEP、DWG、AI、およびほとんどの標準的な工業デザイン形式を受け入れています。" },
          { q: "工場とはどのように連絡を取りますか？", a: "シームレスなコミュニケーションのためにリアルタイム翻訳を含む内蔵チャットシステムを使用してください。" },
          { q: "モバイルアプリはありますか？", a: "はい、外出先での管理のためにiOSとAndroidの両方でアプリをご利用いただけます。" },
          { q: "ODMとOEMの違いは何ですか？", a: "OEMはお客様のデザインを製造することです。ODMは工場の既存のデザインを選び、自社ブランドとして販売することです。" },
          { q: "工場の生産能力をどのように確認しますか？", a: "生産能力データは当社のチームによって検証され、工場プロフィールで毎月更新されます。" },
          { q: "小ロットのカスタム見積もりは可能ですか？", a: "はい、当社の多くの工場が小ロットの柔軟な製造を専門としています。" },
          { q: "支払い条件はどうなっていますか？", a: "標準的な条件はデポジット30％、出荷前に70％ですが、交渉可能です。" },
          { q: "複数のプロジェクトをどのように管理しますか？", a: "ダッシュボードで、すべてのアクティブなRFQと生産注文を一元的に確認できます。" },
          { q: "検査サービスはありますか？", a: "はい、生産のさまざまな段階で専門的な第三者検査サービスを提供しています。" },
          { q: "返品はどのように処理されますか？", a: "返品は、工場と交渉した特定の契約条件に従って処理されます。" },
          { q: "「Verified」バッジとは何ですか？", a: "工場が当社の厳格な現地監査と書類検証に合格したことを示します。" },
          { q: "生産データをエクスポートできますか？", a: "はい、すべてのレポートとデータはダッシュボードからCSVまたはPDF形式でエクスポートできます。" },
          { q: "サポートへの連絡方法を教えてください。", a: "チャットウィジェットまたはメール（support@oem-ai.com）で、24時間年中無休のサポートチームに連絡できます。" }
        ]
      }
    }
  },
  ru: {
    translation: {
      header: { login: "Вход", signup: "Регистрация", marketplace: "Маркетплейс", factories: "Заводы", howItWorks: "Как это работает", dashboard: "Панель управления", rfq: "Отправить запрос", production: "Производство" },
      hero: { badge: "Производственная площадка на базе ИИ", title: "Найдите лучшие заводы по всему миру", subtitle: "", description: "ИИ соединяет бренды с проверенными заводами по всему миру.", searchButton: "Поиск", searchPlaceholder: "Поиск заводов..." },
      landing: {
        features: { matching: "ИИ-подбор заводов", automation: "Автоматизация RFQ", tracking: "Отслеживание производства", logistics: "Глобальная логистика", matchingDesc: "Наш ИИ анализирует ваши файлы дизайна и требования, чтобы найти идеальный завод за считанные секунды.", quality: "Проверенное качество", qualityDesc: "Каждый завод в нашей сети проходит строгую проверку на наличие сертификатов, мощностей и этических стандартов.", realtime: "Отслеживание в реальном времени", realtimeDesc: "Контролируйте свою производственную линию из любой точки мира с помощью оперативных обновлений и отчетов о качестве." },
        stats: { factories: "заводов", countries: "стран", rfqs: "обработано RFQ" },
        categories: { title: "Популярные категории", subtitle: "Специализированные производственные сети во всех отраслях.", viewAll: "Посмотреть все", electronics: "Электроника", apparel: "Одежда", automotive: "Автомобилестроение", medical: "Медицина" },
        sourcing: { title: "Сорсинг на базе ИИ", subtitle: "Создано для скорости." },
        footer: { desc: "Ведущая в мире производственная площадка на базе ИИ. Соединяем современные бренды с глобальными сетями заводов.", platform: "Платформа", company: "Компания", network: "Сеть заводов", pricing: "Цены", about: "О нас", careers: "Вакансии", contact: "Контакты", privacy: "Политика конфиденциальности", rights: "© 2026 OEM AI Platform. Все права защищены." }
      },
      dashboard: { 
        title: "Панель управления", 
        activeRFQs: "Активные RFQ", 
        productionOrders: "Заказы на производство", 
        avgLeadTime: "Ср. время выполнения", 
        pendingQuotes: "Ожидающие котировки", 
        productionVolume: "Объем производства", 
        recentActivity: "Последние действия",
        last6Months: "Последние 6 месяцев",
        lastYear: "Последний год",
        viewAll: "Посмотреть все",
        exploreMarketplace: "Исследовать маркетплейс",
        monthlyOutput: "Ежемесячный выпуск на всех заводах"
      },
      marketplace: { 
        title: "Маркетплейс", 
        searchPlaceholder: "Поиск заводов, продуктов или отраслей...", 
        filters: "Фильтры", 
        minOrder: "Мин. заказ", 
        capacity: "Мощность", 
        viewProfile: "Посмотреть профиль",
        categories: {
          electronics: "Электроника",
          apparel: "Одежда",
          cosmetics: "Косметика",
          automotive: "Автомобилестроение",
          furniture: "Мебель",
          packaging: "Упаковка"
        }
      },
      faq: { 
        title: "Часто задаваемые вопросы", 
        bot: "ИИ-помощник",
        welcome: "Привет! Я ваш ИИ-помощник. Вот несколько популярных вопросов:",
        items: [
          { q: "Что такое OEM-платформа?", a: "Эта платформа соединяет покупателей с заводами по всему миру с помощью ИИ-подбора." },
          { q: "Как запросить OEM-производство?", a: "Перейдите на страницу RFQ, заполните данные о вашем продукте, и наш ИИ подберет для вас заводы." },
          { q: "Что такое MOQ?", a: "MOQ означает минимальный объем заказа — это наименьшее количество, которое завод готов произвести." },
          { q: "Как искать заводы?", a: "Используйте строку поиска на маркетплейсе, чтобы отфильтровать по отрасли, стране или сертификатам." },
          { q: "Можно ли запросить образец?", a: "Да, вы можете запросить образцы напрямую в профилях заводов перед массовым производством." },
          { q: "Как работает ИИ-подбор?", a: "Наш ИИ анализирует ваши файлы дизайна, материалы и объем, чтобы найти заводы с точно подходящими возможностями." },
          { q: "Какие отрасли поддерживаются?", a: "Мы поддерживаем электронику, одежду, автомобилестроение, медицинские устройства, мебель и многое другое." },
          { q: "Как оплатить заказы?", a: "Мы поддерживаем безопасные банковские переводы, кредитные карты и услуги эскроу для вашей защиты." },
          { q: "Защищена ли интеллектуальная собственность моего дизайна?", a: "Да, все заводы подписывают строгие соглашения о неразглашении (NDA), а наша платформа использует зашифрованное хранилище файлов." },
          { q: "Могу ли я отслеживать производство в реальном времени?", a: "Да, заводы предоставляют ежедневные обновления, фотографии и видео через трекер производства." },
          { q: "Какие сертификаты есть у заводов?", a: "Заводы проверяются на наличие сертификатов ISO, CE, UL и различных отраслевых сертификатов." },
          { q: "Как рассчитывается стоимость доставки?", a: "Стоимость зависит от веса, объема, пункта назначения и выбранного способа доставки (авиа/море)." },
          { q: "Какое среднее время выполнения заказа?", a: "Сроки зависят от продукта, обычно составляя от 15 до 45 дней после утверждения образца." },
          { q: "Могу ли я посетить завод?", a: "Да, мы можем организовать физические визиты или предоставить виртуальные 360-градусные туры по объектам." },
          { q: "Как вы решаете споры по качеству?", a: "Мы предоставляем услуги посредничества и отчеты сторонних инспекций для решения любых проблем." },
          { q: "Есть ли плата за платформу?", a: "Базовое использование бесплатно. Мы взимаем небольшую комиссию за успешные транзакции." },
          { q: "Могу ли я использовать своего логистического провайдера?", a: "Конечно. Вы можете использовать нашу интегрированную логистику или своего предпочтительного партнера." },
          { q: "Какие форматы файлов принимаются для RFQ?", a: "Мы принимаем PDF, STEP, DWG, AI и большинство стандартных форматов промышленного дизайна." },
          { q: "Как мне общаться с заводом?", a: "Используйте нашу встроенную систему чата, которая включает перевод в реальном времени для беспрепятственного общения." },
          { q: "Есть ли мобильное приложение?", a: "Да, наше приложение доступно на iOS и Android для управления на ходу." },
          { q: "Что такое ODM против OEM?", a: "OEM — это производство по вашему дизайну; ODM — это выбор существующего дизайна завода для выпуска под вашим брендом." },
          { q: "Как проверить мощности завода?", a: "Данные о мощностях проверяются нашей командой и ежемесячно обновляются в профилях заводов." },
          { q: "Могу ли я получить индивидуальное предложение для небольших партий?", a: "Да, многие из наших заводов специализируются на мелкосерийном гибком производстве." },
          { q: "Каковы условия оплаты?", a: "Стандартные условия: депозит 30% и 70% перед отправкой, но это можно обсудить." },
          { q: "Как управлять несколькими проектами?", a: "Ваша панель управления обеспечивает централизованный вид всех активных RFQ и производственных заказов." },
          { q: "Есть ли инспекционная служба?", a: "Да, мы предлагаем профессиональные услуги сторонних инспекций на различных этапах производства." },
          { q: "Как оформить возврат?", a: "Возвраты оформляются в соответствии с конкретными условиями контракта, согласованными с заводом." },
          { q: "Что такое значок «Проверено»?", a: "Он указывает на то, что завод прошел наш строгий аудит на месте и проверку документов." },
          { q: "Могу ли я экспортировать свои производственные данные?", a: "Да, все отчеты и данные можно экспортировать в формате CSV или PDF из вашей панели управления." },
          { q: "Как связаться со службой поддержки?", a: "Вы можете связаться с нашей круглосуточной службой поддержки через виджет чата или по электронной почте support@oem-ai.com." }
        ]
      }
    }
  },
  hi: {
    translation: {
      header: { login: "लॉगिन", signup: "साइन अप", marketplace: "मार्केटप्लेस", factories: "कारखाने", howItWorks: "यह कैसे काम करता है", dashboard: "डैशबोर्ड", rfq: "RFQ सबमिट करें", production: "उत्पादन" },
      hero: { badge: "AI-संचालित विनिर्माण मार्केटप्लेस", title: "दुनिया भर में सर्वश्रेष्ठ कारखाने खोजें", subtitle: "", description: "AI दुनिया भर के सत्यापित कारखानों के साथ ब्रांडों को जोड़ता है।", searchButton: "खोजें", searchPlaceholder: "कारखाने खोजें..." },
      landing: {
        features: { matching: "AI फैक्ट्री मैचिंग", automation: "RFQ ऑटोमेशन", tracking: "उत्पादन ट्रैकिंग", logistics: "वैश्विक रसद", matchingDesc: "हमारा AI सेकंडों में सही फैक्ट्री मैच खोजने के लिए आपके डिज़ाइन फ़ाइलों और आवश्यकताओं का विश्लेषण करता है।", quality: "सत्यापित गुणवत्ता", qualityDesc: "हमारे नेटवर्क की हर फैक्ट्री को प्रमाणपत्रों, क्षमता और नैतिक मानकों के लिए कड़ाई से जांचा जाता है।", realtime: "रियल-टाइम ट्रैकिंग", realtimeDesc: "लाइव अपडेट और गुणवत्ता रिपोर्ट के साथ दुनिया में कहीं से भी अपनी उत्पादन लाइन की निगरानी करें।" },
        stats: { factories: "कारखाने", countries: "देश", rfqs: "संसाधित RFQ" },
        categories: { title: "लोकप्रिय श्रेणियां", subtitle: "सभी उद्योगों में विशिष्ट विनिर्माण नेटवर्क।", viewAll: "सभी देखें", electronics: "इलेक्ट्रॉनिक्स", apparel: "परिधान", automotive: "ऑटोमोटिव", medical: "मेडिकल" },
        sourcing: { title: "AI-संचालित सोर्सिंग", subtitle: "गति के लिए निर्मित।" },
        footer: { desc: "दुनिया का अग्रणी AI-संचालित विनिर्माण मार्केटप्लेस। आधुनिक ब्रांडों को वैश्विक फैक्ट्री नेटवर्क से जोड़ना।", platform: "प्लेटफ़ॉर्म", company: "कंपनी", network: "फैक्ट्री नेटवर्क", pricing: "मूल्य निर्धारण", about: "हमारे बारे में", careers: "करियर", contact: "संपर्क", privacy: "गोपनीयता नीति", rights: "© 2026 OEM AI प्लेटफ़ॉर्म। सर्वाधिकार सुरक्षित।" }
      },
      dashboard: { 
        title: "डैशबोर्ड", 
        activeRFQs: "सक्रिय RFQ", 
        productionOrders: "उत्पादन आदेश", 
        avgLeadTime: "औसत लीड टाइम", 
        pendingQuotes: "लंबित उद्धरण", 
        productionVolume: "उत्पादन मात्रा", 
        recentActivity: "हाल की गतिविधि",
        last6Months: "पिछले 6 महीने",
        lastYear: "पिछले साल",
        viewAll: "सभी देखें",
        exploreMarketplace: "मार्केटप्लेस एक्सप्लोर करें",
        monthlyOutput: "सभी कारखानों में मासिक उत्पादन"
      },
      marketplace: { 
        title: "मार्केटप्लेस", 
        searchPlaceholder: "कारखानों, उत्पादों या उद्योगों की खोज करें...", 
        filters: "फ़िल्टर", 
        minOrder: "न्यूनतम ऑर्डर", 
        capacity: "क्षमता", 
        viewProfile: "प्रोफ़ाइल देखें",
        categories: {
          electronics: "इलेक्ट्रॉनिक्स",
          apparel: "परिधान",
          cosmetics: "कॉस्मेटिक्स",
          automotive: "ऑटोमोटिव",
          furniture: "फर्नीचर",
          packaging: "पैकेजिंग"
        }
      },
      faq: { 
        title: "अक्सर पूछे जाने वाले प्रश्न", 
        bot: "AI सहायक",
        welcome: "नमस्ते! मैं आपका AI सहायक हूँ। यहाँ कुछ सामान्य प्रश्न दिए गए हैं:",
        items: [
          { q: "OEM प्लेटफॉर्म क्या है?", a: "यह प्लेटफॉर्म AI मैचिंग का उपयोग करके खरीदारों को दुनिया भर के कारखानों से जोड़ता है।" },
          { q: "OEM विनिर्माण का अनुरोध कैसे करें?", a: "RFQ पेज पर जाएं, अपने उत्पाद का विवरण भरें, और हमारा AI आपको कारखानों से मिलाएगा।" },
          { q: "MOQ क्या है?", a: "MOQ का अर्थ है न्यूनतम ऑर्डर मात्रा, जो वह सबसे छोटी मात्रा है जिसे एक कारखाना बनाने के लिए तैयार है।" },
          { q: "कारखानों की खोज कैसे करें?", a: "उद्योग, देश या प्रमाणपत्रों द्वारा फ़िल्टर करने के लिए मार्केटप्लेस सर्च बार का उपयोग करें।" },
          { q: "क्या नमूना अनुरोध संभव है?", a: "हाँ, आप बड़े पैमाने पर उत्पादन से पहले सीधे फैक्ट्री प्रोफाइल से नमूनों का अनुरोध कर सकते।" },
          { q: "AI मैचिंग कैसे काम करती है?", a: "हमारा AI आपकी डिज़ाइन फ़ाइलों, सामग्रियों और मात्रा का विश्लेषण करता है ताकि सटीक मिलान क्षमताओं वाले कारखाने मिल सकें।" },
          { q: "किन उद्योगों का समर्थन किया जाता है?", a: "हम इलेक्ट्रॉनिक्स, परिधान, ऑटोमोटिव, चिकित्सा उपकरण, फर्नीचर और बहुत कुछ का समर्थन करते हैं।" },
          { q: "मैं ऑर्डर के लिए भुगतान कैसे करूँ?", a: "हम आपकी सुरक्षा के लिए सुरक्षित बैंक हस्तांतरण, क्रेडिट कार्ड और एस्क्रो सेवाओं का समर्थन करते हैं।" },
          { q: "क्या मेरा डिज़ाइन IP सुरक्षित है?", a: "हाँ, सभी कारखाने सख्त NDA पर हस्ताक्षर करते हैं, और हमारा प्लेटफ़ॉर्म एन्क्रिप्टेड फ़ाइल स्टोरेज का उपयोग करता है।" },
          { q: "क्या मैं रियल-टाइम में उत्पादन को ट्रैक कर सकता हूँ?", a: "हाँ, कारखाने उत्पादन ट्रैकर के माध्यम से दैनिक अपडेट, फ़ोटो और वीडियो प्रदान करते हैं।" },
          { q: "कारखानों के पास कौन से प्रमाणपत्र हैं?", a: "कारखानों की ISO, CE, UL और विभिन्न उद्योग-विशिष्ट प्रमाणपत्रों के लिए जांच की जाती है।" },
          { q: "शिपिंग लागत की गणना कैसे की जाती है?", a: "लागत वजन, मात्रा, गंतव्य और चुनी गई शिपिंग विधि (हवाई/समुद्री) पर आधारित होती है।" },
          { q: "औसत लीड टाइम क्या है?", a: "लीड टाइम उत्पाद के अनुसार अलग-अलग होते हैं, आमतौर पर नमूना अनुमोदन के बाद 15 से 45 दिनों तक होते हैं।" },
          { q: "क्या मैं कारखाने का दौरा कर सकता हूँ?", a: "हाँ, हम भौतिक यात्राओं की व्यवस्था कर सकते हैं या सुविधाओं के 360-डिग्री वर्चुअल टूर प्रदान कर सकते हैं।" },
          { q: "आप गुणवत्ता विवादों को कैसे संभालते हैं?", a: "हम किसी भी मुद्दे को हल करने के लिए मध्यस्थता सेवाएं और तीसरे पक्ष की निरीक्षण रिपोर्ट प्रदान करते हैं।" },
          { q: "क्या कोई प्लेटफ़ॉर्म शुल्क है?", a: "बुनियादी उपयोग मुफ़्त है। हम सफल लेनदेन पर एक छोटा सेवा शुल्क लेते हैं।" },
          { q: "क्या मैं अपने स्वयं के रसद प्रदाता का उपयोग कर सकता हूँ?", a: "बिल्कुल। आप हमारे एकीकृत रसद या अपने स्वयं के पसंदीदा साथी का उपयोग करना चुन सकते हैं।" },
          { q: "RFQ के लिए कौन से फ़ाइल स्वरूप स्वीकार किए जाते हैं?", a: "हम PDF, STEP, DWG, AI और अधिकांश मानक औद्योगिक डिज़ाइन स्वरूपों को स्वीकार करते हैं।" },
          { q: "मैं कारखाने के साथ कैसे संवाद करूँ?", a: "हमारे अंतर्निहित चैट सिस्टम का उपयोग करें जिसमें निर्बाध संचार के लिए रियल-टाइम अनुवाद शामिल है।" },
          { q: "क्या कोई मोबाइल ऐप है?", a: "हाँ, हमारा ऐप चलते-फिरते प्रबंधन के लिए iOS और Android दोनों पर उपलब्ध है।" },
          { q: "ODM बनाम OEM क्या है?", a: "OEM आपके डिज़ाइन का निर्माण कर रहा है; ODM एक कारखाने के मौजूदा डिज़ाइन को अपने ब्रांड के रूप में चुनना है।" },
          { q: "मैं कारखाने की क्षमता को कैसे सत्यापित करूँ?", a: "क्षमता डेटा हमारी टीम द्वारा सत्यापित किया जाता है और फैक्ट्री प्रोफाइल पर मासिक रूप से अपडेट किया जाता है।" },
          { q: "क्या मुझे छोटे बैचों के लिए कस्टम उद्धरण मिल सकता है?", a: "हाँ, हमारे कई कारखाने छोटे बैच के लचीले विनिर्माण में विशेषज्ञ हैं।" },
          { q: "भुगतान की शर्तें क्या हैं?", a: "मानक शर्तें 30% जमा और शिपिंग से पहले 70% हैं, लेकिन इस पर बातचीत की जा सकती है।" },
          { q: "मैं कई परियोजनाओं का प्रबंधन कैसे करूँ?", a: "आपका डैशबोर्ड सभी सक्रिय RFQ और उत्पादन आदेशों का एक केंद्रीकृत दृश्य प्रदान करता है।" },
          { q: "क्या कोई निरीक्षण सेवा है?", a: "हाँ, हम विभिन्न उत्पादन चरणों में पेशेवर तीसरे पक्ष की निरीक्षण सेवाएं प्रदान करते हैं।" },
          { q: "मैं रिटर्न को कैसे संभालूँ?", a: "रिटर्न कारखाने के साथ बातचीत की गई विशिष्ट अनुबंध शर्तों के अनुसार संभाले जाते हैं।" },
          { q: " 'Verified' बैज क्या है?", a: "यह इंगित करता है कि कारखाने ने हमारे कठोर ऑन-साइट ऑडिट और दस्तावेज़ सत्यापन को पारित कर दिया है।" },
          { q: "क्या मैं अपना उत्पादन डेटा निर्यात कर सकता हूँ?", a: "हाँ, सभी रिपोर्ट और डेटा आपके डैशबोर्ड से CSV या PDF प्रारूप में निर्यात किए जा सकते हैं।" },
          { q: "मैं सहायता से कैसे संपर्क करूँ?", a: "आप चैट विजेट या support@oem-ai.com पर ईमेल के माध्यम से हमारी 24/7 सहायता टीम तक पहुँच सकते हैं।" }
        ]
      }
    }
  },
  "pt-BR": {
    translation: {
      header: { login: "Entrar", signup: "Cadastrar", marketplace: "Marketplace", factories: "Fábricas", howItWorks: "Como Funciona", dashboard: "Painel", rfq: "Enviar RFQ", production: "Produção" },
      hero: { badge: "Marketplace de Manufatura com IA", title: "Encontre as Melhores Fábricas do Mundo", subtitle: "", description: "A IA conecta marcas com fábricas verificadas em todo o mundo.", searchButton: "Buscar", searchPlaceholder: "Buscar fábricas..." },
      landing: {
        features: { matching: "Correspondência de Fábrica por IA", automation: "Automação de RFQ", tracking: "Rastreamento de Produção", logistics: "Logística Global", matchingDesc: "Nossa IA analisa seus arquivos de design e requisitos para encontrar a fábrica perfeita em segundos.", quality: "Qualidade Verificada", qualityDesc: "Cada fábrica em nossa rede é rigorosamente avaliada quanto a certificações, capacidade e padrões éticos.", realtime: "Rastreamento em Tempo Real", realtimeDesc: "Monitore sua linha de produção de qualquer lugar do mundo com atualizações ao vivo e relatórios de qualidade." },
        stats: { factories: "fábricas", countries: "países", rfqs: "RFQs processados" },
        categories: { title: "Categorias Populares", subtitle: "Redes de manufatura especializadas em todos os setores.", viewAll: "Ver Tudo", electronics: "Eletrônicos", apparel: "Vestuário", automotive: "Automotivo", medical: "Médico" },
        sourcing: { title: "Sourcing com IA", subtitle: "Feito para Velocidade." },
        footer: { desc: "O marketplace de manufatura com IA líder mundial. Conectando marcas modernas com redes globais de fábricas.", platform: "Plataforma", company: "Empresa", network: "Rede de Fábricas", pricing: "Preços", about: "Sobre Nós", careers: "Carreiras", contact: "Contato", privacy: "Política de Privacidade", rights: "© 2026 OEM AI Platform. Todos os direitos reservados." }
      },
      dashboard: { 
        title: "Painel", 
        activeRFQs: "RFQs Ativos", 
        productionOrders: "Pedidos de Produção", 
        avgLeadTime: "Tempo de Entrega Médio", 
        pendingQuotes: "Cotações Pendentes", 
        productionVolume: "Volume de Produção", 
        recentActivity: "Atividade Recente",
        last6Months: "Últimos 6 Meses",
        lastYear: "Último Ano",
        viewAll: "Ver Tudo",
        exploreMarketplace: "Explorar Marketplace",
        monthlyOutput: "Produção Mensal em Todas as Fábricas"
      },
      marketplace: { 
        title: "Marketplace", 
        searchPlaceholder: "Buscar fábricas, produtos ou indústrias...", 
        filters: "Filtros", 
        minOrder: "Pedido Mín.", 
        capacity: "Capacidade", 
        viewProfile: "Ver Perfil",
        categories: {
          electronics: "Eletrônicos",
          apparel: "Vestuário",
          cosmetics: "Cosméticos",
          automotive: "Automotivo",
          furniture: "Móveis",
          packaging: "Embalagem"
        }
      },
      faq: { 
        title: "Perguntas Frequentes", 
        bot: "Assistente de IA",
        welcome: "Olá! Eu sou seu assistente de IA. Aqui estão algumas perguntas comuns:",
        items: [
          { q: "O que é a plataforma OEM?", a: "Esta plataforma conecta compradores com fábricas em todo o mundo usando correspondência por IA." },
          { q: "Como solicitar fabricação OEM?", a: "Vá para a página de RFQ, preencha os detalhes do seu produto e nossa IA o conectará com as fábricas." },
          { q: "O que é MOQ?", a: "MOQ significa Quantidade Mínima de Pedido, que é a menor quantidade que uma fábrica está disposta a produzir." },
          { q: "Como pesquisar fábricas?", a: "Use a barra de pesquisa do Marketplace para filtrar por setor, país ou certificações." },
          { q: "É possível solicitar amostras?", a: "Sim, você pode solicitar amostras diretamente dos perfis das fábricas antes da produção em massa." },
          { q: "Como funciona a correspondência por IA?", a: "Nossa IA analisa seus arquivos de design, materiais e volume para encontrar fábricas com as capacidades exatas de correspondência." },
          { q: "Quais setores são suportados?", a: "Suportamos eletrônicos, vestuário, automotivo, dispositivos médicos, móveis e muito mais." },
          { q: "Como pago pelos pedidos?", a: "Suportamos transferências bancárias seguras, cartões de crédito e serviços de garantia para sua proteção." },
          { q: "Minha propriedade intelectual de design está protegida?", a: "Sim, todas as fábricas assinam NDAs rígidos e nossa plataforma usa armazenamento de arquivos criptografado." },
          { q: "Posso rastrear a produção em tempo real?", a: "Sim, as fábricas fornecem atualizações diárias, fotos e vídeos através do rastreador de produção." },
          { q: "Quais certificações as fábricas possuem?", a: "As fábricas são avaliadas quanto a ISO, CE, UL e várias certificações específicas do setor." },
          { q: "Como os custos de envio são calculados?", a: "Os custos são baseados no peso, volume, destino e método de envio escolhido (Aéreo/Marítimo)." },
          { q: "Qual é o tempo médio de entrega?", a: "Os tempos de entrega variam de acordo com o produto, normalmente variando de 15 a 45 dias após a aprovação da amostra." },
          { q: "Posso visitar a fábrica?", a: "Sim, podemos organizar visitas físicas ou fornecer tours virtuais em 360 graus das instalações." },
          { q: "Como vocês lidam com disputas de qualidade?", a: "Fornecemos serviços de mediação e relatórios de inspeção de terceiros para resolver quaisquer problemas." },
          { q: "Existem taxas de plataforma?", a: "O uso básico é gratuito. Cobramos uma pequena taxa de serviço em transações bem-sucedidas." },
          { q: "Posso usar meu próprio provedor de logística?", a: "Com certeza. Você pode optar por usar nossa logística integrada ou seu próprio parceiro preferencial." },
          { q: "Quais formatos de arquivo são aceitos para RFQs?", a: "Aceitamos PDF, STEP, DWG, AI e a maioria dos formatos de design industrial padrão." },
          { q: "Como me comunico com a fábrica?", a: "Use nosso sistema de chat integrado, que inclui tradução em tempo real para uma comunicação perfeita." },
          { q: "Existe um aplicativo móvel?", a: "Sim, nosso aplicativo está disponível para iOS e Android para gerenciamento em qualquer lugar." },
          { q: "O que é ODM vs OEM?", a: "OEM é fabricar seu design; ODM é escolher o design existente de uma fábrica para marcar como seu." },
          { q: "Como verifico a capacidade da fábrica?", a: "Os dados de capacidade são verificados por nossa equipe e atualizados mensalmente nos perfis das fábricas." },
          { q: "Posso obter uma cotação personalizada para pequenos lotes?", a: "Sim, muitas de nossas fábricas se especializam em manufatura flexível de pequenos lotes." },
          { q: "Quais são as condições de pagamento?", a: "As condições padrão são depósito de 30% e 70% antes do envio, mas isso pode ser negociado." },
          { q: "Como gerencio vários projetos?", a: "Seu painel fornece uma visão centralizada de todas as RFQs e pedidos de produção ativos." },
          { q: "Existe um serviço de inspeção?", a: "Sim, oferecemos serviços profissionais de inspeção de terceiros em vários estágios de produção." },
          { q: "Como lido com devoluções?", a: "As devoluções são tratadas de acordo com os termos contratuais específicos negociados com a fábrica." },
          { q: "O que é o selo 'Verificado'?", a: "Indica que a fábrica passou por nossa rigorosa auditoria no local e verificação de documentos." },
          { q: "Posso exportar meus dados de produção?", a: "Sim, todos os relatórios e dados podem ser exportados em formato CSV ou PDF a partir do seu painel." },
          { q: "Como entro em contato com o suporte?", a: "Você pode entrar em contato com nossa equipe de suporte 24 horas por dia, 7 dias por semana, através do widget de chat ou e-mail em support@oem-ai.com." }
        ]
      }
    }
  },
  id: {
    translation: {
      header: { login: "Masuk", signup: "Daftar", marketplace: "Marketplace", factories: "Pabrik", howItWorks: "Cara Kerja", dashboard: "Dasbor", rfq: "Kirim RFQ", production: "Produksi" },
      hero: { badge: "Marketplace Manufaktur Berbasis AI", title: "Temukan Pabrik Terbaik di Seluruh Dunia", subtitle: "", description: "AI menghubungkan merek dengan pabrik terverifikasi di seluruh dunia.", searchButton: "Cari", searchPlaceholder: "Cari pabrik..." },
      landing: {
        features: { matching: "Pencocokan Pabrik AI", automation: "Otomasi RFQ", tracking: "Pelacakan Produksi", logistics: "Logistik Global", matchingDesc: "AI kami menganalisis file desain dan persyaratan Anda untuk menemukan pabrik yang sempurna dalam hitungan detik.", quality: "Kualitas Terverifikasi", qualityDesc: "Setiap pabrik di jaringan kami diperiksa secara ketat untuk sertifikasi, kapasitas, dan standar etika.", realtime: "Pelacakan Real-time", realtimeDesc: "Pantau lini produksi Anda dari mana saja di dunia dengan pembaruan langsung dan laporan kualitas." },
        stats: { factories: "pabrik", countries: "negara", rfqs: "RFQ diproses" },
        categories: { title: "Kategori Populer", subtitle: "Jaringan manufaktur khusus di semua industri.", viewAll: "Lihat Semua", electronics: "Elektronik", apparel: "Pakaian", automotive: "Otomotif", medical: "Medis" },
        sourcing: { title: "Sourcing Berbasis AI", subtitle: "Dibangun untuk Kecepatan." },
        footer: { desc: "Marketplace manufaktur berbasis AI terkemuka di dunia. Menghubungkan merek modern dengan jaringan pabrik global.", platform: "Platform", company: "Perusahaan", network: "Jaringan Pabrik", pricing: "Harga", about: "Tentang Kami", careers: "Karir", contact: "Kontak", privacy: "Kebijakan Privasi", rights: "© 2026 OEM AI Platform. Seluruh hak cipta dilindungi undang-undang." }
      },
      dashboard: { 
        title: "Dasbor", 
        activeRFQs: "RFQ Aktif", 
        productionOrders: "Pesanan Produksi", 
        avgLeadTime: "Rata-rata Waktu Tunggu", 
        pendingQuotes: "Penawaran Tertunda", 
        productionVolume: "Volume Produksi", 
        recentActivity: "Aktivitas Terbaru",
        last6Months: "6 Bulan Terakhir",
        lastYear: "Tahun Terakhir",
        viewAll: "Lihat Semua",
        exploreMarketplace: "Jelajahi Marketplace",
        monthlyOutput: "Output Bulanan di Semua Pabrik"
      },
      marketplace: { 
        title: "Marketplace", 
        searchPlaceholder: "Cari pabrik, produk, atau industri...", 
        filters: "Filter", 
        minOrder: "Min. Order", 
        capacity: "Kapasitas", 
        viewProfile: "Lihat Profil",
        categories: {
          electronics: "Elektronik",
          apparel: "Pakaian",
          cosmetics: "Kosmetik",
          automotive: "Otomotif",
          furniture: "Furnitur",
          packaging: "Pengemasan"
        }
      },
      faq: { 
        title: "Pertanyaan yang Sering Diajukan", 
        bot: "Asisten AI",
        welcome: "Halo! Saya asisten AI Anda. Berikut adalah beberapa pertanyaan umum:",
        items: [
          { q: "Apa itu platform OEM?", a: "Platform ini menghubungkan pembeli dengan pabrik di seluruh dunia menggunakan pencocokan AI." },
          { q: "Bagaimana cara meminta manufaktur OEM?", a: "Buka halaman RFQ, isi detail produk Anda, dan AI kami akan mencocokkan Anda dengan pabrik." },
          { q: "Apa itu MOQ?", a: "MOQ adalah singkatan dari Minimum Order Quantity, yaitu jumlah terkecil yang bersedia diproduksi oleh pabrik." },
          { q: "Bagaimana cara mencari pabrik?", a: "Gunakan bilah pencarian Marketplace untuk memfilter berdasarkan industri, negara, atau sertifikasi." },
          { q: "Apakah permintaan sampel dimungkinkan?", a: "Ya, Anda dapat meminta sampel langsung dari profil pabrik sebelum produksi massal." },
          { q: "Bagaimana cara kerja pencocokan AI?", a: "AI kami menganalisis file desain, bahan, dan volume Anda untuk menemukan pabrik dengan kemampuan pencocokan yang tepat." },
          { q: "Industri apa saja yang didukung?", a: "Kami mendukung elektronik, pakaian, otomotif, perangkat medis, furnitur, dan banyak lagi." },
          { q: "Bagaimana cara membayar pesanan?", a: "Kami mendukung transfer bank yang aman, kartu kredit, dan layanan escrow untuk perlindungan Anda." },
          { q: "Apakah IP desain saya terlindungi?", a: "Ya, semua pabrik menandatangani NDA yang ketat, dan platform kami menggunakan penyimpanan file terenkripsi." },
          { q: "Dapatkah saya melacak produksi secara real-time?", a: "Ya, pabrik memberikan pembaruan harian, foto, dan video melalui pelacak produksi." },
          { q: "Sertifikasi apa yang dimiliki pabrik?", a: "Pabrik diperiksa untuk sertifikasi ISO, CE, UL, dan berbagai sertifikasi khusus industri." },
          { q: "Bagaimana biaya pengiriman dihitung?", a: "Biaya didasarkan pada berat, volume, tujuan, dan metode pengiriman yang dipilih (Udara/Laut)." },
          { q: "Berapa rata-rata waktu tunggu?", a: "Waktu tunggu bervariasi menurut produk, biasanya berkisar antara 15 hingga 45 hari setelah persetujuan sampel." },
          { q: "Dapatkah saya mengunjungi pabrik?", a: "Ya, kami dapat mengatur kunjungan fisik atau menyediakan tur virtual 360 derajat dari fasilitas tersebut." },
          { q: "Bagaimana Anda menangani perselisihan kualitas?", a: "Kami menyediakan layanan mediasi dan laporan inspeksi pihak ketiga untuk menyelesaikan masalah apa pun." },
          { q: "Apakah ada biaya platform?", a: "Penggunaan dasar gratis. Kami mengenakan sedikit biaya layanan pada transaksi yang berhasil." },
          { q: "Dapatkah saya menggunakan penyedia logistik saya sendiri?", a: "Tentu saja. Anda dapat memilih untuk menggunakan logistik terintegrasi kami atau mitra pilihan Anda sendiri." },
          { q: "Format file apa yang diterima untuk RFQ?", a: "Kami menerima PDF, STEP, DWG, AI, dan sebagian besar format desain industri standar." },
          { q: "Bagaimana cara saya berkomunikasi dengan pabrik?", a: "Gunakan sistem obrolan bawaan kami yang mencakup terjemahan real-time untuk komunikasi yang lancar." },
          { q: "Apakah ada aplikasi seluler?", a: "Ya, aplikasi kami tersedia di iOS dan Android untuk manajemen saat bepergian." },
          { q: "Apa itu ODM vs OEM?", a: "OEM adalah memproduksi desain Anda; ODM adalah memilih desain pabrik yang sudah ada untuk dibrand sebagai milik Anda." },
          { q: "Bagaimana cara memverifikasi kapasitas pabrik?", a: "Data kapasitas diverifikasi oleh tim kami dan diperbarui setiap bulan pada profil pabrik." },
          { q: "Dapatkah saya mendapatkan penawaran khusus untuk batch kecil?", a: "Ya, banyak pabrik kami berspesialisasi dalam manufaktur fleksibel batch kecil." },
          { q: "Apa syarat pembayarannya?", a: "Syarat standar adalah deposit 30% dan 70% sebelum pengiriman, tetapi ini dapat dinegosiasikan." },
          { q: "Bagaimana cara mengelola banyak proyek?", a: "Dasbor Anda memberikan tampilan terpusat dari semua RFQ dan pesanan produksi yang aktif." },
          { q: "Apakah ada layanan inspeksi?", a: "Ya, kami menawarkan layanan inspeksi pihak ketiga yang profesional pada berbagai tahap produksi." },
          { q: "Bagaimana cara menangani pengembalian?", a: "Pengembalian ditangani sesuai dengan persyaratan kontrak khusus yang dinegosiasikan dengan pabrik." },
          { q: "Apa itu lencana 'Terverifikasi'?", a: "Ini menunjukkan pabrik telah lulus audit di tempat dan verifikasi dokumen kami yang ketat." },
          { q: "Dapatkah saya mengekspor data produksi saya?", a: "Ya, semua laporan dan data dapat diekspor dalam format CSV atau PDF dari dasbor Anda." },
          { q: "Bagaimana cara menghubungi dukungan?", a: "Anda dapat menghubungi tim dukungan 24/7 kami melalui widget obrolan atau email di support@oem-ai.com." }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
