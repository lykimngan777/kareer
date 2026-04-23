// Career Explorer Logic - Satellite Orbit Metaphor
document.addEventListener('DOMContentLoaded', () => {
    const careerNodesContainer = document.getElementById('career-nodes');
    
    const quizResult = JSON.parse(localStorage.getItem('kareer_result') || '{}');
    const userScores = quizResult.scores || {}; 
    
    const groupToRiasec = {
        technical: 'R', analyst: 'I', creative: 'A', social: 'S', leader: 'E', order: 'C'
    };

    const userRiasec = {};
    Object.keys(groupToRiasec).forEach(group => {
        userRiasec[groupToRiasec[group]] = userScores[group] || 0;
    });

    const careerDatabase = [
        { name: "Kỹ sư phần mềm", code: "2512", riasec: ["I", "R"], salary: "18-55 triệu VNĐ", market: "ITviec: Nhu cầu ổn định." },
        { name: "Chuyên viên Phân tích dữ liệu", code: "2511", riasec: ["I", "C"], salary: "15-45 triệu VNĐ", market: "Mạnh trong Tài chính." },
        { name: "Nhà thiết kế UX/UI", code: "2166", riasec: ["A", "I"], salary: "15-40 triệu VNĐ", market: "Cần kỹ năng nghiên cứu sâu." },
        { name: "Quản lý Dự án IT", code: "2511", riasec: ["E", "C"], salary: "35-80 triệu VNĐ", market: "Ưu tiên PMP/Agile." },
        { name: "Chuyên viên Marketing số", code: "2431", riasec: ["E", "A"], salary: "12-35 triệu VNĐ", market: "Xu hướng Data-driven." },
        { name: "Kế toán trưởng", code: "2411", riasec: ["C", "E"], salary: "25-65 triệu VNĐ", market: "Yêu cầu chứng chỉ quốc tế." },
        { name: "Chuyên viên Nhân sự", code: "2423", riasec: ["S", "E"], salary: "12-30 triệu VNĐ", market: "Tập trung văn hóa doanh nghiệp." },
        { name: "Kiến trúc sư", code: "2161", riasec: ["A", "R"], salary: "15-45 triệu VNĐ", market: "Nhóm chuyên gia kỹ thuật cao." },
        { name: "Bác sĩ Đa khoa", code: "2211", riasec: ["I", "S"], salary: "25-100 triệu VNĐ", market: "Y tế tư nhân mở rộng." },
        { name: "Chuyên viên Tư vấn Tài chính", code: "2412", riasec: ["E", "I"], salary: "20-120 triệu+ VNĐ", market: "Đột phá theo doanh số." },
        { name: "Nhà tâm lý học", code: "2634", riasec: ["S", "I"], salary: "15-35 triệu VNĐ", market: "Xu hướng tham vấn doanh nghiệp." },
        { name: "Kỹ sư Cơ khí", code: "2144", riasec: ["R", "I"], salary: "15-40 triệu VNĐ", market: "Nhu cầu cao tại KCN." },
        { name: "Kiểm toán viên", code: "2411", riasec: ["C", "I"], salary: "12-50 triệu VNĐ", market: "Lộ trình thăng tiến rõ ràng." },
        { name: "Chuyên viên PR & Truyền thông", code: "2432", riasec: ["E", "S"], salary: "15-40 triệu VNĐ", market: "Cần mạng lưới rộng." },
        { name: "Lập trình viên AI/ML", code: "2512", riasec: ["I", "R"], salary: "45-130 triệu VNĐ", market: "Cực kỳ khan hiếm." },
        { name: "Quản lý Chuỗi cung ứng", code: "1324", riasec: ["C", "E"], salary: "35-90 triệu VNĐ", market: "Vai trò chiến lược." },
        { name: "Nhà thiết kế thời trang", code: "2163", riasec: ["A", "R"], salary: "12-45 triệu VNĐ", market: "Thiết kế may mặc." },
        { name: "Giáo viên Tiếng Anh", code: "2353", riasec: ["S", "A"], salary: "15-45 triệu VNĐ", market: "Ưu tiên IELTS/TESOL." },
        { name: "Chuyên viên Luật", code: "2611", riasec: ["I", "C"], salary: "15-55 triệu VNĐ", market: "Nhu cầu M&A cao." },
        { name: "Doanh nhân / Founder", code: "1120", riasec: ["E", "A"], salary: "Vô hạn", market: "Hệ sinh thái năng động." },
        { name: "Quản lý Khách sạn", code: "1411", riasec: ["E", "S"], salary: "25-70 triệu VNĐ", market: "Phục hồi du lịch." },
        { name: "Nhà khoa học dữ liệu", code: "2120", riasec: ["I", "R"], salary: "35-100 triệu VNĐ", market: "Kỹ năng kỷ nguyên số." }
    ];

    const reasons = {
        "Very High": "Phù hợp tuyệt đối với RIASEC của bạn.",
        "High": "Sự kết hợp hoàn hảo giữa đam mê và năng lực.",
        "Medium": "Có tiềm năng phát triển.",
        "Low": "Cần nỗ lực thích nghi.",
        "Very Low": "Môi trường làm việc đặc thù."
    };

    function calculateFit(career) {
        let score = 0;
        career.riasec.forEach((code, index) => {
            const weight = index === 0 ? 1.0 : 0.6;
            score += (userRiasec[code] || 0) * weight;
        });
        const normalized = (score / 160) * 100;
        if (normalized >= 85) return "Very High";
        if (normalized >= 70) return "High";
        if (normalized >= 50) return "Medium";
        if (normalized >= 30) return "Low";
        return "Very Low";
    }

    function placeNodes() {
        if (!careerNodesContainer) return;
        careerNodesContainer.innerHTML = '';
        const processedCareers = careerDatabase.map(c => ({ ...c, fit: calculateFit(c) }));
        const width = window.innerWidth, height = window.innerHeight;

        const fitLevels = [
            { level: "Very High", label: "Rất cao", r: 32 },
            { level: "High", label: "Cao", r: 50 },
            { level: "Medium", label: "Trung bình", r: 68 },
            { level: "Low", label: "Thấp", r: 86 },
            { level: "Very Low", label: "Rất thấp", r: 104 }
        ];

        fitLevels.forEach((fitData) => {
            const items = processedCareers.filter(c => c.fit === fitData.level);
            items.forEach((career) => {
                const angle = Math.random() * Math.PI * 2;
                const rXPct = (fitData.r * height / width), rYPct = fitData.r;
                const x = 50 + rXPct * Math.cos(angle), y = 50 + rYPct * Math.sin(angle);

                const wrapper = document.createElement('div');
                wrapper.className = 'node-wrapper';
                wrapper.style.left = `${x}%`;
                wrapper.style.top = `${y}%`;
                const fitClass = fitData.level.toLowerCase().replace(' ', '-');
                wrapper.innerHTML = `
                    <div class="career-node">
                        <div class="node-dot ${fitClass}"></div>
                        <div class="node-label">${career.name}</div>
                    </div>
                `;
                careerNodesContainer.appendChild(wrapper);
                wrapper.onclick = () => {
                    localStorage.setItem('selectedCareer', career.name);
                    location.href = `timeline.html?career=${encodeURIComponent(career.name)}`;
                };
            });
        });
    }
    placeNodes();
});
