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
        let typingTimeout;
        let isSkipped = false;

        function finishSequence() {
            if (isSkipped) return;
            
            clearTimeout(typingTimeout);
            isSkipped = true;
            
            // Show all characters
            characters.forEach(char => char.classList.add('visible'));
            currentIndex = characters.length;

            // Trigger final animations
            quoteIconBottom.classList.add('visible');
            setTimeout(() => {
                authorElement.style.opacity = '1';
                authorElement.style.transform = 'translateY(0)';

                buttonWrapper.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
                buttonWrapper.style.opacity = '1';
                buttonWrapper.style.transform = 'translateY(0)';
                buttonWrapper.style.flexDirection = 'column';
                buttonWrapper.style.alignItems = 'center';

                // Check for saved results to show the view results button
                const savedResults = localStorage.getItem('kareer_answers');
                const viewResultsBtn = document.getElementById('view-results-btn');
                const restoreBtn = document.getElementById('restore-data-btn');

                if (savedResults && viewResultsBtn) {
                    viewResultsBtn.style.display = 'flex';
                    viewResultsBtn.addEventListener('click', () => {
                        window.location.href = 'step2.html';
                    });
                    if (restoreBtn) restoreBtn.style.display = 'none';
                } else if (restoreBtn) {
                    restoreBtn.style.display = 'flex';
                    restoreBtn.addEventListener('click', async () => {
                        const email = prompt('Nhập email bạn đã sử dụng để lưu kết quả:');
                        if (!email) return;

                        if (typeof KareerAPI !== 'undefined') {
                            const btnText = restoreBtn.querySelector('.btn-text');
                            const originalText = btnText.textContent;
                            btnText.textContent = 'Đang tìm...';
                            
                            try {
                                const user = await KareerAPI.loadUser(email);
                                if (user && user.id) {
                                    const assessment = await KareerAPI.loadLatestAssessment(user.id);
                                    if (assessment) {
                                        alert('Khôi phục dữ liệu thành công!');
                                        window.location.href = 'step2.html';
                                    } else {
                                        alert('Đã tìm thấy thông tin cá nhân nhưng chưa có kết quả bài test.');
                                        window.location.reload();
                                    }
                                } else {
                                    alert('Không tìm thấy dữ liệu cho email này.');
                                }
                            } catch (err) {
                                alert('Có lỗi xảy ra khi khôi phục: ' + err.message);
                            } finally {
                                btnText.textContent = originalText;
                            }
                        }
                    });
                }

                document.body.style.overflowY = 'auto';
                if (featuresSection) {
                    featuresSection.classList.add('visible');
                }
                if (stepsSection) {
                    stepsSection.style.opacity = '1';
                    stepsSection.style.transform = 'translateY(0)';
                }
            }, 600);
        }

        function drawText() {
            if (isSkipped) return;
            
            if (currentIndex < characters.length) {
                characters[currentIndex].classList.add('visible');
                currentIndex++;
                typingTimeout = setTimeout(drawText, charTypeDelay(characters[currentIndex - 1].textContent));
            } else {
                finishSequence();
            }
        }

        function charTypeDelay(char) {
            if (char === '\u00A0') return 80;
            if (char === ',' || char === '.') return 200;
            return typingSpeed + (Math.random() * 20);
        }

        // Skip on click
        document.addEventListener('click', (e) => {
            if (currentIndex < characters.length && !isSkipped) {
                // Ensure we don't skip if clicking specific interactive elements if needed, 
                // but usually for a hero section skipping is fine on any click.
                finishSequence();
            }
        });

        // Start Sequence
        setTimeout(() => {
            quoteIconTop.classList.add('visible');
            setTimeout(drawText, 800);
        }, 400);
    }

    // Mouse Tracking Effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);

        const quoteWrapper = document.querySelector('.quote-wrapper');
        if (quoteWrapper) {
            const shiftX = (e.clientX / window.innerWidth - 0.5) * 10;
            const shiftY = (e.clientY / window.innerHeight - 0.5) * 10;
            quoteWrapper.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        }
    });

    // Step Cards Animation on Scroll
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    stepCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`;
        cardObserver.observe(card);
    });

    // Assessment Elements
    const assessmentOverlay = document.getElementById('assessment-overlay');
    const resultsOverlay = document.getElementById('results-overlay');
    const startBtn = document.getElementById('start-assessment');
    const closeBtn = document.getElementById('close-assessment');
    const nextBtn = document.getElementById('next-btn') || document.getElementById('btn-submit-profile');
    const restartBtn = document.getElementById('restart-assessment');

    let userAnswers = {};

    const builderCategories = [
        { id: 'role', title: 'Vai trò', icon: '👤', type: 'choice', options: ['Học sinh', 'Sinh viên', 'Người đi làm'] },
        { 
            id: 'experience', 
            title: 'Kinh nghiệm', 
            icon: '🌱', 
            type: 'tags',
            suggestions: [
                'Dự án cá nhân', 'Thực tập (Intern)', 'Freelance', 'Part-time Job', 
                'Dự án nhóm tại trường', 'Đồ án tốt nghiệp', 'Volunteer / Tình nguyện', 
                'Tổ chức sự kiện', 'Câu lạc bộ trường', 'Bán hàng online', 
                'Content Creator (TikTok/Insta)', 'Gia sư / Dạy kèm', 
                'Nhân viên bán hàng / Promoter', 'Dự án cộng đồng', 'Làm việc nhóm freelance'
            ]
        },
        { 
            id: 'education', 
            title: 'Học vấn', 
            icon: '🎓', 
            type: 'tags',
            suggestions: [
                'Đại học', 'Cao đẳng', 'Chứng chỉ IELTS', 'Chứng chỉ TOEIC', 
                'Tin học văn phòng (MOS)', 'Khóa học Coursera', 'Khóa học Udemy', 
                'Chứng chỉ Google', 'Chứng chỉ chuyên ngành', 'Lớp chuyên Toán/Anh/Tin', 
                'Trao đổi sinh viên', 'Học bổng', 'Khóa học ngắn hạn offline', 
                'Đào tạo nội bộ', 'Chứng chỉ ngoại ngữ (Nhật/Hàn...)'
            ]
        },
        { 
            id: 'skills', 
            title: 'Kỹ năng', 
            icon: '💪', 
            type: 'tags',
            suggestions: [
                'Tiếng Anh giao tiếp', 'Làm việc nhóm', 'Giải quyết vấn đề', 
                'Tin học văn phòng', 'Giao tiếp & Thuyết trình', 'Quản lý thời gian', 
                'Học hỏi nhanh', 'Làm việc dưới áp lực', 'Tư duy phản biện', 
                'Sáng tạo', 'Leadership / Lãnh đạo', 'Photoshop / Đồ họa', 
                'Canva', 'Figma (UI/UX)', 'Python / Lập trình cơ bản'
            ]
        },
        { 
            id: 'interests', 
            title: 'Sở thích', 
            icon: '💕', 
            type: 'tags',
            suggestions: [
                'Đọc sách phát triển bản thân', 'Đọc sách chuyên ngành', 
                'Thể thao (Gym/Chạy bộ...)', 'Du lịch / Khám phá', 'Nghiên cứu nhiếp ảnh', 
                'Quay & Chỉnh sửa video', 'Viết blog / Viết lách', 'Nấu ăn', 
                'Học ngoại ngữ', 'Kinh doanh online', 'Nghe nhạc / Nhạc cụ', 
                'Xem & Phân tích phim', 'Tình nguyện xã hội', 'Game chiến lược', 'Lập trình cá nhân'
            ]
        }
    ];

    const openAssessment = () => {
        // Redirect to the new builder page instead of overlay
        window.location.href = 'builder.html';
    };

    // Initialize Builder if on builder.html
    const isBuilderPage = window.location.pathname.includes('builder.html');
    
    if (isBuilderPage) {
        userAnswers = {
            role: 'Sinh viên',
            experience: [],
            education: [],
            skills: [],
            interests: []
        };
        
        // Try to load saved data first
        const savedProfile = localStorage.getItem('kareer_profile');
        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                userAnswers = { ...userAnswers, ...parsed };
            } catch (e) {
                console.error("Error parsing saved profile", e);
            }
        }

        // Small delay to ensure DOM is ready
        setTimeout(renderBuilder, 100);
    }

    function renderBuilder() {
        const container = document.getElementById('builder-categories');
        if (!container) return;

        container.innerHTML = builderCategories.map(cat => `
            <div class="builder-category" id="cat-${cat.id}">
                <div class="category-header">
                    <span class="category-title">${cat.title}</span>
                </div>
                <div class="tags-container" id="tags-${cat.id}">
                    ${renderTags(cat)}
                    ${cat.type === 'choice' ? '' : `
                        <button class="btn-add-tag" onclick="handleAddTag('${cat.id}')">
                            Thêm ${cat.title.toLowerCase()} +
                        </button>
                    `}
                </div>
            </div>
        `).join('');

        updateAIStatement();
    }

    function renderTags(cat) {
        if (cat.type === 'choice') {
            return `
                <div class="select-wrapper">
                    <select class="builder-select" onchange="handleChoice('${cat.id}', this.value)">
                        ${cat.options.map(opt => `
                            <option value="${opt}" ${userAnswers[cat.id] === opt ? 'selected' : ''}>${opt}</option>
                        `).join('')}
                    </select>
                </div>
            `;
        }
        const tags = userAnswers[cat.id] || [];
        return tags.map((tag, i) => `
            <div class="tag-item ${cat.id}-tag">
                <span>${tag}</span>
                <button class="btn-remove-tag" onclick="handleRemoveTag('${cat.id}', ${i})">×</button>
            </div>
        `).join('');
    }

    window.handleChoice = (catId, val) => {
        userAnswers[catId] = val;
        renderBuilder();
    };

    window.handleRemoveTag = (catId, index) => {
        userAnswers[catId].splice(index, 1);
        renderBuilder();
    };

    let currentModalCategory = '';

    window.handleAddTag = (catId) => {
        currentModalCategory = catId;
        const cat = builderCategories.find(c => c.id === catId);
        const modal = document.getElementById('suggestions-modal');
        const list = document.getElementById('suggestions-list');
        const title = document.getElementById('modal-title');
        const input = document.getElementById('custom-tag-input');

        if (!modal || !list || !cat) return;

        title.textContent = `Thêm ${cat.title}`;
        input.value = '';
        
        const pastelColors = [
            '#E8F5E9', '#E3F2FD', '#F3E5F5', '#FFF3E0', '#FCE4EC', 
            '#E0F2F1', '#FFFDE7', '#EFEBE9', '#F9FBE7', '#E1F5FE'
        ];
        
        const suggestions = Array.isArray(cat.suggestions) ? cat.suggestions : (cat.suggestions[userAnswers.role] || []);
        list.innerHTML = suggestions.map((s, idx) => `
            <button class="suggestion-btn" 
                    style="background-color: ${pastelColors[idx % pastelColors.length]}; border-color: rgba(0,0,0,0.05);"
                    onclick="addTagFromSuggestion('${s}')">${s}</button>
        `).join('');

        modal.classList.add('active');
        input.focus();
    };

    window.closeModal = () => {
        const modal = document.getElementById('suggestions-modal');
        if (modal) modal.classList.remove('active');
    };

    window.addTagFromSuggestion = (val) => {
        if (!userAnswers[currentModalCategory].includes(val)) {
            userAnswers[currentModalCategory].push(val);
            renderBuilder();
        }
        closeModal();
    };

    window.addCustomTag = () => {
        const input = document.getElementById('custom-tag-input');
        const val = input ? input.value.trim() : '';
        if (val) {
            if (!userAnswers[currentModalCategory].includes(val)) {
                userAnswers[currentModalCategory].push(val);
                renderBuilder();
            }
        }
        closeModal();
    };

    // Handle Enter key in custom input
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && document.activeElement.id === 'custom-tag-input') {
            addCustomTag();
        }
    });

    window.initBuilder = () => {
        const savedProfile = localStorage.getItem('kareer_profile');
        if (savedProfile) {
            try {
                const parsed = JSON.parse(savedProfile);
                // Merge with defaults to ensure all properties exist
                userAnswers = {
                    role: 'Sinh viên',
                    experience: [],
                    education: [],
                    skills: [],
                    interests: [],
                    ...parsed
                };
            } catch (e) {
                console.error("Error parsing saved profile", e);
                resetUserAnswers();
            }
        } else {
            resetUserAnswers();
        }
        renderBuilder();
    };

    function resetUserAnswers() {
        userAnswers = {
            role: 'Sinh viên',
            experience: [],
            education: [],
            skills: [],
            interests: []
        };
    }

    function updateAIStatement() {
        const textEl = document.getElementById('ai-statement-text');
        if (!textEl) return;

        const { role = 'Sinh viên', experience = [], education = [], skills = [], interests = [] } = userAnswers;

        
        if (experience.length === 0 && education.length === 0 && skills.length === 0 && interests.length === 0) {
            textEl.textContent = "Hãy bắt đầu chia sẻ hành trình của bạn để Kareer giúp bạn phác họa bản sắc nghề nghiệp...";
            return;
        }

        let intro = "";
        let body = "";
        let future = "";

        // 1. Introduction & Education
        const eduStr = education.length > 0 ? education.join(', ') : "";
        if (role === 'Học sinh') {
            intro = `Tôi là một học sinh đầy hoài bão${eduStr ? ` với nền tảng từ ${eduStr}` : ""}, đang trên hành trình khám phá tiềm năng bản thân.`;
        } else if (role === 'Sinh viên') {
            intro = `Là một sinh viên ${eduStr ? `chuyên ngành ${eduStr}` : "đầy nhiệt huyết"}, tôi đang nỗ lực xây dựng nền tảng chuyên môn vững chắc để sẵn sàng bước vào thế giới nghề nghiệp.`;
        } else {
            intro = `Với tư cách là một nhân sự chuyên nghiệp${eduStr ? ` có nền tảng học vấn về ${eduStr}` : ""}, tôi luôn hướng tới việc tối ưu hóa giá trị bản thân trong môi trường làm việc.`;
        }

        // 2. Experience & Skills
        const expStr = experience.length > 0 ? experience.join(', ') : "";
        const skillStr = skills.length > 0 ? skills.join(', ') : "";

        if (expStr && skillStr) {
            body = `Thông qua những trải nghiệm thực tế trong ${expStr}, tôi đã rèn luyện và sở hữu thế mạnh vượt trội về ${skillStr}.`;
        } else if (expStr) {
            body = `Tôi đã tích lũy được nhiều kinh nghiệm thực tiễn quý báu thông qua các hoạt động như ${expStr}.`;
        } else if (skillStr) {
            body = `Thế mạnh lớn nhất của tôi nằm ở kỹ năng ${skillStr}, giúp tôi tự tin đối mặt với mọi thử thách.`;
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
