const careerDatabase = [
    { name: "Kỹ sư phần mềm", code: "2512", riasec: ["I", "R"], salary: "18-55 triệu VNĐ", market: "ITviec: Nhu cầu ổn định, ưu tiên Full-stack và Cloud." },
    { name: "Chuyên viên Phân tích dữ liệu", code: "2511", riasec: ["I", "C"], salary: "15-45 triệu VNĐ", market: "Robert Walters: Tăng trưởng mạnh trong Tài chính và E-commerce." },
    { name: "Nhà thiết kế UX/UI", code: "2166", riasec: ["A", "I"], salary: "15-40 triệu VNĐ", market: "Reeracoen: Cần kỹ năng nghiên cứu người dùng sâu." },
    { name: "Quản lý Dự án IT", code: "2511", riasec: ["E", "C"], salary: "35-80 triệu VNĐ", market: "Robert Walters: Ưu tiên ứng viên có chứng chỉ PMP/Agile." },
    { name: "Chuyên viên Marketing số", code: "2431", riasec: ["E", "A"], salary: "12-35 triệu VNĐ", market: "LinkedIn: Xu hướng chuyển dịch sang Data-driven Marketing." },
    { name: "Kế toán trưởng", code: "2411", riasec: ["C", "E"], salary: "25-65 triệu VNĐ", market: "Adecco: Yêu cầu cao về tuân thủ và chứng chỉ quốc tế." },
    { name: "Chuyên viên Nhân sự", code: "2423", riasec: ["S", "E"], salary: "12-30 triệu VNĐ", market: "Manpower: Tập trung vào giữ chân nhân tài và văn hóa." },
    { name: "Kiến trúc sư", code: "2161", riasec: ["A", "R"], salary: "15-45 triệu VNĐ", market: "QĐ 34: Nhóm chuyên gia kỹ thuật bậc cao." },
    { name: "Bác sĩ Đa khoa", code: "2211", riasec: ["I", "S"], salary: "25-100 triệu VNĐ", market: "Thị trường: Y tế tư nhân đang mở rộng mạnh mẽ." },
    { name: "Chuyên viên Tư vấn Tài chính", code: "2412", riasec: ["E", "I"], salary: "20-120 triệu+ VNĐ", market: "Robert Walters: Thu nhập đột phá theo doanh số." },
    { name: "Nhà tâm lý học", code: "2634", riasec: ["S", "I"], salary: "15-35 triệu VNĐ", market: "Xu hướng: Dịch vụ tham vấn học đường và doanh nghiệp." },
    { name: "Kỹ sư Cơ khí", code: "2144", riasec: ["R", "I"], salary: "15-40 triệu VNĐ", market: "Reeracoen: Nhu cầu cao tại các KCN miền Bắc và Nam." },
    { name: "Kiểm toán viên", code: "2411", riasec: ["C", "I"], salary: "12-50 triệu VNĐ", market: "Big4: Lộ trình thăng tiến rõ ràng, áp lực cao." },
    { name: "Chuyên viên PR & Truyền thông", code: "2432", riasec: ["E", "S"], salary: "15-40 triệu VNĐ", market: "VietnamWorks: Cần mạng lưới báo chí và KOLs rộng." },
    { name: "Lập trình viên AI/ML", code: "2512", riasec: ["I", "R"], salary: "45-130 triệu VNĐ", market: "ITviec: Cạnh tranh toàn cầu, cực kỳ khan hiếm." },
    { name: "Quản lý Chuỗi cung ứng", code: "1324", riasec: ["C", "E"], salary: "35-90 triệu VNĐ", market: "Robert Walters: Vai trò chiến lược trong chuyển dịch FDI." },
    { name: "Nhà thiết kế thời trang", code: "2163", riasec: ["A", "R"], salary: "12-45 triệu VNĐ", market: "QĐ 34: Nhóm thiết kế sản phẩm và may mặc." },
    { name: "Giáo viên Tiếng Anh", code: "2353", riasec: ["S", "A"], salary: "15-45 triệu VNĐ", market: "Thị trường: Ưu tiên chứng chỉ IELTS/TESOL quốc tế." },
    { name: "Chuyên viên Luật", code: "2611", riasec: ["I", "C"], salary: "15-55 triệu VNĐ", market: "Navigos: Nhu cầu cao trong M&A và tuân thủ doanh nghiệp." },
    { name: "Doanh nhân / Founder", code: "1120", riasec: ["E", "A"], salary: "Vô hạn", market: "Startup: Hệ sinh thái khởi nghiệp Việt Nam năng động." },
    { name: "Quản lý Khách sạn", code: "1411", riasec: ["E", "S"], salary: "25-70 triệu VNĐ", market: "Reeracoen: Phục hồi mạnh tại các thủ phủ du lịch." },
    { name: "Nhà khoa học dữ liệu", code: "2120", riasec: ["I", "R"], salary: "35-100 triệu VNĐ", market: "Robert Walters: Kỹ năng cốt lõi của kỷ nguyên số." },
    { name: "Kỹ sư Điện", code: "2151", riasec: ["R", "I"], salary: "15-35 triệu VNĐ", market: "QĐ 34: Lĩnh vực năng lượng tái tạo đang khát nhân lực." },
    { name: "Chuyên viên SEO", code: "2431", riasec: ["I", "E"], salary: "10-25 triệu VNĐ", market: "LinkedIn: Cần am hiểu thuật toán và phân tích dữ liệu." },
    { name: "Copywriter", code: "2641", riasec: ["A", "E"], salary: "10-30 triệu VNĐ", market: "VietnamWorks: Sáng tạo nội dung vẫn là trọng tâm của Marketing." },
    { name: "Nhà báo", code: "2642", riasec: ["A", "S"], salary: "8-25 triệu VNĐ", market: "Xu hướng: Chuyển dịch sang báo chí đa phương tiện." },
    { name: "Tiếp viên hàng không", code: "5111", riasec: ["S", "E"], salary: "15-45 triệu VNĐ", market: "Thị trường: Hàng không đang phục hồi mạnh mẽ sau dịch." },
    { name: "Hướng dẫn viên du lịch", code: "5113", riasec: ["S", "E"], salary: "10-30 triệu VNĐ", market: "Reeracoen: Ưu tiên ứng viên sử dụng được nhiều ngoại ngữ." },
    { name: "Dược sĩ", code: "2262", riasec: ["I", "C"], salary: "12-40 triệu VNĐ", market: "QĐ 34: Chuỗi nhà thuốc hiện đại đang mở rộng quy mô." },
    { name: "Kỹ sư Xây dựng", code: "2142", riasec: ["R", "E"], salary: "12-35 triệu VNĐ", market: "Manpower: Nhu cầu cao tại các dự án hạ tầng lớn." },
    { name: "Chuyên viên Logistics", code: "3331", riasec: ["C", "R"], salary: "10-25 triệu VNĐ", market: "VietnamWorks: Cần kỹ năng quản lý kho và vận tải." },
    { name: "Nhà thiết kế Nội thất", code: "2166", riasec: ["A", "R"], salary: "12-40 triệu VNĐ", market: "Adecco: Nhu cầu cao trong mảng nhà ở cao cấp và văn phòng." },
    { name: "Biên dịch viên", code: "2643", riasec: ["A", "I"], salary: "10-30 triệu VNĐ", market: "Navigos: Cần chuyên môn sâu trong các lĩnh vực kỹ thuật/pháp lý." },
    { name: "Nhiếp ảnh gia", code: "3431", riasec: ["A", "R"], salary: "10-50 triệu VNĐ", market: "Thị trường: Tự do hóa và cá nhân hóa dịch vụ hình ảnh." },
    { name: "Quản lý Sự kiện", code: "1439", riasec: ["E", "S"], salary: "15-40 triệu VNĐ", market: "LinkedIn: Sự kiện trực tuyến và trực tiếp đang kết hợp (Hybrid)." },
    { name: "Chuyên viên Phân tích Nghiệp vụ (BA)", code: "2511", riasec: ["I", "E"], salary: "20-50 triệu VNĐ", market: "ITviec: Cầu nối quan trọng giữa kinh doanh và kỹ thuật." },
    { name: "Kiểm thử Phần mềm (Tester)", code: "2519", riasec: ["C", "I"], salary: "12-35 triệu VNĐ", market: "Navigos: Chuyển dịch từ Manual sang Automation Testing." },
    { name: "Quản trị Cơ sở Dữ liệu", code: "2521", riasec: ["C", "I"], salary: "20-55 triệu VNĐ", market: "Robert Walters: Ưu tiên kinh nghiệm về Big Data và NoSQL." },
    { name: "Kỹ sư Môi trường", code: "2143", riasec: ["I", "R"], salary: "12-30 triệu VNĐ", market: "QĐ 34: Xu hướng ESG đang tạo ra nhiều việc làm mới." },
    { name: "Nhà hoạt động xã hội", code: "2635", riasec: ["S", "A"], salary: "8-20 triệu VNĐ", market: "Thị trường: Các tổ chức phi chính phủ (NGO) đang mở rộng." },
    { name: "Giảng viên Đại học", code: "2310", riasec: ["I", "S"], salary: "15-45 triệu VNĐ", market: "Navigos: Ưu tiên ứng viên có bằng Tiến sĩ và công bố quốc tế." },
    { name: "Chuyên viên Nghiên cứu Thị trường", code: "2431", riasec: ["I", "E"], salary: "15-35 triệu VNĐ", market: "Nielsen: Vai trò then chốt trong định hướng kinh doanh." },
    { name: "Nhà phân tích rủi ro", code: "2412", riasec: ["I", "C"], salary: "20-60 triệu VNĐ", market: "Robert Walters: Khan hiếm nhân sự trong mảng Ngân hàng/Bảo hiểm." },
    { name: "Chuyên viên Thuế", code: "2411", riasec: ["C", "I"], salary: "12-35 triệu VNĐ", market: "Adecco: Nhu cầu cao tại các công ty đa quốc gia." }
];
const timelineData = {
    'default': [
        { title: "Thực tập / Học viên", time: "0-1 năm", desc: "Làm quen với môi trường chuyên nghiệp và các công cụ cơ bản.", tasks: ["Nắm vững công cụ cốt lõi", "Học hỏi quy trình làm việc", "Hỗ trợ các dự án nhỏ", "Xây dựng portfolio cá nhân"] },
        { title: "Nhân viên chính thức", time: "1-3 năm", desc: "Trực tiếp thực hiện các nhiệm vụ chuyên môn và chịu trách nhiệm về kết quả.", tasks: ["Quản lý đầu việc độc lập", "Phát triển kỹ năng chuyên sâu", "Phối hợp làm việc nhóm", "Giải quyết vấn đề phát sinh"] },
        { title: "Chuyên viên cao cấp", time: "3-6 năm", desc: "Dẫn dắt các dự án quan trọng và cố vấn cho nhân sự trẻ hơn.", tasks: ["Lãnh đạo dự án nhỏ", "Tối ưu hóa quy trình", "Đưa ra các giải pháp chiến lược", "Đào tạo nhân sự mới"] },
        { title: "Quản lý / Chuyên gia", time: "6 năm+", desc: "Định hướng chiến lược và quản lý tài nguyên của tổ chức.", tasks: ["Xây dựng tầm nhìn dài hạn", "Quản lý đội ngũ nhân sự", "Ra quyết định quan trọng", "Đại diện tổ chức"] }
    ],
    'Kỹ sư phần mềm': [
        { title: "Intern/Fresher", time: "0-1 năm", desc: "Học ngôn ngữ lập trình, cấu trúc dữ liệu và giải thuật.", tasks: ["Cắt layout/Viết logic cơ bản", "Học Git & Workflow", "Sửa lỗi (Bug fixing)", "Viết Unit Test"] },
        { title: "Junior Developer", time: "1-3 năm", desc: "Làm chủ Framework và tham gia xây dựng tính năng.", tasks: ["Phát triển tính năng mới", "Tối ưu hóa code", "Review code cho đồng nghiệp", "Tìm hiểu về System Design"] },
        { title: "Senior Developer", time: "3-6 năm", desc: "Thiết kế kiến trúc hệ thống và giải quyết bài toán khó.", tasks: ["Thiết kế Database/Architecture", "Mentor cho Junior", "Đảm bảo hiệu năng hệ thống", "Lựa chọn công nghệ mới"] },
        { title: "Tech Lead / CTO", time: "6 năm+", desc: "Dẫn dắt đội ngũ kỹ thuật và định hướng sản phẩm.", tasks: ["Quản lý đội ngũ kỹ sư", "Đưa ra quyết định công nghệ", "Cân bằng giữa kinh doanh & kỹ thuật", "Xây dựng văn hóa kỹ thuật"] }
    ],
    'Nhà thiết kế UX/UI': [
        { title: "Intern Designer", time: "0-6 tháng", desc: "Học Figma, Design Thinking và UI Audit.", tasks: ["Nắm vững Figma", "Học Design Thinking", "Làm quen Agile", "Hỗ trợ UI Audit"] },
        { title: "Junior Designer", time: "6-24 tháng", desc: "Thiết kế User Flow và Wireframe.", tasks: ["Thiết kế User Flow", "Tạo Wireframe", "Usability Testing", "Component Library"] },
        { title: "Senior Designer", time: "2-5 năm", desc: "Xây dựng Design System phức tạp.", tasks: ["Xây dựng Design System", "Phân tích dữ liệu", "Tối ưu chuyển đổi", "Phản biện thiết kế"] },
        { title: "Design Lead", time: "5 năm+", desc: "Định hướng chiến lược thiết kế.", tasks: ["Chiến lược sản phẩm", "Quản lý nguồn lực", "Đào tạo đội ngũ", "Tầm nhìn thương hiệu"] }
    ]
};
const roadmapData = {
    'default': [
        { title: "Kỹ năng chuyên môn cơ bản", provider: "Coursera / Udemy", desc: "Nắm vững các kiến thức nền tảng nhất của ngành.", tag: "Nền tảng" },
        { title: "Công cụ làm việc chuyên nghiệp", provider: "Linkedin Learning", desc: "Làm chủ các phần mềm và công cụ hỗ trợ công việc.", tag: "Công cụ" },
        { title: "Tư duy giải quyết vấn đề", provider: "EdX", desc: "Phát triển khả năng phân tích và xử lý tình huống.", tag: "Tư duy" },
        { title: "Kỹ năng mềm & Giao tiếp", provider: "Skillshare", desc: "Cải thiện khả năng làm việc nhóm và truyền đạt ý tưởng.", tag: "Kỹ năng mềm" }
    ],
    'Kỹ sư phần mềm': [
        { title: "Data Structures & Algorithms", provider: "LeetCode", desc: "Nền tảng tư duy lập trình và tối ưu mã nguồn.", tag: "Nền tảng" },
        { title: "Modern Web Development", provider: "FreeCodeCamp", desc: "Làm chủ React, Node.js và các công nghệ hiện đại.", tag: "Kỹ thuật" }
    ],
    'Nhà thiết kế UX/UI': [
        { title: "Google UX Design Professional", provider: "Coursera", desc: "Chương trình đào tạo toàn diện về trải nghiệm người dùng.", tag: "Chứng chỉ" },
        { title: "Advanced Prototyping in Figma", provider: "Figma Academy", desc: "Kỹ thuật tạo mẫu tương tác cao cấp.", tag: "Kỹ thuật" }
    ],
    'Chuyên viên Phân tích dữ liệu': [
        { title: "Data Analyst Professional", provider: "Google", desc: "Học cách thu thập, làm sạch và trực quan hóa dữ liệu.", tag: "Chứng chỉ" },
        { title: "SQL for Data Science", provider: "Khan Academy", desc: "Làm chủ ngôn ngữ truy vấn dữ liệu mạnh mẽ nhất.", tag: "Kỹ thuật" }
    ]
};
function getCareerTimeline(name) { return timelineData[name] || timelineData['default']; }
function getCareerRoadmap(name) { return roadmapData[name] || roadmapData['default']; }
