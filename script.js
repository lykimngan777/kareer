document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('typewriter-quote');
    const author = document.querySelector('.author');
    const buttonWrapper = document.querySelector('.button-wrapper');
    const quoteIconTop = document.querySelector('.quote-icon-top');
    const quoteIconBottom = document.querySelector('.quote-icon-bottom');
    const ctaButton = document.getElementById('cta-button');
    const startBtn = document.getElementById('start-assessment');
    const viewResultsBtn = document.getElementById('view-results-btn');
    const restartBtn = document.getElementById('restart-assessment');

    // Typewriter effect
    if (quoteText) {
        const text = quoteText.getAttribute('data-text');
        quoteText.innerHTML = '';

        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';

            const chars = word.split('');
            chars.forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
            });

            quoteText.appendChild(wordSpan);

            // Add space between words
            if (wordIndex < words.length - 1) {
                const space = document.createTextNode(' ');
                quoteText.appendChild(space);
            }
        });

        const allChars = document.querySelectorAll('.char');
        allChars.forEach((char, index) => {
            setTimeout(() => {
                char.classList.add('visible');
            }, 1000 + (index * 40));
        });

        // Show icons, author and button after typewriter
        setTimeout(() => {
            quoteIconTop.classList.add('visible');
            quoteIconBottom.classList.add('visible');
            author.style.opacity = '1';
            author.style.transform = 'translateY(0)';
            buttonWrapper.style.opacity = '1';
            buttonWrapper.style.transform = 'translateY(0)';
        }, 1000 + (allChars.length * 40) + 500);
    }

    // Dynamic Background Gradient
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);
    });

    // Assessment Logic
    const assessmentOverlay = document.getElementById('results-overlay'); // Using results overlay as placeholder for now
    const closeBtn = document.querySelector('.btn-close');

    function openAssessment() {
        // For demonstration, we just show the results overlay
        // In a real app, this would show the questionnaire
        if (assessmentOverlay) {
            assessmentOverlay.classList.add('active');
            renderCharts();
        }
    }

    // Check if results exist in localStorage
    const savedResults = localStorage.getItem('kareer_result');
    if (savedResults && viewResultsBtn) {
        viewResultsBtn.style.display = 'flex';
        viewResultsBtn.addEventListener('click', () => {
            openAssessment();
        });
    }

    function renderCharts() {
        const results = JSON.parse(localStorage.getItem('kareer_result')) || {
            riasec: { R: 85, I: 92, A: 78, S: 65, E: 70, C: 60 },
            bigfive: { O: 88, C: 75, E: 62, A: 80, N: 40 },
            schwartz: { SE: 90, CO: 70, TR: 60, BE: 85, UN: 92, SD: 88, ST: 65, HE: 75, AC: 82, PO: 55 }
        };

        renderBarChart('riasec-chart', results.riasec);
        renderBarChart('bigfive-chart', results.bigfive);
        renderBarChart('schwartz-chart', results.schwartz);
    }

    function renderBarChart(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';

        const maxVal = Math.max(...Object.values(data));

        Object.entries(data).forEach(([key, value]) => {
            const barWrapper = document.createElement('div');
            barWrapper.className = 'chart-bar-wrapper';

            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = '0%';

            const label = document.createElement('div');
            label.className = 'chart-bar-label';
            label.textContent = key;

            const valueLabel = document.createElement('div');
            valueLabel.className = 'chart-bar-value';
            valueLabel.textContent = value;

            bar.appendChild(valueLabel);
            barWrapper.appendChild(bar);
            barWrapper.appendChild(label);
            container.appendChild(barWrapper);

            // Animate
            setTimeout(() => {
                bar.style.height = `${(value / maxVal) * 100}%`;
            }, 100);
        });
    }

    // AI Analysis Statement Generator (Dynamic placeholder)
    const analysisText = document.getElementById('analysis-statement');
    if (analysisText) {
        const profile = JSON.parse(localStorage.getItem('kareer_profile')) || {};
        const results = JSON.parse(localStorage.getItem('kareer_result')) || {};

        generateAnalysisStatement(analysisText, profile, results);
    }

    function generateAnalysisStatement(textEl, profile, results) {
        const name = profile.name || "Bạn";
        const role = profile.role || "Người dùng";
        const interests = profile.interests || [];

        let intro = `Chào ${name}, phân tích từ Kareer AI cho thấy bạn là một người có bản sắc độc đáo.`;
        let body = "";
        let future = "";

        // 1. RIASEC High points
        if (results.riasec) {
            const topTwo = Object.entries(results.riasec)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 2);
            body = ` Với sự kết hợp mạnh mẽ giữa nhóm ${topTwo[0][0]} và ${topTwo[1][0]}, bạn sở hữu khả năng tư duy chiến lược cùng sự nhạy bén trong việc giải quyết vấn đề thực tế.`;
        }

        // 2. Personality
        if (results.bigfive && results.bigfive.O > 70) {
            body += " Chỉ số Cởi mở (Openness) cao khẳng định bạn là người luôn sẵn sàng đón nhận những ý tưởng mới và không ngừng sáng tạo.";
        }

        // 3. Interests & Future Goal
        const intStr = interests.length > 0 ? interests.join(', ') : "";
        if (intStr) {
            if (role === 'Người đi làm') {
                future = `Hiện tại, tôi đang tập trung chuyên sâu vào lĩnh vực ${intStr} với mục tiêu kiến tạo những giá trị đột phá và bền vững cho doanh nghiệp.`;
            } else {
                future = `Tôi luôn khao khát được dấn thân và phát triển trong mảng ${intStr}, nơi tôi có thể phát huy tối đa tư duy sáng tạo và khát vọng đóng góp của mình.`;
            }
        }

        // Combine
        let fullStatement = intro;
        if (body) fullStatement += " " + body;
        if (future) fullStatement += " " + future;

        textEl.textContent = fullStatement;
    }

    if (startBtn) startBtn.addEventListener('click', (e) => { e.preventDefault(); openAssessment(); });
    if (ctaButton) ctaButton.addEventListener('click', (e) => { e.preventDefault(); openAssessment(); });
    if (closeBtn) closeBtn.addEventListener('click', () => assessmentOverlay.classList.remove('active'));

    if (nextBtn) nextBtn.addEventListener('click', () => {
        // Validation: at least one tag in any category
        const hasContent = ['experience', 'education', 'skills', 'interests'].some(k => userAnswers[k].length > 0);
        if (!hasContent) {
            alert('Vui lòng thêm ít nhất một thông tin về bản thân!');
            return;
        }

        localStorage.setItem('kareer_profile', JSON.stringify(userAnswers));
        if (typeof KareerAPI !== 'undefined') {
            KareerAPI.saveUser(userAnswers).catch(() => { });
        }
        window.location.href = 'step2.html';
    });

    if (restartBtn) restartBtn.addEventListener('click', () => {
        if (resultsOverlay) resultsOverlay.classList.remove('active');
        openAssessment();
    });

    // Journey Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.journey-item').forEach(item => {
        journeyObserver.observe(item);
    });
});