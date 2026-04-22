document.addEventListener('DOMContentLoaded', () => {
    // ── CONFIGURATION & STATE ──
    const assessmentOverlay = document.getElementById('assessment-overlay');
    const resultsOverlay = document.getElementById('results-overlay');
    const questionContainer = document.getElementById('question-container');
    const progressFill = document.getElementById('progress-fill');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const ctaButton = document.getElementById('cta-button');
    const startAssessment = document.getElementById('start-assessment');
    const closeAssessment = document.getElementById('close-assessment');
    const restartBtn = document.getElementById('restart-assessment');

    const typewriterQuote = document.getElementById('typewriter-quote');
    const quoteText = typewriterQuote.getAttribute('data-text');

    let currentStep = 0;
    let answers = [];

    // ── TYPEWRITER EFFECT ──
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typewriterQuote.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="cursor"></span>';
            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback);
            }, 50);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    typeWriter(quoteText, 0);

    // ── ASSESSMENT DATA ──
    const questions = [
        // RIASEC
        { id: 1, text: "Tôi thích làm việc với các thiết bị kỹ thuật hoặc máy móc.", group: "technical" },
        { id: 2, text: "Tôi thích giải quyết các bài toán logic hoặc phân tích dữ liệu phức tạp.", group: "analyst" },
        { id: 3, text: "Tôi thích vẽ, thiết kế hoặc sáng tạo các tác phẩm nghệ thuật.", group: "creative" },
        { id: 4, text: "Tôi thích giúp đỡ người khác giải quyết các vấn đề cá nhân của họ.", group: "social" },
        { id: 5, text: "Tôi thích dẫn dắt một nhóm để đạt được mục tiêu chung.", group: "leader" },
        { id: 6, text: "Tôi thích làm việc với các con số, hồ sơ và quy trình rõ ràng.", group: "order" },
        // BIG FIVE
        { id: 7, text: "Tôi là người cởi mở và dễ dàng bắt chuyện với người lạ.", group: "extroversion" },
        { id: 8, text: "Tôi luôn chuẩn bị kỹ lưỡng và hoàn thành công việc đúng hạn.", group: "conscientiousness" },
        { id: 9, text: "Tôi thường xuyên tìm kiếm những trải nghiệm và ý tưởng mới.", group: "openness" },
        { id: 10, text: "Tôi là người biết lắng nghe và dễ đồng cảm với người khác.", group: "agreeableness" },
        { id: 11, text: "Tôi thường giữ được bình tĩnh ngay cả trong những tình huống áp lực.", group: "stability" },
        // SCHWARTZ
        { id: 12, text: "Sự an toàn của bản thân và gia đình là ưu tiên hàng đầu của tôi.", group: "security" },
        { id: 13, text: "Tôi luôn nỗ lực để đạt được thành công và sự công nhận từ xã hội.", group: "achievement" },
        { id: 14, text: "Tôi coi trọng sự tự do trong suy nghĩ và hành động.", group: "self-direction" },
        { id: 15, text: "Tôi luôn muốn đóng góp vào sự phát triển bền vững của cộng đồng.", group: "benevolence" }
    ];

    // ── CORE LOGIC ──
    function renderQuestion() {
        const q = questions[currentStep];
        questionContainer.innerHTML = `
            <div class="question-step" style="animation: fadeIn 0.5s ease;">
                <p class="question-count">Câu hỏi ${currentStep + 1} / ${questions.length}</p>
                <h2 class="question-text">${q.text}</h2>
                <div class="options-grid">
                    ${[1, 2, 3, 4, 5].map(val => `
                        <button class="option-btn ${answers[currentStep] === val ? 'active' : ''}" data-value="${val}">
                            ${val === 1 ? 'Hoàn toàn không' : val === 5 ? 'Hoàn toàn đồng ý' : val}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        const btns = questionContainer.querySelectorAll('.option-btn');
        btns.forEach(btn => {
            btn.onclick = () => {
                answers[currentStep] = parseInt(btn.getAttribute('data-value'));
                renderQuestion();
                setTimeout(nextQuestion, 300);
            };
        });

        progressFill.style.width = `${((currentStep + 1) / questions.length) * 100}%`;
        prevBtn.disabled = currentStep === 0;
        nextBtn.innerHTML = currentStep === questions.length - 1 ? "Xem kết quả" : "Tiếp theo";
    }

    function nextQuestion() {
        if (answers[currentStep] === undefined) return;
        if (currentStep < questions.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    function prevQuestion() {
        if (currentStep > 0) {
            currentStep--;
            renderQuestion();
        }
    }

    async function showResults() {
        assessmentOverlay.classList.remove('active');
        resultsOverlay.classList.add('active');

        const scores = {};
        questions.forEach((q, i) => {
            if (!scores[q.group]) scores[q.group] = 0;
            scores[q.group] += answers[i];
        });

        // Save results via API client
        if (typeof KareerAPI !== 'undefined') {
            await KareerAPI.saveAssessment({
                answers,
                scores,
                riasec: {
                    R: scores.technical || 0,
                    I: scores.analyst || 0,
                    A: scores.creative || 0,
                    S: scores.social || 0,
                    E: scores.leader || 0,
                    C: scores.order || 0
                },
                top_group: Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
            });
        }

        // Render charts (Placeholder for simplicity)
        document.getElementById('riasec-chart').innerHTML = `<p style="color:white">Nhóm nổi bật: ${Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b).toUpperCase()}</p>`;
        
        // Auto-redirect after delay to Step 2
        setTimeout(() => {
            window.location.href = '/Step 2/index.html';
        }, 3000);
    }

    // ── EVENT LISTENERS ──
    ctaButton.onclick = () => assessmentOverlay.classList.add('active');
    startAssessment.onclick = (e) => {
        e.preventDefault();
        assessmentOverlay.classList.add('active');
    };
    closeAssessment.onclick = () => assessmentOverlay.classList.remove('active');
    prevBtn.onclick = prevQuestion;
    nextBtn.onclick = nextQuestion;
    restartBtn.onclick = () => {
        resultsOverlay.classList.remove('active');
        currentStep = 0;
        answers = [];
        assessmentOverlay.classList.add('active');
        renderQuestion();
    };

    renderQuestion();
});