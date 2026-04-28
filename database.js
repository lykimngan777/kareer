/**
 * Kareer Central Database
 * Contains all career definitions, RIASEC mappings, and detailed JD information.
 * Refined with high-fidelity professional data (TopCV/LinkedIn standards).
 */

const careerDatabase = [
    {
        name: "Giám đốc Công nghệ (CTO) / Kiến trúc sư trưởng",
        code: "CTO",
        traits: ['investigative', 'realistic', 'enterprising'],
        description: "Kiến tạo nền tảng sức mạnh kỹ thuật cho toàn bộ doanh nghiệp.",
        salary: "85.000.000 - 150.000.000"
    },
    {
        name: "Trưởng phòng Phân tích dữ liệu chiến lược",
        code: "HDA",
        traits: ['investigative', 'conventional', 'realistic'],
        description: "Biến dữ liệu thành 'vũ khí' chiến lược để ra quyết định dựa trên sự thật.",
        salary: "45.000.000 - 90.000.000"
    },
    {
        name: "Giám đốc Trải nghiệm (CXO) / Giám đốc Nghệ thuật",
        code: "CXO",
        traits: ['artistic', 'enterprising', 'social'],
        description: "Định hình trải nghiệm khách hàng và thẩm mỹ sản phẩm một cách toàn diện.",
        salary: "50.000.000 - 110.000.000"
    },
    {
        name: "Giám đốc Quản lý Dự án & Vận hành IT",
        code: "ITPM",
        traits: ['conventional', 'realistic', 'enterprising'],
        description: "Đảm bảo thực thi dự án hoàn hảo và ổn định hệ thống vận hành công nghệ."
    },
    {
        name: "Giám đốc Marketing số",
        code: "DMO",
        traits: ['enterprising', 'artistic', 'investigative'],
        description: "Thống lĩnh thị trường số và tối ưu hóa chuyển đổi thông qua dữ liệu và công nghệ."
    },
    {
        name: "Giám đốc Tài chính (CFO)",
        code: "CFO",
        traits: ['conventional', 'enterprising', 'investigative'],
        description: "Đảm bảo sự thịnh vượng và an toàn tài chính tuyệt đối cho doanh nghiệp."
    },
    {
        name: "Giám đốc Nhân sự (CHRO)",
        code: "CHRO",
        traits: ['social', 'enterprising', 'conventional'],
        description: "Kiến tạo văn hóa chiến thắng và quản trị tài sản con người chiến lược."
    },
    {
        name: "Kiến trúc sư trưởng / Chủ trì thiết kế cấp cao",
        code: "ARC",
        traits: ['artistic', 'investigative', 'realistic'],
        description: "Kiến tạo biểu tượng kiến trúc bền vững giữa nghệ thuật và kỹ thuật."
    },
    {
        name: "Giám đốc Y khoa / Chuyên gia Tư vấn Cấp cao",
        code: "MED",
        traits: ['investigative', 'social', 'realistic'],
        description: "Nâng tầm chất lượng y tế qua chuyên môn y học xuất sắc và quản trị hiện đại."
    },
    {
        name: "Đối tác Quản lý Tài sản Cấp cao (Wealth Manager)",
        code: "WM",
        traits: ['enterprising', 'social', 'conventional'],
        description: "Bảo tồn và gia tăng sự thịnh vượng bền vững cho khách hàng tinh hoa."
    },
    {
        name: "Chuyên gia Tư vấn Chiến lược Sức khỏe Tinh thần",
        code: "MHC",
        traits: ['social', 'investigative', 'artistic'],
        description: "Thấu hiểu và chữa lành, giúp cá nhân và tổ chức hạnh phúc hơn."
    },
    {
        name: "Trưởng phòng Kỹ thuật / Chuyên gia Tư vấn Công nghiệp",
        code: "ENG",
        traits: ['realistic', 'investigative', 'conventional'],
        description: "Tối ưu hóa sản xuất qua kỹ thuật chính xác và cải tiến không ngừng."
    },
    {
        name: "Giám đốc Kiểm toán / Đối tác (Partner)",
        code: "AUD",
        traits: ['conventional', 'enterprising', 'investigative'],
        description: "Gìn giữ minh bạch và niềm tin thị trường qua chuẩn mực đạo đức."
    },
    {
        name: "Giám đốc Truyền thông & Thương hiệu",
        code: "CBO",
        traits: ['artistic', 'social', 'enterprising'],
        description: "Xây dựng và bảo vệ 'linh hồn' của doanh nghiệp trong mắt cộng đồng."
    },
    {
        name: "Chuyên gia Nghiên cứu AI / Giám đốc Khoa học",
        code: "AIRES",
        traits: ['investigative', 'realistic', 'conventional'],
        description: "Định hình tương lai thông qua trí tuệ nhân tạo tiên phong."
    },
    {
        name: "Giám đốc Chuỗi cung ứng (CSO)",
        code: "CSO",
        traits: ['realistic', 'investigative', 'conventional'],
        description: "Tối ưu hóa 'huyết mạch' vận hành, đảm bảo dòng chảy hàng hóa thông suốt."
    },
    {
        name: "Giám đốc Sáng tạo / Chủ sở hữu thương hiệu thời trang",
        code: "CD",
        traits: ['artistic', 'enterprising', 'realistic'],
        description: "Dẫn dắt xu hướng và khẳng định bản sắc qua những tuyệt tác thời trang."
    },
    {
        name: "Chuyên gia Ngôn ngữ / Giám đốc Học thuật",
        code: "LAN",
        traits: ['social', 'investigative', 'artistic'],
        description: "Khơi nguồn cảm hứng và xây dựng nền tảng tri thức ngôn ngữ bền vững."
    },
    {
        name: "Giám đốc Pháp chế / Luật sư điều hành",
        code: "LEG",
        traits: ['social', 'investigative', 'conventional'],
        description: "Bảo vệ sự thượng tôn pháp luật và quản trị rủi rỏ pháp lý doanh nghiệp."
    },
    {
        name: "Chủ tịch Hội đồng Quản trị / Tổng Giám đốc (CEO)",
        code: "CEO",
        traits: ['enterprising', 'social', 'investigative'],
        description: "Dẫn dắt doanh nghiệp tạo ra giá trị bền vững cho cổ đông và xã hội."
    },
    {
        name: "Giám đốc Điều hành Khách sạn / Khu nghỉ dưỡng",
        code: "GM",
        traits: ['enterprising', 'social', 'realistic'],
        description: "Kiến tạo kỳ nghỉ hoàn hảo và trải nghiệm dịch vụ 5 sao đỉnh cao."
    },
    {
        name: "Trưởng khoa học dữ liệu (Chief Data Scientist)",
        code: "CDS",
        traits: ['investigative', 'realistic', 'conventional'],
        description: "Mở khóa sức mạnh dữ liệu để tạo ra đột phá kinh doanh cách mạng."
    },
    {
        name: "Chuyên viên Tư vấn & Quản trị Học vụ",
        code: "EDU",
        traits: ['social', 'enterprising', 'conventional'],
        description: "Đảm bảo mỗi học viên đều có lộ trình học tập tối ưu và trải nghiệm giáo dục tận tâm."
    }
];

const specializedData = {
    'Giám đốc Công nghệ (CTO) / Kiến trúc sư trưởng': {
        mission: "Kiến tạo nền tảng sức mạnh kỹ thuật và dẫn dắt cuộc cách mạng số cho toàn bộ doanh nghiệp.",
        responsibilities: [
            "Hoạch định và thực thi chiến lược công nghệ (Technology Roadmap) trung và dài hạn, đảm bảo sự đồng bộ với mục tiêu kinh doanh của tập đoàn.",
            "Trực tiếp thẩm định và phê duyệt kiến trúc hệ thống (System Architecture), lựa chọn Stack công nghệ tối ưu cho các dự án trọng điểm.",
            "Quản lý ngân sách công nghệ hàng năm, tối ưu hóa chi phí hạ tầng Cloud (AWS/Azure/GCP) và tài nguyên IT.",
            "Thiết lập quy chuẩn Engineering xuất sắc (Coding Standards, CI/CD, Quality Gate, Security Best Practices).",
            "Giám sát an ninh mạng, bảo mật dữ liệu và quản trị rủi ro công nghệ cấp tập đoàn theo các tiêu chuẩn quốc tế (ISO 27001).",
            "Xây dựng văn hóa đổi mới sáng tạo, dẫn dắt và phát triển đội ngũ kỹ sư chất lượng cao từ 50-200 nhân sự."
        ],
        dailyTasks: [
            "Review kiến trúc và sơ đồ hệ thống của các tính năng mới quan trọng trong sản phẩm.",
            "Chủ trì các buổi họp Tech-Sync với các Team Lead để giải quyết các rào cản kỹ thuật và 'bottleneck' của hệ thống.",
            "Nghiên cứu và thẩm định các công nghệ mới (AI, Blockchain, Web3) dự kiến ứng dụng vào hệ sinh thái sản phẩm.",
            "Trao đổi trực tiếp với Hội đồng quản trị về lộ trình phát triển, ngân sách và kế hoạch thu hút nhân tài công nghệ.",
            "Phỏng vấn trực tiếp và đánh giá năng lực các vị trí kỹ thuật cấp cao (Staff Engineer, Tech Lead, DevOps Lead)."
        ],
        requirements: {
            degree: "Thạc sĩ/Đại học trở lên - Chuyên ngành: Khoa học máy tính, Kỹ thuật phần mềm hoặc Hệ thống thông tin.",
            professional: "Tối thiểu 12-15 năm kinh nghiệm thực chiến trong ngành IT, trong đó có ít nhất 5 năm ở vị trí quản lý cấp cao hoặc Solution Architect.",
            itSkills: "Am hiểu sâu về Microservices architecture, AI/ML Frameworks, Cloud Native (Docker/Kubernetes), Data Security.",
            attitude: "Tư duy hệ thống sắc bén, khả năng lãnh đạo truyền cảm hứng, tính chính trực và quyết đoán cao."
        },
        kpis: ["Uptime hệ thống > 99.99%", "Thời gian phản hồi trung bình (Latency) < 200ms", "Tỷ lệ tối ưu hóa ngân sách IT hàng năm > 15%", "Tốc độ bàn giao tính năng (Time-to-market)"],
        traits: ['investigative', 'realistic', 'enterprising'],
        courses: {
            level1: [{ n: "System Architecture & Design Patterns", p: "Coursera", url: "https://www.coursera.org/learn/software-architecture" }],
            level2: [{ n: "AWS Certified Solutions Architect", p: "Amazon", url: "https://aws.amazon.com/certification/" }],
            level3: [{ n: "Digital Transformation Leadership", p: "BCG / Coursera", url: "https://www.coursera.org/specializations/bcg-digital-transformation" }],
            level4: [{ n: "CTO Program: Technology Strategy", p: "Wharton", url: "https://executiveeducation.wharton.upenn.edu/" }]
        }
    },
    'Giám đốc Tài chính (CFO)': {
        mission: "Đảm bảo sự thịnh vượng, minh bạch và an toàn tài chính tuyệt đối cho doanh nghiệp thông qua quản trị chiến lược.",
        responsibilities: [
            "Quản lý dòng tiền tổng thể và hoạch định chiến lược cấu trúc vốn dài hạn cho doanh nghiệp.",
            "Lập kế hoạch ngân sách hàng năm và kiểm soát chặt chẽ chi phí vận hành (OPEX) và chi phí đầu tư (CAPEX).",
            "Phân tích báo cáo quản trị chuyên sâu, dự báo các rủi ro tài chính và tham mưu cho Ban giám đốc về các quyết định đầu tư.",
            "Dẫn dắt các thương vụ huy động vốn, quan hệ cổ đông, IPO hoặc các dự án sáp nhập và mua lại (M&A).",
            "Giám sát hệ thống kế toán, kiểm toán nội bộ và đảm bảo tuân thủ tuyệt đối các quy định về thuế và chuẩn mực tài chính."
        ],
        dailyTasks: [
            "Phê duyệt các khoản chi lớn và kiểm soát biến động dòng tiền thực tế hàng ngày.",
            "Làm việc trực tiếp với các ngân hàng, quỹ đầu tư và các tổ chức tín dụng về các kế hoạch tài trợ dự án.",
            "Review và ký duyệt các báo cáo tài chính nhanh từ bộ phận kế toán và kiểm soát nội bộ.",
            "Phân tích các biến động của thị trường tài chính toàn cầu ảnh hưởng đến tài sản và nợ của doanh nghiệp.",
            "Họp chiến lược với CEO và Ban điều hành về tính khả thi tài chính của các dự án mở rộng kinh doanh mới."
        ],
        requirements: {
            degree: "Thạc sĩ trở lên - Chuyên ngành: Tài chính, Kế toán, Kiểm toán hoặc Quản trị kinh doanh.",
            professional: "Trên 12 năm kinh nghiệm trong lĩnh vực tài chính, có chứng chỉ chuyên môn quốc tế như CPA, CFA hoặc ACCA.",
            itSkills: "Thành thạo hệ thống ERP (SAP, Oracle, Microsoft Dynamics), Power BI, các công cụ phân tích tài chính và Excel nâng cao.",
            attitude: "Cẩn trọng tuyệt đối, Chính trực, Tư duy chiến lược và khả năng bảo mật thông tin cao."
        },
        kpis: ["Chỉ số ROE (Lợi nhuận trên vốn chủ sở hữu)", "Độ chính xác của dự báo tài chính > 95%", "Chỉ số thanh khoản và an toàn nợ", "Giá trị vốn hóa doanh nghiệp"],
        traits: ['conventional', 'enterprising', 'investigative'],
        courses: {
            level1: [{ n: "Chứng chỉ Kế toán trưởng", p: "Bộ Tài chính VN", url: "#" }],
            level2: [{ n: "Strategic Financial Management", p: "CPA Australia / ACCA", url: "https://www.accaglobal.com/" }],
            level3: [{ n: "CFA Program Level II/III", p: "CFA Institute", url: "https://www.cfainstitute.org/" }],
            level4: [{ n: "Executive CFO Program", p: "Columbia Business School", url: "https://executiveeducation.gsb.columbia.edu/" }]
        }
    },
    'Giám đốc Trải nghiệm (CXO) / Giám đốc Nghệ thuật': {
        mission: "Kiến tạo những trải nghiệm khách hàng đẳng cấp, thấu cảm và gắn kết cảm xúc mạnh mẽ thông qua thiết kế và nghệ thuật.",
        responsibilities: [
            "Xây dựng và định hướng ngôn ngữ thiết kế (Design System) đồng nhất trên tất cả các điểm chạm thương hiệu.",
            "Nghiên cứu và phân tích hành trình khách hàng (Customer Journey Mapping) để tìm ra các cơ hội đột phá trải nghiệm.",
            "Phê duyệt các Concept sáng tạo, Key Visuals và chiến lược hình ảnh cho các chiến dịch truyền thông lớn.",
            "Dẫn dắt đội ngũ Product Designers và UX Researchers thực hiện các dự án cải tiến sản phẩm số.",
            "Ứng dụng tâm lý học hành vi và dữ liệu người dùng để cá nhân hóa trải nghiệm và tăng cường sự trung thành của khách hàng."
        ],
        dailyTasks: [
            "Review và đánh giá các bản thiết kế UI/UX mới nhất của các sản phẩm số (Web/App).",
            "Chủ trì các buổi họp Brainstorming với Team Sáng tạo để tìm kiếm ý tưởng cho các chiến dịch ra mắt sản phẩm.",
            "Phân tích các phản hồi (Feedback) và dữ liệu trải nghiệm khách hàng để điều chỉnh hướng sáng tạo.",
            "Giám sát việc triển khai nhận diện thương hiệu tại các cửa hàng vật lý và không gian số.",
            "Nghiên cứu các xu hướng nghệ thuật, thiết kế và công nghệ tương tác mới nhất trên thế giới."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Thiết kế đồ họa, Mỹ thuật công nghiệp, Kiến trúc hoặc Tâm lý học hành vi.",
            professional: "Sở hữu Portfolio ấn tượng với các dự án lớn, trên 10 năm kinh nghiệm trong ngành sáng tạo và quản lý nghệ thuật.",
            itSkills: "Thành thạo Adobe Creative Suite, Figma, các công cụ Prototyping và am hiểu về HTML/CSS cơ bản.",
            attitude: "Gu thẩm mỹ tinh tế, khả năng thấu cảm cao (Empathy), tư duy đổi mới và chú trọng đến từng chi tiết nhỏ nhất."
        },
        kpis: ["Chỉ số hài lòng khách hàng (NPS)", "Tỷ lệ giữ chân người dùng (Retention Rate)", "Số lượng giải thưởng sáng tạo uy tín", "Hiệu quả chuyển đổi từ thiết kế"],
        traits: ['artistic', 'enterprising', 'social'],
        courses: {
            level1: [{ n: "Google UX Design Professional", p: "Google", url: "https://www.coursera.org/professional-certificates/google-ux-design" }],
            level2: [{ n: "Human-Computer Interaction", p: "Interaction Design Foundation", url: "https://www.interaction-design.org/" }],
            level3: [{ n: "Design Leadership", p: "InVision", url: "https://www.designbetter.co/design-leadership" }],
            level4: [{ n: "Master of Design Methods", p: "IIT Institute of Design", url: "https://id.iit.edu/" }]
        }
    },
    'Giám đốc Marketing số': {
        mission: "Thống lĩnh thị trường số và tối ưu hóa hiệu quả kinh doanh thông qua sự kết hợp giữa dữ liệu, công nghệ và sự sáng tạo.",
        responsibilities: [
            "Hoạch định chiến lược Performance Marketing đa kênh (Google, Meta, TikTok, Affiliate) để tăng trưởng người dùng.",
            "Quản lý và tối ưu hóa ngân sách Marketing số lên đến hàng chục tỷ đồng mỗi tháng.",
            "Xây dựng và vận hành hệ thống đo lường hiệu quả quảng cáo (Tracking, Attribution & Analytics System).",
            "Thử nghiệm và ứng dụng các công nghệ MarTech tiên phong như AI Automation, CRM Integration, Marketing Automation.",
            "Phân tích đối thủ cạnh tranh và nắm bắt các xu hướng công nghệ số để điều chỉnh chiến thuật marketing kịp thời."
        ],
        dailyTasks: [
            "Theo dõi và tối ưu hóa các chỉ số hiệu suất quảng cáo (ROAS, CAC, CTR) của các chiến dịch đang chạy.",
            "Làm việc với Team Content và Creative để định hướng các định dạng quảng cáo sáng tạo và thu hút.",
            "Phân tích sâu báo cáo dữ liệu từ Google Analytics 4, CRM và các công cụ Social Listening.",
            "Họp định kỳ với các Agency đối tác và nhà cung cấp nền tảng (Google/Facebook) về kế hoạch truyền thông.",
            "Kiểm tra và phê duyệt các kịch bản Automation Marketing và luồng chăm sóc khách hàng tự động."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Marketing, Thương mại điện tử, Truyền thông đa phương tiện.",
            professional: "Trên 8-10 năm kinh nghiệm thực chiến trong lĩnh vực Digital Marketing, có các chứng chỉ chuyên sâu của Google/Meta.",
            itSkills: "Am hiểu sâu về Google Ads, Facebook Ads, GA4, GTM, SQL cơ bản và các nền tảng Marketing Automation.",
            attitude: "Nhạy bén với số liệu, Tư duy sáng tạo thực tiễn, Quyết đoán và luôn hướng tới kết quả (Result-oriented)."
        },
        kpis: ["Chi phí thu hút khách hàng (CAC)", "Lợi nhuận trên chi tiêu quảng cáo (ROAS)", "Tốc độ tăng trưởng Traffic & Conversion", "Chỉ số yêu thích thương hiệu số"],
        traits: ['enterprising', 'artistic', 'investigative'],
        courses: {
            level1: [{ n: "Google Digital Garage: Fundamentals", p: "Google", url: "https://learndigital.withgoogle.com/" }],
            level2: [{ n: "Meta Marketing Analytics", p: "Meta", url: "https://www.coursera.org/professional-certificates/meta-marketing-analytics" }],
            level3: [{ n: "Growth Strategy Specialization", p: "Wharton", url: "https://www.coursera.org/specializations/growth-strategy" }],
            level4: [{ n: "Chief Marketing Officer Program", p: "Columbia", url: "https://executiveeducation.gsb.columbia.edu/" }]
        }
    },
    'Chuyên viên Tư vấn & Quản trị Học vụ': {
        mission: "Kiến tạo hành trình học tập hạnh phúc và hiệu quả cho học viên thông qua sự tận tâm và quản trị giáo dục hiện đại.",
        responsibilities: [
            "Tiếp cận và khai thác dữ liệu khách hàng tiềm năng thông qua đa dạng các kênh truyền thông số và trực tiếp.",
            "Duy trì mối quan hệ bền chặt với học viên và phụ huynh, xây dựng mạng lưới 'khách hàng giới thiệu' bền vững.",
            "Tư vấn chuyên sâu về các lộ trình học tập, chứng chỉ và sản phẩm giáo dục phù hợp nhất với trình độ và mục tiêu của học viên.",
            "Trực tiếp thực hiện nghiệp vụ thu học phí, quản lý công nợ và lập báo cáo tài chính học vụ hàng ngày.",
            "Đảm bảo quy trình đón trả và an toàn cho học viên tại trung tâm, nâng cao sự an tâm tuyệt đối cho phụ huynh.",
            "Số hóa và quản lý hồ sơ học viên khoa học trên hệ thống CRM, theo dõi sát sao tiến độ học tập và rèn luyện."
        ],
        dailyTasks: [
            "Thực hiện các cuộc gọi tư vấn tâm lý, hướng nghiệp và chốt lịch hẹn trải nghiệm cho khách hàng mới.",
            "Trực tiếp đón tiếp, giải đáp thắc mắc và xử lý các yêu cầu của phụ huynh tại sảnh trung tâm.",
            "Cập nhật nhật ký học tập, điểm số và nhận xét của giáo viên lên ứng dụng quản lý học vụ.",
            "Xử lý các giao dịch tài chính, xuất hóa đơn điện tử và đối soát quỹ cuối ngày.",
            "Chuẩn bị học liệu, thiết bị giảng dạy và hỗ trợ giáo viên nước ngoài/Việt Nam trong các buổi học."
        ],
        requirements: {
            degree: "Đại học - Chuyên ngành: Quản trị kinh doanh, Kinh tế, Kế toán, Sư phạm hoặc Ngôn ngữ Anh.",
            professional: "Kỹ năng giao tiếp và thuyết phục xuất sắc, am hiểu về tâm lý giáo dục và các khung năng lực quốc tế.",
            itSkills: "Thành thạo MS Office, Google Workspace, các công cụ thiết kế cơ bản (Canva) và hệ thống CRM.",
            attitude: "Trung thực, nhanh nhẹn, tinh thần phục vụ cao, sáng tạo trong cách giải quyết vấn đề và có trách nhiệm."
        },
        kpis: ["Tỷ lệ chuyển đổi học viên mới", "Tỷ lệ tái phí (Retention Rate) > 80%", "Mức độ hài lòng của phụ huynh (CSAT)", "Độ chính xác của báo cáo tài chính"],
        traits: ['social', 'enterprising', 'conventional']
    },
    'Trưởng phòng Phân tích dữ liệu chiến lược': {
        mission: "Biến dữ liệu thành 'vũ khí' chiến lược để ra quyết định dựa trên sự thật và tối ưu hóa lợi thế cạnh tranh.",
        responsibilities: [
            "Thiết lập hệ thống Data Warehouse và BI Dashboard toàn doanh nghiệp, cung cấp cái nhìn 360 độ về hoạt động kinh doanh.",
            "Phân tích hành vi khách hàng chuyên sâu và dự báo xu hướng thị trường thông qua các mô hình thống kê.",
            "Xây dựng báo cáo phân tích rủi ro vận hành và đề xuất giải pháp tối ưu hóa lợi nhuận.",
            "Lãnh đạo đội ngũ Data Analysts cung cấp Insights kịp thời cho các phòng ban (Marketing, Sales, Finance).",
            "Phối hợp với bộ phận IT đảm bảo tính toàn vẹn, chất lượng và bảo mật dữ liệu nguồn."
        ],
        dailyTasks: [
            "Viết truy vấn SQL phức tạp để trích xuất và làm sạch dữ liệu cho các báo cáo phân tích khẩn.",
            "Cập nhật, kiểm tra và bảo trì tính chính xác của các Dashboard tự động (Power BI/Tableau).",
            "Họp với các trưởng phòng ban để trình bày các Insights từ dữ liệu và tư vấn hướng giải quyết.",
            "Xây dựng và tinh chỉnh các mô hình dự báo (Forecasting Models) cho doanh số tháng và quý tới.",
            "Nghiên cứu các kỹ thuật khai phá dữ liệu (Data Mining) mới để tìm kiếm các cơ hội kinh doanh tiềm ẩn."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Khoa học dữ liệu, Thống kê, Toán kinh tế hoặc Hệ thống thông tin.",
            professional: "6-8 năm kinh nghiệm trong lĩnh vực phân tích dữ liệu, am hiểu sâu về quy trình khai phá dữ liệu và trực quan hóa.",
            itSkills: "Thành thạo SQL, Python/R, Tableau/Power BI, BigQuery và các công cụ Cloud Data.",
            attitude: "Tư duy phản biện sắc bén, chú trọng đến chi tiết, tinh thần khách quan và trung thực với dữ liệu."
        },
        kpis: ["Độ chính xác của dự báo doanh thu", "Tỷ lệ Insights được ứng dụng vào thực tế kinh doanh", "Thời gian cung cấp báo cáo định kỳ", "Chất lượng làm sạch dữ liệu"],
        traits: ['investigative', 'conventional', 'realistic'],
        courses: {
            level1: [{ n: "SQL for Data Science", p: "Coursera / UC Davis", url: "https://www.coursera.org/learn/sql-for-data-science" }],
            level2: [{ n: "Google Data Analytics", p: "Google", url: "https://www.coursera.org/professional-certificates/google-data-analytics" }],
            level3: [{ n: "Business Analytics Specialization", p: "Wharton", url: "https://www.coursera.org/specializations/business-analytics" }],
            level4: [{ n: "Data Science for Business Strategy", p: "Harvard", url: "https://online.hbs.edu/courses/data-science-ready/" }]
        }
    },
    'Đối tác Quản lý Tài sản Cấp cao (Wealth Manager)': {
        mission: "Bảo tồn và gia tăng sự thịnh vượng bền vững cho khách hàng tinh hoa thông qua quản trị tài sản chuyên nghiệp.",
        responsibilities: [
            "Xây dựng danh mục đầu tư cá nhân hóa (Portfolio Management) dựa trên mục tiêu tài chính và khẩu vị rủi ro của khách hàng.",
            "Phân tích biến động thị trường tài chính, bất động sản và các kênh đầu tư thay thế toàn cầu.",
            "Tư vấn cấu trúc tài sản phức tạp, hoạch định thừa kế và tối ưu hóa nghĩa vụ thuế cho gia đình khách hàng.",
            "Duy trì và phát triển mối quan hệ chiến lược với các quỹ đầu tư, ngân hàng và các định chế tài chính quốc tế.",
            "Theo dõi sát sao hiệu suất danh mục và chủ động điều chỉnh chiến thuật đầu tư theo diễn biến thị trường."
        ],
        dailyTasks: [
            "Gặp gỡ trực tiếp các khách hàng VIP để cập nhật tình hình tài sản và điều chỉnh mục tiêu đầu tư.",
            "Phân tích các chỉ số vĩ mô (Lạm phát, Lãi suất, Tỷ giá) ảnh hưởng đến danh mục của khách hàng.",
            "Thẩm định các cơ hội đầu tư mới (Private Equity, Bonds, Gold) để đa dạng hóa danh mục.",
            "Phối hợp với chuyên gia pháp lý và thuế để xây dựng các giải pháp chuyển giao tài sản thế hệ.",
            "Tham dự các hội thảo tài chính cao cấp để mở rộng mạng lưới khách hàng tiềm năng."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Tài chính, Ngân hàng, Quản trị kinh doanh.",
            professional: "Trên 10 năm kinh nghiệm trong lĩnh vực Private Banking hoặc Quản lý quỹ, chứng chỉ quốc tế CFA hoặc CFP.",
            itSkills: "Sử dụng thành thạo Bloomberg Terminal, Morningstar và các công cụ phân tích tài sản chuyên sâu.",
            attitude: "Chính trực tuyệt đối, khả năng bảo mật thông tin, phong thái chuyên nghiệp và giao tiếp tinh tế."
        },
        kpis: ["Tốc độ tăng trưởng tài sản quản lý (AUM)", "Lợi nhuận danh mục so với Benchmark", "Tỷ lệ giữ chân khách hàng VIP", "Số lượng khách hàng mới từ giới thiệu"],
        traits: ['enterprising', 'social', 'conventional']
    },
    'Giám đốc Truyền thông & Thương hiệu': {
        mission: "Xây dựng, nuôi dưỡng và bảo vệ uy tín thương hiệu như một tài sản vô hình vô giá của doanh nghiệp.",
        responsibilities: [
            "Hoạch định chiến lược thương hiệu toàn cầu, định vị giá trị cốt lõi và xây dựng câu chuyện thương hiệu (Storytelling).",
            "Quản lý quan hệ báo chí (PR), truyền thông chính phủ và chủ trì xử lý các cuộc khủng hoảng truyền thông.",
            "Giám sát việc sản xuất và phân phối nội dung sáng tạo trên đa nền tảng mạng xã hội và truyền thông truyền thống.",
            "Xây dựng và duy trì mối quan hệ bền chặt với các cổ đông (Stakeholders), Influencers và giới truyền thông.",
            "Đo lường các chỉ số sức khỏe thương hiệu (Brand Health) và định hướng các hoạt động trách nhiệm xã hội (CSR)."
        ],
        dailyTasks: [
            "Phê duyệt các thông cáo báo chí, kịch bản sự kiện và nội dung truyền thông quan trọng của tập đoàn.",
            "Làm việc trực tiếp với các tổng biên tập và phóng viên về các chiến dịch nội dung chuyên sâu.",
            "Theo dõi các thảo luận về thương hiệu (Social Listening) để nhận diện sớm các nguy cơ khủng hoảng.",
            "Chủ trì các buổi họp sáng tạo để định hướng hình ảnh và thông điệp truyền thông cho các dự án mới.",
            "Duyệt các kế hoạch hợp tác với người nổi tiếng và các đơn vị truyền thông đối tác."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Báo chí, Truyền thông, Quan hệ công chúng hoặc Marketing.",
            professional: "Trên 10-12 năm kinh nghiệm trong ngành, có mạng lưới quan hệ báo chí và giới chuyên môn rộng khắp.",
            itSkills: "Sử dụng thành thạo các công cụ Social Listening (Buzzmetrics, YouNet), Media Monitoring và MS Office.",
            attitude: "Nhạy bén chính trị, tư duy sáng tạo bay bổng kết hợp thực tiễn, điềm tĩnh và quyết đoán dưới áp lực cao."
        },
        kpis: ["Chỉ số Share of Voice (SOV)", "Chỉ số cảm xúc thương hiệu (Sentiment Score)", "Hiệu quả xử lý khủng hoảng truyền thông", "Độ phủ thương hiệu trên các kênh mục tiêu"],
        traits: ['artistic', 'social', 'enterprising']
    },
    'Giám đốc Chuỗi cung ứng (CSO)': {
        mission: "Tối ưu hóa 'huyết mạch' vận hành, đảm bảo dòng chảy hàng hóa thông suốt với chi phí thấp nhất và chất lượng cao nhất.",
        responsibilities: [
            "Thiết kế và vận hành mạng lưới cung ứng toàn cầu, từ khâu nguyên liệu đầu vào đến phân phối sản phẩm cuối cùng.",
            "Quản trị mối quan hệ với các nhà cung cấp chiến lược, đàm phán hợp đồng và tối ưu hóa chi phí thu mua.",
            "Ứng dụng công nghệ số vào quản trị kho bãi, logistics và vận tải (Digital Supply Chain).",
            "Dự báo nhu cầu thị trường và phối hợp lập kế hoạch sản xuất - bán hàng (S&OP) hiệu quả.",
            "Giám sát việc tuân thủ các quy chuẩn chất lượng, an toàn và phát triển bền vững trong toàn bộ chuỗi cung ứng."
        ],
        dailyTasks: [
            "Theo dõi trực tuyến các chỉ số vận hành kho bãi và tiến độ giao hàng trên toàn cầu.",
            "Đàm phán các điều khoản thương mại và chất lượng với các nhà cung cấp mới tiềm năng.",
            "Review báo cáo tồn kho và đưa ra các quyết định điều chuyển hàng hóa để tối ưu hóa vốn lưu động.",
            "Giám sát hiệu quả làm việc của các đối tác vận tải (3PL/4PL) và các đơn vị kho vận nội bộ.",
            "Họp với bộ phận Sản xuất và Kinh doanh để khớp tiến độ cung ứng hàng hóa cho các chiến dịch lớn."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Quản trị chuỗi cung ứng, Logistics, Kinh tế ngoại thương hoặc Kỹ thuật công nghiệp.",
            professional: "Trên 12 năm kinh nghiệm vận hành chuỗi cung ứng lớn, sở hữu các chứng chỉ quốc tế như CSCP, CPIM hoặc CLTD.",
            itSkills: "Thành thạo hệ thống quản trị ERP (SAP/Oracle SCM), các phần mềm tối ưu hóa kho bãi (WMS) và phân tích dữ liệu cung ứng.",
            attitude: "Tư duy logic cực tốt, quyết đoán, khả năng đàm phán xuất sắc và quản trị rủi ro nhạy bén."
        },
        kpis: ["Vòng quay hàng tồn kho (Inventory Turnover)", "Tổng chi phí chuỗi cung ứng trên doanh thu", "Tỷ lệ giao hàng đúng hạn (OTIF)", "Tỷ lệ tối ưu hóa chi phí thu mua hàng năm"],
        traits: ['realistic', 'investigative', 'conventional']
    },
    'Chủ tịch Hội đồng Quản trị / Tổng Giám đốc (CEO)': {
        mission: "Dẫn dắt doanh nghiệp tạo ra giá trị bền vững cho cổ đông, nhân viên và đóng góp tích cực cho xã hội.",
        responsibilities: [
            "Hoạch định tầm nhìn chiến lược, sứ mệnh và giá trị cốt lõi làm kim chỉ nam cho mọi hoạt động của tập đoàn.",
            "Ra quyết định cuối cùng về các dự án đầu tư trọng điểm, kế hoạch mở rộng thị trường và chiến lược M&A.",
            "Xây dựng, phát triển và dẫn dắt đội ngũ lãnh đạo cấp cao (C-level) thực thi hiệu quả các mục tiêu chiến lược.",
            "Đại diện cao nhất của doanh nghiệp trước Hội đồng quản trị, Cổ đông, Chính phủ và các đối tác chiến lược toàn cầu.",
            "Kiến tạo văn hóa doanh nghiệp đặc sắc, xây dựng uy tín và hình ảnh thương hiệu tổ chức trên thị trường."
        ],
        dailyTasks: [
            "Chủ trì các buổi họp điều hành định kỳ để đánh giá tiến độ thực hiện các mục tiêu chiến lược (OKRs/KPIs).",
            "Phê duyệt các chính sách nhân sự cấp cao, ngân sách tập đoàn và các quyết định đầu tư rủi ro.",
            "Gặp gỡ và đàm phán trực tiếp với các đối tác chiến lược, các nhà đầu tư lớn và đại diện các cơ quan ban ngành.",
            "Xem xét và đánh giá các báo cáo phân tích thị trường, báo cáo tài chính tổng thể của tập đoàn.",
            "Thực hiện các hoạt động truyền cảm hứng, đối thoại trực tiếp với nhân viên để thúc đẩy văn hóa doanh nghiệp."
        ],
        requirements: {
            degree: "Thạc sĩ Quản trị kinh doanh (MBA) từ các trường đại học danh tiếng hoặc tương đương.",
            professional: "Trên 20 năm kinh nghiệm quản trị thực chiến, có thành tích đột phá trong việc tăng trưởng quy mô doanh nghiệp.",
            itSkills: "Tech Literacy - Hiểu biết sâu sắc về xu hướng chuyển đổi số, AI và ứng dụng công nghệ vào quản trị hiện đại.",
            attitude: "Bản lĩnh chính trị, Tầm nhìn xa trông rộng, Khả năng lãnh đạo truyền cảm hứng vĩ đại và tư duy chính trực."
        },
        kpis: ["Giá trị vốn hóa doanh nghiệp (Market Cap)", "Lợi nhuận ròng sau thuế (NPAT)", "Chỉ số uy tín thương hiệu và sức mạnh văn hóa", "Tốc độ tăng trưởng thị phần"],
        traits: ['enterprising', 'social', 'investigative']
    },
    'Giám đốc Quản lý Dự án & Vận hành IT': {
        mission: "Đảm bảo thực thi dự án hoàn hảo và duy trì sự ổn định tuyệt đối của hệ thống vận hành công nghệ.",
        responsibilities: [
            "Quản lý danh mục dự án IT toàn tập đoàn và điều phối nguồn lực kỹ thuật giữa các dự án.",
            "Thiết lập quy trình và tiêu chuẩn quản lý dự án chuyên nghiệp (PMP, Agile/Scrum).",
            "Giám sát hạ tầng CNTT, hệ thống mạng và bảo mật dữ liệu vận hành hàng ngày.",
            "Quản lý quan hệ và đàm phán hợp đồng với các nhà cung cấp dịch vụ và thiết bị IT (Vendors).",
            "Lập kế hoạch và thực hiện các kịch bản phục hồi sau thảm họa (Disaster Recovery) cho hệ thống."
        ],
        dailyTasks: [
            "Kiểm tra trạng thái và tiến độ của các dự án IT trọng điểm thông qua Jira hoặc MS Project.",
            "Xử lý các sự cố nghiêm trọng về hạ tầng hoặc bảo mật phát sinh trong ngày làm việc.",
            "Họp Stand-up với các Project Manager để tháo gỡ các vướng mắc về nguồn lực và thời hạn.",
            "Làm việc với các nhà cung cấp về việc nâng cấp hệ thống hoặc triển khai các giải pháp mới.",
            "Review báo cáo cam kết chất lượng dịch vụ (SLA) and hiệu suất của hệ thống máy chủ/Cloud."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Quản trị hệ thống thông tin, Khoa học máy tính hoặc Quản trị dự án.",
            professional: "Trên 10 năm kinh nghiệm trong ngành IT, có kinh nghiệm quản lý các dự án quy mô lớn, chứng chỉ PMP là bắt buộc.",
            itSkills: "Thành thạo MS Project, Jira, các công cụ ITSM, kiến thức sâu về Cloud Infrastructure và Network Security.",
            attitude: "Tư duy quy trình chặt chẽ, quyết đoán, khả năng tổ chức và điều phối xuất sắc."
        },
        kpis: ["Tỷ lệ dự án hoàn thành đúng thời hạn và ngân sách", "Chỉ số sẵn sàng của hệ thống (SLA)", "Mức độ hài lòng của người dùng nội bộ", "Hiệu quả quản lý chi phí IT"],
        traits: ['conventional', 'realistic', 'enterprising']
    },
    'Kiến trúc sư trưởng / Chủ trì thiết kế cấp cao': {
        mission: "Kiến tạo những biểu tượng kiến trúc bền vững, hài hòa giữa giá trị nghệ thuật độc bản và giải pháp kỹ thuật tiên tiến.",
        responsibilities: [
            "Chủ trì định hướng ý tưởng thiết kế (Design Concept) cho các công trình trọng điểm của tập đoàn/khách hàng.",
            "Chịu trách nhiệm cao nhất về giải pháp kiến trúc, tính thẩm mỹ và sự an toàn kỹ thuật của dự án.",
            "Lãnh đạo và giám sát đội ngũ kiến trúc sư triển khai bản vẽ từ sơ bộ đến chi tiết thi công.",
            "Trực tiếp trình bày và bảo vệ các phương án thiết kế trước chủ đầu tư và các cơ quan quản lý quy hoạch.",
            "Nghiên cứu ứng dụng các vật liệu xanh, công nghệ bền vững và giải pháp kiến trúc thông minh."
        ],
        dailyTasks: [
            "Phác thảo sơ đồ không gian và hoàn thiện các ý tưởng thiết kế kiến trúc sơ bộ.",
            "Review và phê duyệt các bản vẽ kỹ thuật chi tiết của đội ngũ kiến trúc sư và họa viên.",
            "Làm việc trực tiếp với các chuyên gia kết cấu, cơ điện để thống nhất giải pháp kỹ thuật tích hợp.",
            "Thực hiện công tác giám sát tác giả tại công trường để đảm bảo thi công đúng ý tưởng thiết kế.",
            "Tìm kiếm và thẩm định các loại vật liệu xây dựng mới tại các showroom hoặc phòng thí nghiệm."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Kiến trúc dân dụng và công nghiệp.",
            professional: "Trên 12-15 năm kinh nghiệm thiết kế thực tế, sở hữu chứng chỉ hành nghề kiến trúc sư hạng 1.",
            itSkills: "Sử dụng thành thạo Revit (BIM), AutoCAD, Rhino, 3ds Max và các phần mềm mô phỏng năng lượng công trình.",
            attitude: "Sáng tạo nghệ thuật bay bổng, tư duy kỹ thuật logic, cẩn trọng và có trách nhiệm cao với cộng đồng."
        },
        kpis: ["Số lượng giải thưởng kiến trúc uy tín", "Tính khả thi và độ chính xác của hồ sơ thi công", "Sự hài lòng của chủ đầu tư", "Hiệu quả sử dụng không gian và năng lượng"],
        traits: ['artistic', 'investigative', 'realistic']
    },
    'Giám đốc Y khoa / Chuyên gia Tư vấn Cấp cao': {
        mission: "Nâng tầm chất lượng y tế thông qua sự kết hợp giữa chuyên môn y học xuất sắc và quản trị y tế hiện đại.",
        responsibilities: [
            "Giám sát toàn bộ hoạt động chuyên môn y tế và quy trình khám chữa bệnh trong hệ thống bệnh viện/phòng khám.",
            "Xây dựng và triển khai các phác đồ điều trị tiên tiến dựa trên y học chứng cứ và chuẩn mực quốc tế.",
            "Chủ trì các chương trình đào tạo, phát triển năng lực chuyên môn và rèn luyện y đức cho đội ngũ bác sĩ, điều dưỡng.",
            "Tham vấn cho Ban chiến lược về hướng phát triển dịch vụ y tế mới và ứng dụng công nghệ cao trong điều trị.",
            "Trực tiếp hội chẩn các ca bệnh phức tạp và đảm bảo các tiêu chuẩn an toàn người bệnh cao nhất."
        ],
        dailyTasks: [
            "Thực hiện các buổi đi buồng chuyên môn và hội chẩn liên chuyên khoa cho các ca bệnh khó.",
            "Review và phê duyệt các quy trình kỹ thuật y tế và danh mục thuốc sử dụng trong hệ thống.",
            "Làm việc với Hội đồng y khoa về các nghiên cứu lâm sàng và kế hoạch trang bị thiết bị y tế mới.",
            "Giám sát việc tuân thủ các quy định về an toàn y tế và phòng chống nhiễm khuẩn bệnh viện.",
            "Giải quyết các vấn đề liên quan đến khiếu nại chuyên môn và đảm bảo quyền lợi của người bệnh."
        ],
        requirements: {
            degree: "Bác sĩ Chuyên khoa II hoặc Tiến sĩ Y khoa, ưu tiên có thêm bằng quản trị bệnh viện.",
            professional: "Trên 15 năm kinh nghiệm lâm sàng và có ít nhất 5 năm ở vị trí quản lý y tế cấp cao.",
            itSkills: "Sử dụng thành thạo các hệ thống quản lý bệnh viện (HIS), hồ sơ bệnh án điện tử (EMR) và công cụ nghiên cứu y sinh.",
            attitude: "Y đức trong sáng, thấu cảm sâu sắc, chính trực và có tư duy phân tích khoa học sắc bén."
        },
        kpis: ["Tỷ lệ điều trị thành công và hồi phục của bệnh nhân", "Chỉ số hài lòng của người bệnh (Patient Satisfaction)", "Tỷ lệ sai sót y tế thấp nhất", "Hiệu quả đào tạo nhân lực y tế"],
        traits: ['investigative', 'social', 'realistic']
    },
    'Chuyên gia Tư vấn Chiến lược Sức khỏe Tinh thần': {
        mission: "Thấu hiểu, chữa lành và khơi dậy tiềm năng hạnh phúc, giúp cá nhân và tổ chức đạt được trạng thái cân bằng bền vững.",
        responsibilities: [
            "Thực hiện các phiên tham vấn và trị liệu tâm lý chuyên sâu cho cá nhân, cặp đôi hoặc nhóm.",
            "Thiết kế và triển khai các chương trình chăm sóc sức khỏe tinh thần toàn diện cho doanh nghiệp (EAP).",
            "Nghiên cứu và đánh giá các chỉ số tâm lý học tổ chức, mức độ stress và hạnh phúc của nhân viên.",
            "Đào tạo kỹ năng quản trị cảm xúc, vượt qua khủng hoảng và xây dựng văn hóa thấu cảm nơi làm việc.",
            "Xây dựng và điều phối mạng lưới các chuyên gia hỗ trợ tâm lý trong cộng đồng."
        ],
        dailyTasks: [
            "Trực tiếp thực hiện các phiên trị liệu tâm lý theo lịch hẹn với khách hàng/nhân viên.",
            "Nghiên cứu và soạn thảo nội dung cho các buổi workshop/seminar về sức khỏe tâm thần.",
            "Phân tích dữ liệu từ các cuộc khảo sát tâm lý để đưa ra đề xuất cải thiện môi trường làm việc.",
            "Làm việc với bộ phận HR để tích hợp các chính sách sức khỏe tinh thần vào chế độ phúc lợi nhân viên.",
            "Cập nhật các kỹ thuật trị liệu và nghiên cứu tâm lý mới nhất thông qua các tài liệu chuyên ngành quốc tế."
        ],
        requirements: {
            degree: "Thạc sĩ trở lên - Chuyên ngành: Tâm lý học lâm sàng, Tâm lý học tổ chức hoặc Công tác xã hội.",
            professional: "Trên 8 năm kinh nghiệm thực hành lâm sàng hoặc tư vấn tổ chức, có chứng chỉ hành nghề trị liệu uy tín.",
            itSkills: "Sử dụng thành thạo các nền tảng quản lý hồ sơ lâm sàng, công cụ khảo sát và phân tích dữ liệu tâm lý.",
            attitude: "Khả năng lắng nghe không phán xét, bảo mật thông tin tuyệt đối, thấu cảm và kiên nhẫn."
        },
        kpis: ["Tỷ lệ cải thiện trạng thái tâm lý của khách hàng", "Mức độ gắn kết và hài lòng của nhân viên trong doanh nghiệp đối tác", "Số lượng các chương trình phòng ngừa được triển khai"],
        traits: ['social', 'investigative', 'artistic']
    },
    'Trưởng phòng Kỹ thuật / Chuyên gia Tư vấn Công nghiệp': {
        mission: "Tối ưu hóa năng lực sản xuất và vận hành thông qua các giải pháp kỹ thuật chính xác và tinh thần cải tiến liên tục.",
        responsibilities: [
            "Quản lý và duy trì toàn bộ hệ thống hạ tầng kỹ thuật, dây chuyền sản xuất và thiết bị công nghiệp.",
            "Chủ trì triển khai các dự án cải tiến quy trình (Lean Manufacturing, Six Sigma) để tăng năng suất và giảm lãng phí.",
            "Thiết kế, lập dự toán và giám sát việc lắp đặt các hệ thống kỹ thuật, công nghệ sản xuất mới.",
            "Xây dựng chương trình đào tạo kỹ năng vận hành an toàn và bảo trì thiết bị cho đội ngũ kỹ sư, công nhân.",
            "Quản lý ngân sách bảo trì hàng năm và tối ưu hóa chi phí tiêu thụ năng lượng của nhà máy."
        ],
        dailyTasks: [
            "Thực hiện kiểm tra hiện trường (Gemba Walk) để theo dõi tình trạng vận hành của các thiết bị trọng yếu.",
            "Phân tích nguyên nhân gốc rễ và chỉ đạo xử lý các sự cố kỹ thuật phức tạp làm gián đoạn sản xuất.",
            "Lập kế hoạch bảo trì phòng ngừa (Preventive Maintenance) định kỳ cho hệ thống máy móc.",
            "Họp với bộ phận Sản xuất để thống nhất các mục tiêu về năng suất, chất lượng và an toàn.",
            "Nghiên cứu các giải pháp tự động hóa và Robot hóa để nâng cấp quy trình sản xuất hiện tại."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Kỹ thuật cơ khí, Điện - Điện tử, Tự động hóa hoặc Kỹ thuật công nghiệp.",
            professional: "Trên 10 năm kinh nghiệm trong lĩnh vực kỹ thuật sản xuất, am hiểu sâu về các chuẩn mực an toàn công nghiệp.",
            itSkills: "Thành thạo AutoCAD, SolidWorks, phần mềm lập trình PLC và các hệ thống quản lý bảo trì (CMMS).",
            attitude: "Tư duy kỹ thuật logic, quyết đoán trong xử lý sự cố, luôn đặt an toàn lao động lên hàng đầu."
        },
        kpis: ["Chỉ số hiệu quả thiết bị tổng thể (OEE)", "Tỷ lệ dừng máy ngoài kế hoạch (Downtime)", "Tỷ lệ tối ưu hóa chi phí năng lượng", "Chỉ số an toàn lao động"],
        traits: ['realistic', 'investigative', 'conventional']
    },
    'Giám đốc Kiểm toán / Đối tác (Partner)': {
        mission: "Gìn giữ sự minh bạch, chính xác của thông tin tài chính và củng cố niềm tin bền vững trên thị trường.",
        responsibilities: [
            "Chủ trì và chịu trách nhiệm cao nhất về các hợp đồng kiểm toán cho các tập đoàn lớn và tổ chức niêm yết.",
            "Thẩm định rủi ro kinh doanh, rủi ro gian lận và đánh giá hệ thống kiểm soát nội bộ của khách hàng.",
            "Ký xác nhận các báo cáo tài chính và chịu trách nhiệm pháp lý cao nhất trước pháp luật và các bên liên quan.",
            "Phát triển chiến lược kinh doanh dịch vụ kiểm toán, tư vấn rủi ro và mở rộng mạng lưới khách hàng.",
            "Đào tạo, dẫn dắt và xây dựng chuẩn mực đạo đức nghề nghiệp cho đội ngũ kiểm toán viên chuyên nghiệp."
        ],
        dailyTasks: [
            "Review các hồ sơ kiểm toán cho các khoản mục trọng yếu và nhạy cảm trong báo cáo tài chính.",
            "Làm việc trực tiếp với Ban quản trị và Hội đồng quản trị khách hàng về các phát hiện kiểm toán quan trọng.",
            "Phê duyệt kế hoạch kiểm toán chiến lược và phân bổ nguồn lực nhân sự cho các dự án lớn.",
            "Tham gia các buổi đấu thầu cung cấp dịch vụ chuyên nghiệp và gặp gỡ các đối tác tiềm năng.",
            "Nghiên cứu và cập nhật các thay đổi mới nhất trong chuẩn mực kế toán (IFRS/VAS) và luật pháp liên quan."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Kiểm toán, Kế toán hoặc Tài chính.",
            professional: "Trên 15 năm kinh nghiệm trong ngành kiểm toán, bắt buộc có chứng chỉ CPA Việt Nam và các chứng chỉ quốc tế như ACCA hay CPA Úc.",
            itSkills: "Thành thạo các phần mềm kiểm toán chuyên dụng (CaseWare), hệ thống ERP và các công cụ phân tích dữ liệu kiểm toán.",
            attitude: "Tính độc lập và khách quan tuyệt đối, tinh thần hoài nghi nghề nghiệp sắc bén và chính trực."
        },
        kpis: ["Chất lượng hồ sơ kiểm toán (được kiểm soát bởi cơ quan quản lý)", "Mức độ tuân thủ đạo đức nghề nghiệp của đội ngũ", "Doanh thu và tăng trưởng khách hàng chiến lược"],
        traits: ['conventional', 'enterprising', 'investigative']
    },
    'Giám đốc Sáng tạo / Chủ sở hữu thương hiệu thời trang': {
        mission: "Dẫn dắt xu hướng thẩm mỹ toàn cầu và khẳng định bản sắc cá nhân thông qua những tuyệt tác thời trang mang tầm vóc biểu tượng.",
        responsibilities: [
            "Xác lập định hướng phong cách và ngôn ngữ thiết kế chủ đạo cho các bộ sưu tập của thương hiệu hàng mùa.",
            "Quản lý toàn diện quy trình từ ý tưởng phác thảo đến sản xuất mẫu và chiến dịch truyền thông hình ảnh.",
            "Nghiên cứu sâu sắc về xu hướng thời trang thế giới, nghệ thuật đương đại và hành vi tiêu dùng cao cấp.",
            "Xây dựng chiến lược kinh doanh và mở rộng thị trường cho thương hiệu trên quy mô toàn cầu.",
            "Giám sát và đảm bảo chất lượng nghệ thuật, thẩm mỹ trong mọi điểm chạm của khách hàng với thương hiệu."
        ],
        dailyTasks: [
            "Trực tiếp duyệt các bản vẽ phác thảo, mẫu vải và phụ liệu cho các bộ sưu tập sắp ra mắt.",
            "Chủ trì các buổi chụp hình concept (Editorial Shoot) và duyệt hình ảnh quảng bá trên các kênh truyền thông.",
            "Làm việc với đội ngũ sản xuất và nghệ nhân để đảm bảo tính hoàn mỹ của các sản phẩm mẫu.",
            "Phân tích dữ liệu doanh số và phản hồi từ thị trường để điều chỉnh hướng sáng tạo cho các dòng sản phẩm.",
            "Gặp gỡ các đối tác cung ứng vật liệu cao cấp và tham dự các tuần lễ thời trang quốc tế."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Thiết kế thời trang, Quản trị thương hiệu xa xỉ hoặc Nghệ thuật tạo hình.",
            professional: "Sở hữu Portfolio nghệ thuật xuất sắc, có tư duy kinh doanh thời trang nhạy bén và hiểu biết sâu về ngành xa xỉ.",
            itSkills: "Sử dụng thành thạo Adobe Creative Suite, các phần mềm thiết kế 3D (CLO 3D) và hệ thống quản lý bán lẻ cao cấp.",
            attitude: "Cá tính sáng tạo đột phá, gu thẩm mỹ sắc sảo, sự quyết liệt trong hành động và khả năng truyền cảm hứng mạnh mẽ."
        },
        kpis: ["Tốc độ tăng trưởng doanh thu và lợi nhuận thương hiệu", "Mức độ ảnh hưởng và nhận diện thương hiệu trên các phương tiện truyền thông", "Số lượng thiết kế mang tính biểu tượng"],
        traits: ['artistic', 'enterprising', 'realistic']
    },
    'Chuyên gia Ngôn ngữ / Giám đốc Học thuật': {
        mission: "Khơi nguồn cảm hứng học tập và xây dựng nền tảng tri thức ngôn ngữ vững chắc, mở ra cánh cửa cơ hội toàn cầu cho học viên.",
        responsibilities: [
            "Thiết kế chương trình giảng dạy ngôn ngữ (Curriculum Design) và phát triển bộ tài liệu học thuật độc quyền.",
            "Giám sát, đào tạo và đánh giá định kỳ chất lượng giảng dạy của đội ngũ giáo viên trong hệ thống.",
            "Nghiên cứu và ứng dụng các phương pháp sư phạm hiện đại và công nghệ giáo dục (EdTech) vào giảng dạy.",
            "Tham vấn lộ trình học tập chuyên sâu và định hướng các chứng chỉ quốc tế cho học viên.",
            "Tổ chức các buổi hội thảo chuyên môn, hội nghị khoa học giáo dục và các chương trình đào tạo nội bộ."
        ],
        dailyTasks: [
            "Thực hiện dự giờ và đưa ra các phản hồi chuyên môn chi tiết để nâng cao tay nghề cho giáo viên.",
            "Biên soạn, kiểm duyệt và cập nhật ngân hàng đề thi, tài liệu bổ trợ học tập cho các khóa học.",
            "Trực tiếp giải quyết các vấn đề chuyên môn phức tạp phát sinh từ phía học viên hoặc phụ huynh.",
            "Làm việc phối hợp với bộ phận Marketing để đảm bảo tính chính xác và hấp dẫn của nội dung học thuật quảng bá.",
            "Nghiên cứu các báo cáo và xu hướng giáo dục ngôn ngữ mới nhất trên thế giới để cải tiến chương trình."
        ],
        requirements: {
            degree: "Thạc sĩ trở lên - Chuyên ngành: Ngôn ngữ học, Sư phạm ngoại ngữ hoặc Quản lý giáo dục.",
            professional: "Trên 10 năm kinh nghiệm giảng dạy và quản lý học thuật, sở hữu các chứng chỉ chuyên môn cao cấp như Delta, CELTA hoặc tương đương.",
            itSkills: "Sử dụng thành thạo các nền tảng LMS, công cụ tạo bài giảng tương tác (E-learning tools) và MS Office chuyên sâu.",
            attitude: "Tận tâm với nghề giáo, kiên nhẫn, tư duy giáo dục nhân văn và khả năng sư phạm xuất sắc."
        },
        kpis: ["Kết quả đầu ra của học viên trong các kỳ thi quốc tế", "Tỷ lệ giữ chân học viên (Retention Rate)", "Chỉ số hài lòng và sự tiến bộ của đội ngũ giáo viên"],
        traits: ['social', 'investigative', 'artistic']
    },
    'Giám đốc Pháp chế / Luật sư điều hành': {
        mission: "Bảo vệ sự thượng tôn pháp luật, quản trị rủi ro pháp lý và tạo lập hành lang an toàn cho sự phát triển bền vững của doanh nghiệp.",
        responsibilities: [
            "Tư vấn chiến lược pháp lý cho Ban quản trị về mọi hoạt động kinh doanh, đầu tư và tái cấu trúc doanh nghiệp.",
            "Chủ trì soạn thảo, soát xét và tham gia đàm phán các hợp đồng thương mại quốc tế và các giao dịch phức tạp.",
            "Đại diện doanh nghiệp trong việc giải quyết các tranh chấp pháp lý, tố tụng và làm việc với các cơ quan nhà nước.",
            "Thiết lập và giám sát hệ thống tuân thủ pháp luật (Compliance) trong toàn bộ các phòng ban của tập đoàn.",
            "Xây dựng khung quản trị rủi ro pháp lý nội bộ và đào tạo kiến thức pháp luật cơ bản cho nhân viên."
        ],
        dailyTasks: [
            "Review và phê duyệt các văn bản hợp đồng, thỏa thuận hợp tác và các văn bản pháp lý nội bộ quan trọng.",
            "Cập nhật và phân tích tác động của các văn bản luật mới ra đời đối với hoạt động kinh doanh của doanh nghiệp.",
            "Làm việc trực tiếp với các đơn vị tư vấn luật bên ngoài (Law Firms) cho các dự án chuyên sâu.",
            "Tư vấn pháp lý trực tiếp cho các bộ phận nghiệp vụ (Kinh doanh, Nhân sự, Tài chính) về các vấn đề phát sinh.",
            "Theo dõi và giám sát tiến độ xử lý các vụ việc tố tụng hoặc khiếu nại đang diễn ra."
        ],
        requirements: {
            degree: "Thạc sĩ Luật trở lên, bắt buộc có chứng chỉ hành nghề Luật sư và thẻ Luật sư.",
            professional: "Trên 12-15 năm kinh nghiệm trong lĩnh vực tư vấn pháp luật doanh nghiệp và quản trị rủi ro pháp lý.",
            itSkills: "Thành thạo các phần mềm tra cứu văn bản pháp luật, hệ thống quản lý văn bản và MS Office chuyên sâu.",
            attitude: "Chính trực tuyệt đối, tư duy logic chặt chẽ, sự điềm tĩnh và khả năng đàm phán sắc bén."
        },
        kpis: ["Tỷ lệ thắng kiện hoặc hòa giải thành công", "Kiểm soát và giảm thiểu các rủi ro pháp lý phát sinh", "Độ chính xác và thời gian xử lý các yêu cầu pháp vụ"],
        traits: ['social', 'investigative', 'conventional'],
        courses: {
            level1: [
                { n: "Kỹ năng soạn thảo Hợp đồng thương mại", p: "Học viện Tư pháp VN", url: "#" },
                { n: "English for Legal Professionals", p: "British Council", url: "https://www.britishcouncil.vn/" }
            ],
            level2: [
                { n: "Luật Doanh nghiệp & Đầu tư nâng cao", p: "VCCI", url: "#" },
                { n: "Intellectual Property Law Specialization", p: "WIPO Academy", url: "https://www.wipo.int/academy/en/" }
            ],
            level3: [{ n: "International Business Law", p: "University of London", url: "https://www.coursera.org/specializations/international-business-law" }],
            level4: [{ n: "General Counsel Executive Program", p: "Harvard Law School", url: "https://execed.law.harvard.edu/" }]
        }
    },
    'Giám đốc Điều hành Khách sạn / Khu nghỉ dưỡng': {
        mission: "Kiến tạo những kỳ nghỉ hoàn hảo và trải nghiệm dịch vụ 5 sao đỉnh cao, định nghĩa lại chuẩn mực của sự hiếu khách.",
        responsibilities: [
            "Quản lý điều hành toàn diện các hoạt động vận hành, tài chính, nhân sự và kinh doanh của khách sạn/resort.",
            "Thiết lập và giám sát chặt chẽ việc thực thi các tiêu chuẩn dịch vụ khách hàng quốc tế (SOPs).",
            "Xây dựng chiến lược giá (Revenue Management) và các chiến dịch tiếp thị để tối ưu hóa doanh thu phòng và dịch vụ.",
            "Trực tiếp duy trì mối quan hệ với các khách hàng VIP, các đối tác lữ hành và các nhà cung cấp chiến lược.",
            "Đảm bảo các tiêu chuẩn cao nhất về an toàn, an ninh, vệ sinh thực phẩm và bảo vệ môi trường trong toàn hệ thống."
        ],
        dailyTasks: [
            "Thực hiện kiểm tra hiện trường tình trạng vận hành của các bộ phận (Housekeeping, F&B, Front Office, Kỹ thuật).",
            "Trực tiếp tiếp đón và chăm sóc các đoàn khách VIP, các chính khách quan trọng lưu trú tại khách sạn.",
            "Review các báo cáo doanh thu, chi phí vận hành và chỉ số hài lòng khách hàng hàng ngày.",
            "Chủ trì buổi họp giao ban sáng với các trưởng bộ phận để giải quyết các vấn đề vận hành phát sinh.",
            "Giám sát việc tổ chức các sự kiện, tiệc cưới hoặc hội nghị lớn diễn ra tại các sảnh tiệc của khách sạn."
        ],
        requirements: {
            degree: "Đại học trở lên - Chuyên ngành: Quản trị khách sạn, Quản trị du lịch hoặc Quản trị kinh doanh.",
            professional: "Trên 10-15 năm kinh nghiệm quản lý tại các khách sạn 5 sao quốc tế, am hiểu sâu sắc về thị trường du lịch cao cấp.",
            itSkills: "Thành thạo các hệ thống quản lý khách sạn (PMS như Opera/Smile), phần mềm quản trị doanh thu và MS Office.",
            attitude: "Tư duy dịch vụ vượt trội (Service Mindset), khả năng lãnh đạo tinh tế, sự quyết đoán và phong thái lịch thiệp."
        },
        kpis: ["Tỷ lệ lấp đầy phòng (Occupancy Rate)", "Chỉ số hài lòng khách hàng (GSI/GSS)", "Lợi nhuận gộp vận hành (GOP)", "Chỉ số doanh thu trên mỗi phòng sẵn có (RevPAR)"],
        traits: ['enterprising', 'social', 'realistic']
    },
    'Trưởng khoa học dữ liệu (Chief Data Scientist)': {
        mission: "Mở khóa kho tàng tri thức từ dữ liệu để tạo ra những đột phá kinh doanh mang tính cách mạng.",
        responsibilities: [
            "Định hướng chiến lược dữ liệu và lộ trình phát triển AI cho toàn tổ chức, đảm bảo dữ liệu là tài sản chiến lược.",
            "Chủ trì phát triển các mô hình Machine Learning, Deep Learning và thuật toán phức tạp để giải quyết các bài toán kinh doanh.",
            "Chuyển đổi dữ liệu thô thành các Insights chiến lược, tham mưu trực tiếp cho Ban điều hành về xu hướng và rủi ro.",
            "Xây dựng và dẫn dắt đội ngũ Data Scientists, Data Engineers tài năng, tạo môi trường nghiên cứu và ứng dụng đỉnh cao.",
            "Thiết lập các tiêu chuẩn về đạo đức dữ liệu (Data Ethics), bảo mật và quản trị dữ liệu cấp tập đoàn."
        ],
        dailyTasks: [
            "Kiểm tra và đánh giá hiệu suất huấn luyện của các mô hình AI/ML mới nhất đang được thử nghiệm.",
            "Thảo luận với bộ phận Sản phẩm (Product) về việc tích hợp các tính năng thông minh dựa trên dữ liệu.",
            "Nghiên cứu các công bố khoa học và công nghệ AI tiên phong trên thế giới (Generative AI, LLMs).",
            "Làm việc với đội ngũ hạ tầng dữ liệu để tối ưu hóa quy trình thu thập và xử lý dữ liệu lớn (Big Data).",
            "Thuyết trình các kết quả phân tích phức tạp bằng ngôn ngữ kinh doanh cho Ban giám đốc và các Stakeholders."
        ],
        requirements: {
            degree: "Tiến sĩ (PhD) hoặc Thạc sĩ xuất sắc - Chuyên ngành: Khoa học máy tính, Thống kê, Toán học hoặc Vật lý.",
            professional: "Có thành tích thực tế trong việc triển khai các dự án AI/ML tạo ra giá trị kinh tế thực tế, trên 10 năm kinh nghiệm.",
            itSkills: "Thành thạo Python, R, SQL, Spark, Cloud AI Platforms (GCP/AWS), Deep Learning Frameworks (PyTorch/TensorFlow).",
            attitude: "Tư duy khoa học nghiêm túc, Tò mò trí tuệ không giới hạn, Khả năng kể chuyện bằng dữ liệu (Data Storytelling)."
        },
        kpis: ["Giá trị kinh tế trực tiếp từ các mô hình AI", "Độ chính xác và tính ổn định của mô hình thuật toán", "Tốc độ chuyển đổi từ dữ liệu sang quyết định", "Chất lượng đội ngũ kế cận"],
        traits: ['investigative', 'realistic', 'conventional']
    },
    'Giám đốc Nhân sự (CHRO)': {
        mission: "Kiến tạo văn hóa chiến thắng và quản trị tài sản con người chiến lược để thúc đẩy sự phát triển bền vững của doanh nghiệp.",
        responsibilities: [
            "Hoạch định chiến lược nhân sự tổng thể và kiến tạo văn hóa doanh nghiệp đặc sắc cho toàn tập đoàn.",
            "Thiết kế hệ thống lương thưởng (C&B), phúc lợi cạnh tranh và lộ trình phát triển nhân tài dài hạn.",
            "Giám sát các chương trình đào tạo lãnh đạo kế cận (Succession Planning) và phát triển năng lực tổ chức.",
            "Xây dựng và định hướng chiến lược thương hiệu nhà tuyển dụng (Employer Branding) trên quy mô toàn cầu.",
            "Tư vấn trực tiếp cho CEO và Ban quản trị về các vấn đề tái cấu trúc, sáp nhập và quản trị sự thay đổi."
        ],
        dailyTasks: [
            "Review và phê duyệt kế hoạch tuyển dụng, bổ nhiệm các vị trí lãnh đạo chủ chốt trong tập đoàn.",
            "Làm việc với các đối tác tư vấn nhân sự về việc tối ưu hóa chính sách đãi ngộ và hệ thống đánh giá hiệu suất.",
            "Trực tiếp gặp gỡ nhân viên các cấp để thấu hiểu tâm tư, nguyện vọng và xây dựng văn hóa đối thoại.",
            "Review báo cáo phân tích chi phí nhân sự, tỷ lệ biến động và hiệu suất làm việc toàn tổ chức.",
            "Chủ trì các buổi họp tư vấn về lộ trình phát triển và cố vấn cho các nhân sự tiềm năng (HiPo)."
        ],
        requirements: {
            degree: "Thạc sĩ trở lên - Chuyên ngành: Quản trị nhân sự, Tâm lý học tổ chức hoặc Quản trị kinh doanh.",
            professional: "Trên 15 năm kinh nghiệm trong lĩnh vực nhân sự, am hiểu sâu sắc về luật lao động và quản trị sự thay đổi trong các tổ chức lớn.",
            itSkills: "Thành thạo các hệ thống quản trị nhân sự (HRIS), công cụ phân tích dữ liệu nhân sự (HR Analytics) và nền tảng LinkedIn Recruiter.",
            attitude: "Khả năng thấu cảm (Empathy), tính chính trực tuyệt đối, tư duy đối tác chiến lược và kỹ năng gây ảnh hưởng."
        },
        kpis: ["Tỷ lệ biến động nhân sự (Turnover Rate) của các vị trí chủ chốt", "Chỉ số gắn kết nhân viên (eNPS)", "Hiệu suất nhân sự toàn diện trên doanh thu", "Tốc độ lấp đầy các vị trí chiến lược"],
        traits: ['social', 'enterprising', 'conventional']
    },
    'Chuyên gia Nghiên cứu AI / Giám đốc Khoa học': {
        mission: "Định hình tương lai và tạo lập lợi thế công nghệ vượt trội thông qua trí tuệ nhân tạo tiên phong.",
        responsibilities: [
            "Dẫn dắt các hoạt động nghiên cứu và phát triển (R&D) trọng điểm về AI, Machine Learning và Deep Learning.",
            "Thiết lập lộ trình công nghệ AI (AI Roadmap) và xây dựng nền tảng cho các sản phẩm công nghệ thế hệ mới.",
            "Giám sát toàn bộ quá trình thu thập dữ liệu huấn luyện, tối ưu hóa mô hình trên các cụm tính năng GPU/TPU lớn.",
            "Đảm bảo các chuẩn mực về đạo đức, tính minh bạch và an toàn của AI trong tất cả các ứng dụng thực tế.",
            "Đại diện doanh nghiệp công bố các công trình nghiên cứu và bằng sáng chế tại các hội nghị AI uy tín quốc tế."
        ],
        dailyTasks: [
            "Đọc, phân tích và thảo luận về các bài báo khoa học mới nhất trên các nền tảng như ArXiv để cập nhật công nghệ.",
            "Thiết kế các thí nghiệm huấn luyện mô hình và theo dõi các chỉ số hiệu năng (Experiment Tracking).",
            "Trực tiếp viết mã nguồn cho các thuật toán AI mới bằng PyTorch, TensorFlow hoặc các ngôn ngữ bậc thấp.",
            "Tham gia thảo luận học thuật và trao đổi chuyên môn với cộng đồng nghiên cứu AI toàn cầu.",
            "Chỉ đạo việc chuẩn bị hạ tầng tính toán và pipeline dữ liệu cho việc huấn luyện các mô hình ngôn ngữ lớn (LLMs)."
        ],
        requirements: {
            degree: "Tiến sĩ (PhD) - Chuyên ngành: Khoa học máy tính, Trí tuệ nhân tạo, Toán học hoặc Vật lý lý thuyết.",
            professional: "Sở hữu các công bố khoa học tại các hội nghị đỉnh cao như NeurIPS, ICML, CVPR và có kinh nghiệm triển khai mô hình thực tế.",
            itSkills: "Bậc thầy về Python, PyTorch, TensorFlow, C++, am hiểu sâu về ML Pipeline và hạ tầng tính toán song song.",
            attitude: "Tư duy sáng tạo đột phá, tinh thần khoa học nghiêm túc, kiên trì theo đuổi các bài toán khó và tầm nhìn tương lai."
        },
        kpis: ["Số lượng bằng sáng chế và công bố khoa học quốc tế", "Độ chính xác và hiệu năng của các mô hình AI cốt lõi", "Tỷ lệ ứng dụng thành công các công trình R&D vào sản phẩm thực tế"],
        traits: ['investigative', 'realistic', 'conventional']
    }
};
