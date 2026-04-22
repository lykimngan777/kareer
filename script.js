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
    
    // Preparation
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
        const typingSpeed = 30; 

        function drawText() {
            if (currentIndex < characters.length) {
                characters[currentIndex].classList.add('visible');
                currentIndex++;
                setTimeout(drawText, charTypeDelay(characters[currentIndex-1].textContent));
            } else {
                quoteIconBottom.classList.add('visible');
                setTimeout(() => {
                    authorElement.style.opacity = '1';
                    authorElement.style.transform = 'translateY(0)';
                    buttonWrapper.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
                    buttonWrapper.style.opacity = '1';
                    buttonWrapper.style.transform = 'translateY(0)';
                    document.body.style.overflowY = 'auto';
                    if (featuresSection) featuresSection.classList.add('visible');
                    if (stepsSection) {
                        stepsSection.style.opacity = '1';
                        stepsSection.style.transform = 'translateY(0)';
                    }
                }, 600);
            }
        }

        function charTypeDelay(char) {
            if (char === '\u00A0') return 80;
            if (char === ',' || char === '.') return 200;
            return typingSpeed + (Math.random() * 20);
        }

        setTimeout(() => {
            quoteIconTop.classList.add('visible');
            setTimeout(drawText, 800);
        }, 400);
    }

    // Mouse Tracking
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);
    });

    // Assessment Logic
    const assessmentOverlay = document.getElementById('assessment-overlay');
    const startBtn = document.getElementById('start-assessment');
    const closeBtn = document.getElementById('close-assessment');
    const progressFill = document.getElementById('progress-fill');
    const questionContainer = document.getElementById('question-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const questions = [
        { id: 'contact', model: 'THÔNG TIN', type: 'profile', text: 'Email của bạn là gì?' },
        { id: 'role', model: 'CÁ NHÂN', type: 'choice', text: 'Bạn hiện đang là:', options: ['Học sinh', 'Sinh viên', 'Người đi làm'] },
        { id: 'subjects', model: 'HỌC TẬP', type: 'text', text: 'Các môn học bạn thấy mình học tốt?', condition: (a) => a.role === 'Học sinh' },
        { id: 'major', model: 'CHUYÊN NGÀNH', type: 'text', text: 'Bạn đang học ngành gì?', condition: (a) => a.role === 'Sinh viên' },
        { id: 'position', model: 'CÔNG VIỆC', type: 'text', text: 'Vị trí công việc hiện tại?', condition: (a) => a.role === 'Người đi làm' },
        { id: 'skills', model: 'KỸ NĂNG', type: 'text', text: 'Bạn có những kĩ năng nổi bật nào?' },
        { id: 'interests', model: 'QUAN TÂM', type: 'text', text: 'Bạn quan tâm đến lĩnh vực nào?' }
    ];

    let currentIdx = 0;
    let answers = {};

    function getVisible() { return questions.filter(q => !q.condition || q.condition(answers)); }

    function showQ() {
        const vis = getVisible();
        const q = vis[currentIdx];
        const pct = ((currentIdx + 1) / vis.length) * 100;
        if (progressFill) progressFill.style.width = `${pct}%`;

        let html = `<div class="question-fade"><span class="model-tag">${q.model}</span><h2 class="question-text">${q.text}</h2>`;
        if (q.type === 'profile') {
            html += `<input type="email" id="email-in" class="assessment-input" value="${answers.email || ''}" placeholder="email@example.com">`;
        } else if (q.type === 'choice') {
            html += `<div class="options-group">${q.options.map(o => `<div class="option-item ${answers[q.id] === o ? 'selected' : ''}" data-val="${o}">${o}</div>`).join('')}</div>`;
        } else {
            html += `<textarea id="text-in" class="assessment-input" placeholder="Trả lời...">${answers[q.id] || ''}</textarea>`;
        }
        html += `</div>`;
        questionContainer.innerHTML = html;

        questionContainer.querySelectorAll('.option-item').forEach(item => {
            item.onclick = () => {
                answers[q.id] = item.dataset.val;
                setTimeout(() => { if (currentIdx < vis.length - 1) { currentIdx++; showQ(); } else { nextBtn.click(); } }, 300);
            };
        });
        
        const ti = document.getElementById('text-in');
        if (ti) ti.oninput = (e) => answers[q.id] = e.target.value;
        const ei = document.getElementById('email-in');
        if (ei) ei.oninput = (e) => { answers.email = e.target.value; answers.contact = { email: e.target.value }; };

        prevBtn.disabled = currentIdx === 0;
        nextBtn.textContent = currentIdx === vis.length - 1 ? 'BẮT ĐẦU' : 'TIẾP THEO';
    }

    if (startBtn) startBtn.onclick = () => { assessmentOverlay.classList.add('active'); currentIdx = 0; answers = {}; showQ(); };
    if (ctaButton) ctaButton.onclick = () => { assessmentOverlay.classList.add('active'); currentIdx = 0; answers = {}; showQ(); };
    if (closeBtn) closeBtn.onclick = () => assessmentOverlay.classList.remove('active');
    
    prevBtn.onclick = () => { if (currentIdx > 0) { currentIdx--; showQ(); } };
    nextBtn.onclick = () => {
        const vis = getVisible();
        if (currentIdx < vis.length - 1) { currentIdx++; showQ(); }
        else {
            localStorage.setItem('kareer_profile', JSON.stringify(answers));
            window.location.href = 'Step 2/index.html';
        }
    };
});
