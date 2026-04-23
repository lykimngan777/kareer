document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('typewriter-quote');
    const quoteIconTop = document.querySelector('.quote-icon-top');
    const quoteIconBottom = document.querySelector('.quote-icon-bottom');
    const authorElement = document.querySelector('.author');
    const buttonWrapper = document.querySelector('.button-wrapper');
    const ctaButton = document.getElementById('cta-button');
    const featuresSection = document.getElementById('features');
    const stepsSection = document.getElementById('steps');
    const stepCards = document.querySelectorAll('.step-card');
    
    if (quoteElement) {
        const textToType = quoteElement.getAttribute('data-text');
        quoteElement.innerHTML = '';
        textToType.split(' ').forEach((word, index, array) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            word.split('').forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.className = 'char';
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
            });
            quoteElement.appendChild(wordSpan);
            if (index < array.length - 1) {
                const space = document.createElement('span');
                space.className = 'char';
                space.textContent = '\u00A0';
                quoteElement.appendChild(space);
            }
        });
        const characters = quoteElement.querySelectorAll('.char');
        let currentIndex = 0;
        function drawText() {
            if (currentIndex < characters.length) {
                characters[currentIndex].classList.add('visible');
                currentIndex++;
                setTimeout(drawText, 30);
            } else {
                quoteIconBottom?.classList.add('visible');
                setTimeout(() => {
                    authorElement.style.opacity = '1';
                    authorElement.style.transform = 'translateY(0)';
                    buttonWrapper.style.opacity = '1';
                    buttonWrapper.style.transform = 'translateY(0)';
                    document.body.style.overflowY = 'auto';
                    featuresSection?.classList.add('visible');
                }, 600);
            }
        }
        setTimeout(() => { quoteIconTop?.classList.add('visible'); setTimeout(drawText, 800); }, 400);
    }

    const assessmentOverlay = document.getElementById('assessment-overlay');
    const startBtn = document.getElementById('start-assessment');
    const closeBtn = document.getElementById('close-assessment');
    const questionContainer = document.getElementById('question-container');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    let currentQuestionIndex = 0;
    let userAnswers = {};
    const questions = [
        { id: 'contact', model: 'THÔNG TIN', type: 'profile', text: 'Cho chúng tôi biết thêm về bạn' },
        { id: 'role', model: 'CÁ NHÂN', type: 'choice', text: 'Bạn hiện đang là:', options: ['Học sinh', 'Sinh viên', 'Người đi làm'] },
        { id: 'skills', model: 'KỸ NĂNG', type: 'text', text: 'Bạn có những kĩ năng nổi bật nào?' },
        { id: 'interests', model: 'QUAN TÂM', type: 'text', text: 'Bạn có mối quan tâm đặc biệt với các lĩnh vực nào?' }
    ];

    const showQuestion = () => {
        const q = questions[currentQuestionIndex];
        questionContainer.innerHTML = `<h3>${q.text}</h3>`;
        if (q.type === 'choice') {
            q.options.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = 'option-item';
                btn.textContent = opt;
                btn.onclick = () => { userAnswers[q.id] = opt; currentQuestionIndex++; showQuestion(); };
                questionContainer.appendChild(btn);
            });
        } else if (q.type === 'profile') {
            questionContainer.innerHTML += `<input type="email" id="email-input" placeholder="Email của bạn">`;
        } else {
            questionContainer.innerHTML += `<textarea id="text-input" placeholder="Câu trả lời..."></textarea>`;
        }
        if (currentQuestionIndex >= questions.length) {
            window.location.href = 'step2.html';
        }
    };

    if (startBtn) startBtn.onclick = () => { assessmentOverlay.classList.add('active'); showQuestion(); };
    if (ctaButton) ctaButton.onclick = () => { assessmentOverlay.classList.add('active'); showQuestion(); };
    if (closeBtn) closeBtn.onclick = () => assessmentOverlay.classList.remove('active');
});
