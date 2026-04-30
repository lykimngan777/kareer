/**
 * Kareer Central Database
 * 
 * Source of truth for career definitions, RIASEC mappings, 
 * Job Descriptions (JD), and Career Roadmaps.
 */

const careerData = [
  { name: 'Phân tích dữ liệu (Data Analyst)', riasec: 'IRC', description: 'Phân tích dữ liệu thô để đưa ra thông tin hữu ích cho doanh nghiệp.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Lập trình viên (Software Engineer)', riasec: 'IRC', description: 'Xây dựng phần mềm và ứng dụng.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Kỹ sư AI/Machine Learning', riasec: 'IRC', description: 'Nghiên cứu và phát triển các mô hình trí tuệ nhân tạo.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Kỹ sư phần cứng', riasec: 'RIC', description: 'Thiết kế các linh kiện máy tính.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Quản trị mạng', riasec: 'RCI', description: 'Duy trì hệ thống mạng nội bộ.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Chuyên gia bảo mật (Cybersecurity)', riasec: 'RIC', description: 'Bảo vệ dữ liệu khỏi các cuộc tấn công mạng.', groups: ['Kỹ thuật & Công nghệ'] },

  { name: 'Chuyên viên Marketing', riasec: 'EAS', description: 'Lên kế hoạch và thực hiện các chiến dịch truyền thông.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Quản trị kinh doanh', riasec: 'ECR', description: 'Điều hành hoạt động của doanh nghiệp.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Giám đốc dự án (Project Manager)', riasec: 'ECS', description: 'Quản lý tiến độ và nhân sự của dự án.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Kế toán/Kiểm toán', riasec: 'CEI', description: 'Xử lý các con số và báo cáo tài chính.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Nhân sự (HR)', riasec: 'SEA', description: 'Tuyển dụng và đào tạo nhân sự.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Tài chính (Finance Specialist)', riasec: 'ECI', description: 'Phân tích và quản lý dòng tiền.', groups: ['Kinh doanh & Quản lý'] },

  { name: 'Bác sĩ/Y sĩ', riasec: 'SIR', description: 'Chăm sóc sức khỏe và điều trị bệnh nhân.', groups: ['Y tế & Sức khỏe'] },
  { name: 'Dược sĩ', riasec: 'ICR', description: 'Cung cấp và tư vấn sử dụng thuốc.', groups: ['Y tế & Sức khỏe'] },
  { name: 'Điều dưỡng', riasec: 'SRA', description: 'Hỗ trợ chăm sóc người bệnh.', groups: ['Y tế & Sức khỏe'] },
  { name: 'Chuyên gia tâm lý', riasec: 'SIA', description: 'Hỗ trợ sức khỏe tinh thần cho khách hàng.', groups: ['Y tế & Sức khỏe'] },

  { name: 'Thiết kế đồ họa', riasec: 'AIR', description: 'Sáng tạo hình ảnh và nhận diện thương hiệu.', groups: ['Nghệ thuật & Sáng tạo'] },
  { name: 'Kiến trúc sư', riasec: 'AIR', description: 'Thiết kế không gian và công trình.', groups: ['Nghệ thuật & Sáng tạo'] },
  { name: 'Biên tập viên/Nhà báo', riasec: 'ASE', description: 'Sản xuất nội dung chữ viết.', groups: ['Nghệ thuật & Sáng tạo'] },
  { name: 'Sáng tạo nội dung (Content Creator)', riasec: 'AES', description: 'Làm video, blog, nội dung mạng xã hội.', groups: ['Nghệ thuật & Sáng tạo'] },
  { name: 'Đạo diễn/Sản xuất video', riasec: 'AEI', description: 'Chỉ đạo thực hiện các sản phẩm hình ảnh.', groups: ['Nghệ thuật & Sáng tạo'] },

  { name: 'Luật sư', riasec: 'EIS', description: 'Tư vấn pháp lý và bảo vệ quyền lợi khách hàng.', groups: ['Xã hội & Giáo dục'] },
  { name: 'Giảng viên/Giáo viên', riasec: 'SAE', description: 'Giảng dạy và truyền đạt kiến thức.', groups: ['Xã hội & Giáo dục'] },
  { name: 'Nghiên cứu xã hội', riasec: 'IAS', description: 'Phân tích các vấn đề của cộng đồng.', groups: ['Xã hội & Giáo dục'] },
  { name: 'Quan hệ công chúng (PR)', riasec: 'EAS', description: 'Xây dựng hình ảnh cho cá nhân/tổ chức.', groups: ['Xã hội & Giáo dục'] },

  { name: 'Kỹ sư xây dựng', riasec: 'RIC', description: 'Giám sát thi công các công trình.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Kỹ sư cơ khí', riasec: 'RIC', description: 'Thiết kế và vận hành máy móc.', groups: ['Kỹ thuật & Công nghệ'] },
  { name: 'Kỹ sư điện/điện tử', riasec: 'RIC', description: 'Hệ thống điện và mạch điều khiển.', groups: ['Kỹ thuật & Công nghệ'] },

  { name: 'Logistics/Chuỗi cung ứng', riasec: 'CEI', description: 'Quản lý vận chuyển và lưu trữ hàng hóa.', groups: ['Kinh doanh & Quản lý'] },
  { name: 'Khởi nghiệp (Entrepreneur)', riasec: 'EAS', description: 'Tự xây dựng và vận hành mô hình kinh doanh.', groups: ['Kinh doanh & Quản lý'] }
];

const traitData = {
  'R': { name: 'Thực tế (Realistic)', desc: 'Thích làm việc với máy móc, công cụ, ngoài trời.' },
  'I': { name: 'Nghiên cứu (Investigative)', desc: 'Thích suy nghĩ, phân tích, tìm tòi nguyên lý.' },
  'A': { name: 'Nghệ thuật (Artistic)', desc: 'Thích sáng tạo, biểu đạt cá nhân, không gò bó.' },
  'S': { name: 'Xã hội (Social)', desc: 'Thích giúp đỡ, giảng dạy, làm việc với con người.' },
  'E': { name: 'Quản lý (Enterprising)', desc: 'Thích lãnh đạo, thuyết phục, đạt được mục tiêu kinh doanh.' },
  'C': { name: 'Nghi thức (Conventional)', desc: 'Thích chi tiết, dữ liệu, quy trình rõ ràng.' }
};

const specializedData = {
  'Phân tích dữ liệu (Data Analyst)': {
    description: 'Chuyển đổi dữ liệu thô thành những hiểu biết có giá trị (insights) giúp doanh nghiệp đưa ra quyết định thông minh hơn. Bạn sẽ làm việc với SQL, Python và các công cụ trực quan hóa như Tableau/PowerBI.',
    responsibilities: [
      'Thu thập dữ liệu từ nhiều nguồn khác nhau.',
      'Làm sạch và xử lý dữ liệu bị lỗi hoặc thiếu.',
      'Sử dụng các mô hình thống kê để phát hiện xu hướng.',
      'Tạo báo cáo và dashboard cho ban lãnh đạo.'
    ],
    advantages: [
      'Khả năng tư duy logic và giải quyết vấn đề xuất sắc.',
      'Kỹ năng làm việc với con số và chi tiết hóa thông tin.',
      'Tư duy phản biện giúp nhìn nhận vấn đề từ nhiều khía cạnh.'
    ],
    salary: '15 - 35 Triệu VNĐ',
    aiCoach: 'Hãy bắt đầu với SQL và Python cơ bản. Hãy học cách kể chuyện bằng dữ liệu (Data Storytelling) để lời nói của bạn có sức nặng hơn.'
  },
  'Lập trình viên (Software Engineer)': {
    description: 'Thiết kế, xây dựng và bảo trì các hệ thống phần mềm. Đây là công việc đòi hỏi sự kết hợp giữa logic toán học và khả năng sáng tạo trong giải quyết vấn đề.',
    responsibilities: [
      'Viết mã nguồn sạch (clean code) và dễ bảo trì.',
      'Tham gia vào quá trình thiết kế hệ thống (System Design).',
      'Kiểm thử và sửa lỗi phần mềm (Debugging).',
      'Cập nhật các công nghệ mới liên tục.'
    ],
    advantages: [
      'Tư duy hệ thống tốt.',
      'Khả năng tập trung cao độ trong thời gian dài.',
      'Sự kiên nhẫn khi đối mặt với các bài toán khó.'
    ],
    salary: '20 - 50 Triệu VNĐ',
    aiCoach: 'Đừng chỉ học cú pháp, hãy học tư duy giải thuật. Một lập trình viên giỏi không phải là người biết nhiều ngôn ngữ nhất, mà là người giải quyết vấn đề tốt nhất.'
  },
  'Kỹ sư AI/Machine Learning': {
    description: 'Phát triển các thuật toán cho phép máy tính học hỏi từ dữ liệu và đưa ra dự đoán hoặc quyết định tự động.',
    responsibilities: [
      'Thiết kế và triển khai các mô hình Machine Learning/Deep Learning.',
      'Xử lý và tối ưu hóa tập dữ liệu lớn (Big Data).',
      'Nghiên cứu các bài báo khoa học mới nhất về AI.',
      'Triển khai mô hình vào môi trường sản xuất.'
    ],
    advantages: [
      'Nền tảng toán học và thống kê vững chắc.',
      'Sự tò mò không ngừng về cách trí tuệ nhân tạo hoạt động.',
      'Khả năng nghiên cứu độc lập.'
    ],
    salary: '30 - 80 Triệu VNĐ',
    aiCoach: 'Hãy nắm vững toán cao cấp và xác suất thống kê. Tham gia các cuộc thi trên Kaggle để tích lũy kinh nghiệm thực tế.'
  },
  'Chuyên viên Marketing': {
    description: 'Xây dựng chiến lược tiếp cận khách hàng, quảng bá thương hiệu và thúc đẩy doanh thu thông qua các kênh truyền thông đa dạng.',
    responsibilities: [
      'Nghiên cứu thị trường và đối thủ cạnh tranh.',
      'Lên kế hoạch nội dung và chiến dịch quảng cáo.',
      'Theo dõi và tối ưu hóa hiệu quả chiến dịch (ROI).',
      'Quản lý quan hệ với khách hàng và đối tác.'
    ],
    advantages: [
      'Khả năng thấu hiểu tâm lý khách hàng.',
      'Sự sáng tạo trong cách truyền đạt thông điệp.',
      'Kỹ năng giao tiếp và thuyết phục xuất sắc.'
    ],
    salary: '12 - 25 Triệu VNĐ',
    aiCoach: 'Marketing hiện đại cần sự kết hợp giữa sáng tạo và dữ liệu. Hãy học thêm về Digital Analytics để tối ưu hóa chiến dịch của bạn.'
  },
  'Giám đốc dự án (Project Manager)': {
    description: 'Người giữ vai trò kết nối, điều phối các nguồn lực (con người, ngân sách, thời gian) để đảm bảo dự án hoàn thành đúng mục tiêu.',
    responsibilities: [
      'Xác định phạm vi và mục tiêu của dự án.',
      'Lập kế hoạch chi tiết và phân bổ nhiệm vụ.',
      'Quản lý rủi ro và giải quyết mâu thuẫn.',
      'Báo cáo tiến độ cho các bên liên quan (stakeholders).'
    ],
    advantages: [
      'Kỹ năng lãnh đạo và truyền cảm hứng.',
      'Tư duy tổ chức và quản trị thời gian tuyệt vời.',
      'Khả năng chịu áp lực cao.'
    ],
    salary: '25 - 60 Triệu VNĐ',
    aiCoach: 'Chứng chỉ PMP hoặc Scrum Master sẽ là lợi thế lớn. Hãy rèn luyện kỹ năng lắng nghe và đàm phán.'
  }
  // ... rest of careers follow similar structure
};

/**
 * Generates a roadmap for a given career and prompt.
 * This is a simulated AI generation function.
 */
function generateCareerRoadmap(careerName, userPrompt = "") {
  const baseRoadmap = [
    { phase: "Giai đoạn 1: Nền tảng (0-6 tháng)", tasks: ["Tìm hiểu tổng quan về ngành", "Học các công cụ cơ bản", "Xây dựng tư duy cốt lõi"] },
    { phase: "Giai đoạn 2: Kỹ năng chuyên sâu (6-12 tháng)", tasks: ["Thực hiện dự án nhỏ", "Tham gia cộng đồng chuyên môn", "Học nâng cao"] },
    { phase: "Giai đoạn 3: Thực chiến (1-2 năm)", tasks: ["Thực tập hoặc làm dự án freelance", "Xây dựng Portfolio", "Luyện kỹ năng phỏng vấn"] }
  ];

  const roadmaps = {
    'Phân tích dữ liệu (Data Analyst)': [
      { phase: "Giai đoạn 1: Toán & Công cụ (1-3 tháng)", tasks: ["Học SQL từ cơ bản đến nâng cao", "Nắm vững Excel cho phân tích dữ liệu", "Học thống kê cơ bản cho kinh doanh"] },
      { phase: "Giai đoạn 2: Lập trình & Trực quan hóa (3-6 tháng)", tasks: ["Học Python (Pandas, Numpy, Matplotlib)", "Làm quen với Tableau hoặc Power BI", "Thực hành làm sạch dữ liệu thực tế"] },
      { phase: "Giai đoạn 3: Portfolio & Ứng tuyển (6-12 tháng)", tasks: ["Hoàn thiện 3 dự án phân tích dữ liệu trên Kaggle", "Xây dựng hồ sơ LinkedIn chuyên nghiệp", "Thực tập tại các công ty fintech hoặc thương mại điện tử"] }
    ],
    'Lập trình viên (Software Engineer)': [
      { phase: "Giai đoạn 1: Cấu trúc & Giải thuật (1-4 tháng)", tasks: ["Nắm vững một ngôn ngữ (Javascript/Java/Python)", "Học cấu trúc dữ liệu và giải thuật", "Hiểu về Git và quản lý mã nguồn"] },
      { phase: "Giai đoạn 2: Framework & Hệ sinh thái (4-8 tháng)", tasks: ["Học React/Next.js cho Frontend hoặc Node.js cho Backend", "Tìm hiểu về Database (SQL/NoSQL)", "Xây dựng ứng dụng Fullstack đơn giản"] },
      { phase: "Giai đoạn 3: Chuyên nghiệp hóa (8-15 tháng)", tasks: ["Tìm hiểu về Docker, Cloud (AWS/GCP)", "Học Unit Test và Clean Code", "Tham gia đóng góp Open Source"] }
    ]
  };

  let selected = roadmaps[careerName] || baseRoadmap;

  // Simulate prompt adjustments
  if (userPrompt.toLowerCase().includes("cấp tốc") || userPrompt.toLowerCase().includes("nhanh")) {
    selected = selected.map(p => ({
      ...p,
      phase: p.phase.replace(/\d+-\d+ tháng/, "Rút ngắn 50% thời gian"),
      tasks: [ ...p.tasks, "Tập trung cường độ cao (8-10 tiếng/ngày)"]
    }));
  }

  return selected;
}

// Global Exports
if (typeof window !== 'undefined') {
  window.careerData = careerData;
  window.traitData = traitData;
  window.specializedData = specializedData;
  window.generateCareerRoadmap = generateCareerRoadmap;
}
