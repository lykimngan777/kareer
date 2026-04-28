/**
 * Kareer Matrix Engine (step3_v2.js)
 * Implements a physics-based career orientation matrix.
 * Uses careerDatabase from database.js as the single source of truth.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMatrix();
});

function initMatrix() {
    const nodesContainer = document.getElementById('career-nodes');
    if (!nodesContainer) return;

    // Load user data
    const resultStr = localStorage.getItem('kareer_result');
    const userResult = resultStr ? JSON.parse(resultStr) : { scores: { realistic: 3, investigative: 3, artistic: 3, social: 3, enterprising: 3, conventional: 3 } };
    const userScores = userResult.scores || {};

    // Use all careers from the centralized database
    const careers = (typeof careerDatabase !== 'undefined' && careerDatabase.length > 0)
        ? careerDatabase
        : [];

    if (careers.length === 0) {
        console.warn('[Step3] careerDatabase not available');
        return;
    }

    // Score each career based on user's RIASEC profile
    const scoredCareers = careers.map(career => {
        let score = 0;
        if (career.traits && career.traits.length > 0) {
            career.traits.forEach((trait, idx) => {
                const weight = career.traits.length - idx; // First trait = highest weight
                score += (userScores[trait] || 0) * weight;
            });
        }
        return { ...career, fitScore: score };
    });

    // Sort by score descending
    const sorted = scoredCareers.sort((a, b) => b.fitScore - a.fitScore);
    
    // Selection strategy: Take a mix of levels to populate all orbits (Total 15)
    // 7 Top matches, 4 Mid-range, 4 Lower-range
    const top7 = sorted.slice(0, 7);
    const midIndex = Math.floor(sorted.length / 2);
    const mid4 = sorted.slice(midIndex - 2, midIndex + 2);
    const bottom4 = sorted.slice(-4);
    
    // Combine and remove duplicates based on name
    const combined = [...top7, ...mid4, ...bottom4];
    const uniqueMap = new Map();
    combined.forEach(c => uniqueMap.set(c.name, c));
    const topScoredCareers = Array.from(uniqueMap.values()).slice(0, 15);

    // Determine max score for normalization
    const maxScore = Math.max(...topScoredCareers.map(c => c.fitScore), 1);

    // Rank-based classification to ensure even distribution across levels
    function getFitLevelByRank(index, total) {
        if (index < 3) return { label: 'Rất cao', class: 'vh', color: '#D3F9D8', textColor: '#2b8a3e' };
        if (index < 7) return { label: 'Cao', class: 'h', color: '#D0EBFF', textColor: '#1864ab' };
        if (index < 11) return { label: 'Trung bình', class: 'm', color: '#FFDEEB', textColor: '#c2255c' };
        if (index < 13) return { label: 'Thấp', class: 'l', color: '#FFF3BF', textColor: '#e67700' };
        return { label: 'Rất thấp', class: 'vl', color: '#FFE8CC', textColor: '#d9480f' };
    }

    // Map RIASEC traits to angles (0-360 degrees)
    const traitAngles = {
        realistic: 90,        // Top
        investigative: 150,   // Top-Right
        artistic: 210,        // Bottom-Right
        social: 270,          // Bottom
        enterprising: 330,    // Bottom-Left
        conventional: 30      // Top-Left
    };

    const nodes = topScoredCareers.map((career, index) => {
        // 1. Calculate base angle based on RIASEC traits
        let avgAngle = 0;
        career.traits.forEach(trait => {
            avgAngle += traitAngles[trait] || 0;
        });
        avgAngle /= career.traits.length;
        
        // Add a bit of random offset to the angle to separate identical trait combos
        avgAngle += (Math.random() - 0.5) * 60;
        const rad = (avgAngle * Math.PI) / 180;

        // 2. Calculate radius based on RANK (Closer to center = Better rank)
        let radius; // in % units
        if (index < 3) radius = 28 + Math.random() * 5;      // Rất cao: Bên ngoài vòng tròn trung tâm
        else if (index < 7) radius = 40 + Math.random() * 8; // Cao
        else if (index < 11) radius = 55 + Math.random() * 10; // Trung bình
        else if (index < 13) radius = 70 + Math.random() * 10; // Thấp
        else radius = 85 + Math.random() * 8;                   // Rất thấp: Ngoài rìa

        // Convert polar (radius, angle) to cartesian (x, y) relative to center (50, 50)
        let targetX = 50 + Math.cos(rad) * radius;
        let targetY = 50 + Math.sin(rad) * radius;

        // Clamp initial positions inside canvas
        targetX = Math.max(5, Math.min(80, targetX));
        targetY = Math.max(10, Math.min(80, targetY));

        return {
            ...career,
            x: targetX,
            y: targetY,
            vx: 0,
            vy: 0,
            targetX,
            targetY,
            fit: getFitLevelByRank(index, topScoredCareers.length),
            element: null
        };
    });

    // Create DOM elements
    nodes.forEach((node, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'career-node';
        wrapper.style.left = `${node.x}%`;
        wrapper.style.bottom = `${node.y}%`;
        wrapper.style.opacity = '0';
        // Position transition disabled for physics simulation to work correctly
        wrapper.style.transition = `opacity 0.5s ease ${idx * 0.04}s`; 

        const dot = document.createElement('div');
        dot.className = 'node-dot';
        dot.style.background = node.fit.color;
        wrapper.appendChild(dot);

        const label = document.createElement('div');
        label.className = 'node-label';
        label.innerText = node.name;
        wrapper.appendChild(label);

        const tooltip = document.createElement('div');
        tooltip.className = 'node-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <span class="tooltip-fit" style="background: ${node.fit.color}; color: ${node.fit.textColor};">${node.fit.label}</span>
                <span class="tooltip-code">${node.code}</span>
            </div>
            <div class="tooltip-title">${node.name}</div>
            <div class="tooltip-desc">${node.description}</div>
            
            <div class="tooltip-salary" style="margin: 12px 0; padding-top: 12px; border-top: 1px solid #f0f0f0;">
                <span style="font-size: 0.7rem; color: #888; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Mức lương ước tính:</span>
                <div style="font-size: 1.1rem; color: #111; font-weight: 800; margin-top: 2px;">${node.salary || '45.000.000 - 95.000.000'} <small style="font-size: 0.7rem;">VNĐ</small></div>
            </div>

            <div style="margin-top: 1.2rem; font-weight: 800; font-size: 0.75rem; color: #222; text-align: right; letter-spacing: 0.02em;">XEM CHI TIẾT <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></div>
        `;
        wrapper.appendChild(tooltip);

        // Flip tooltip if near top of canvas
        if (node.y > 70) {
            tooltip.classList.add('flipped');
        }

        wrapper.onclick = () => {
            localStorage.setItem('selectedCareer', node.name);
            window.location.href = 'timeline.html';
        };

        nodesContainer.appendChild(wrapper);
        node.element = wrapper;

        // Fade in with stagger
        requestAnimationFrame(() => {
            setTimeout(() => {
                wrapper.style.opacity = '1';
            }, 50);
        });
    });

    // Central hub click — show analysis modal
    const centralHub = document.querySelector('.central-hub');
    if (centralHub) {
        centralHub.onclick = () => {
            showAnalysis(nodes, userScores);
        };
    }

    // Physics Simulation — tuned to settle quickly without shaking
    const ITERATIONS = 3500;      
    const REPULSION = 45.0;       // Strong repulsion for spread
    const REPULSION_DIST = 80;    
    const ATTRACTION = 0.025;     // Stronger anchor to keep nodes in their orbits
    const CENTER_ZONE = 25;       // Increased to ensure nodes clear the physical circle
    const CENTER_FORCE = 25.0;     
    const MIN_DIST = 28;          
    
    // Wider bounds for maximum spread
    const BOUNDS = { 
        minX: 3, maxX: 88,     
        minY: 12, maxY: 80    
    };

    function step() {
        for (let i = 0; i < nodes.length; i++) {
            const n1 = nodes[i];

            // Gentle attraction to RIASEC target position
            n1.vx += (n1.targetX - n1.x) * ATTRACTION;
            n1.vy += (n1.targetY - n1.y) * ATTRACTION;

            // Add a tiny 'floating' effect to make nodes feel alive
            const time = Date.now() * 0.001;
            n1.vx += Math.sin(time + i) * 0.002;
            n1.vy += Math.cos(time + i * 1.3) * 0.002;

            // Repulsion from every other node
            for (let j = 0; j < nodes.length; j++) {
                if (i === j) continue;
                const n2 = nodes[j];
                const dx = n1.x - n2.x;
                const dy = n1.y - n2.y;
                let distSq = dx * dx + dy * dy;
                let dist = Math.sqrt(distSq) || 0.1;

                // 1. Standard repulsion
                if (dist < REPULSION_DIST) {
                    const force = REPULSION / (distSq + 2);
                    n1.vx += (dx / dist) * force;
                    n1.vy += (dy / dist) * force;
                }

                // 2. Strict Collision Avoidance (prevent "sticking" but gentler)
                if (dist < MIN_DIST) {
                    const push = (MIN_DIST - dist) * 0.25;
                    n1.vx += (dx / dist) * push;
                    n1.vy += (dy / dist) * push;
                }
            }

            // Strong repulsion from center hub (50, 50)
            const cx = n1.x - 50;
            const cy = n1.y - 50;
            const centerDist = Math.sqrt(cx * cx + cy * cy) || 0.1;
            if (centerDist < CENTER_ZONE) {
                const cForce = CENTER_FORCE * (CENTER_ZONE - centerDist) / CENTER_ZONE;
                n1.vx += (cx / centerDist) * cForce;
                n1.vy += (cy / centerDist) * cForce;
            }

            // Apply velocity
            n1.x += n1.vx;
            n1.y += n1.vy;

            // Damping (Higher damping = settles faster. 0.40 = very stable)
            n1.vx *= 0.40;
            n1.vy *= 0.40;

            // Clamp to bounds
            n1.x = Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, n1.x));
            n1.y = Math.max(BOUNDS.minY, Math.min(BOUNDS.maxY, n1.y));
        }

        // Update DOM
        nodes.forEach(node => {
            if (node.element) {
                node.element.style.left = `${node.x}%`;
                node.element.style.bottom = `${node.y}%`;
            }
        });
    }

    let currentIteration = 0;
    function animate() {
        if (currentIteration < ITERATIONS) {
            step();
            currentIteration++;
            requestAnimationFrame(animate);
        }
    }
    animate();
}

/**
 * Show analysis modal when the central hub is clicked.
 * Generates a personalized career analysis based on RIASEC scores.
 */
function showAnalysis(nodes, userScores) {
    const modal = document.getElementById('strengths-modal');
    const paragraph = document.getElementById('analysis-paragraph');
    if (!modal || !paragraph) return;

    const traitLabels = {
        realistic: 'Thực tế',
        investigative: 'Nghiên cứu',
        artistic: 'Nghệ thuật',
        social: 'Xã hội',
        enterprising: 'Quản lý',
        conventional: 'Nghiệp vụ'
    };

    // Sort traits by score
    const sortedTraits = Object.entries(userScores)
        .filter(([k]) => traitLabels[k])
        .sort(([, a], [, b]) => b - a);

    const topTrait = sortedTraits[0] ? traitLabels[sortedTraits[0][0]] : 'Quản lý';
    
    // Top matching careers for analysis
    const allCareers = nodes; 
    const recommendedCareer = allCareers[0];

    let html = `
        <div class="analysis-report-container">
            <!-- Tabs Navigation -->
            <div class="analysis-tabs">
                <button class="analysis-tab-btn active" onclick="switchAnalysisTab('details', this)">Phân tích chuyên sâu</button>
                <button class="analysis-tab-btn" onclick="switchAnalysisTab('comparison', this)">Bảng so sánh nghề nghiệp</button>
            </div>

            <!-- Tab 1: Detailed Analysis -->
            <div id="analysis-tab-details" class="analysis-tab-content active">
                <div class="career-split-view">
                    <div class="career-sidebar-card">
                        <div class="career-list-left">
                            ${allCareers.map((c, i) => `
                                <div class="career-item ${i === 0 ? 'active' : ''}" onclick="showCareerWhy(${i})">
                                    <div class="item-name">${c.name}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="career-content-card">
                        <div class="career-why-right">
                            ${allCareers.map((c, i) => {
                                const spec = (typeof specializedData !== 'undefined') ? specializedData[c.name] : null;
                                return `
                                <div id="why-content-${i}" class="why-content ${i === 0 ? 'active' : ''}">
                                    


                                    <div class="simple-section">
                                        <h4>PHÂN TÍCH SỰ PHÙ HỢP CHI TIẾT</h4>
                                        <div class="detailed-analysis-content">
                                            <p>Kết quả phân tích cho thấy bạn sở hữu nhóm đặc điểm <strong>${c.traits.map(t => traitLabels[t]).join(', ')}</strong> cực kỳ tương thích với vị trí này. Điểm số cao ở các nhóm kỹ năng này là nền tảng giúp bạn tiếp cận công việc một cách tự nhiên và nhạy bén.</p>
                                            
                                            <p>Vị trí này đòi hỏi sự kết hợp giữa tư duy hệ thống và khả năng thực thi quyết liệt. Dựa trên dữ liệu thu thập được, bạn có xu hướng giải quyết các thử thách đặc thù của ngành thông qua góc nhìn sáng tạo nhưng vẫn đảm bảo tính thực tiễn cao - một tố chất hiếm có của một <strong>${c.name}</strong> chuyên nghiệp.</p>
                                            
                                            <p>Bạn không chỉ làm tốt vai trò chuyên môn mà còn có khả năng kiến tạo những giá trị mới cho tổ chức nhờ vào sự am hiểu sâu sắc về quy trình và tâm lý con người trong môi trường làm việc.</p>
                                        </div>
                                    </div>

                                    <div class="action-footer">
                                        <button class="primary-roadmap-btn" onclick="localStorage.setItem('selectedCareer','${c.name}'); window.location.href='timeline.html';">
                                            XEM CHI TIẾT NGHỀ NGHIỆP <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <!-- Tab 2: Comparison Table -->
            <div id="analysis-tab-comparison" class="analysis-tab-content">
                <div class="comparison-scroll-wrapper">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Vị trí công việc</th>
                                <th>Mức lương / Thu nhập</th>
                                <th>Nhiệm vụ trọng tâm</th>
                                <th>Yêu cầu cốt lõi</th>
                                <th>Phù hợp</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${allCareers.map(c => {
                                const spec = (typeof specializedData !== 'undefined') ? specializedData[c.name] : null;
                                return `
                                    <tr>
                                        <td>
                                            <div class="comp-job-name">${c.name}</div>
                                        </td>
                                        <td class="comp-salary">${c.salary || '40M - 80M'}</td>
                                        <td>
                                            <ul class="comp-list">
                                                ${(spec ? spec.responsibilities : ["Quản lý vận hành", "Tối ưu hóa quy trình"]).slice(0, 2).map(r => `<li>${r}</li>`).join('')}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul class="comp-list">
                                                ${spec ? `
                                                    <li>${spec.requirements.degree.split(' - ')[0]}</li>
                                                    <li>${spec.requirements.professional.split(', ')[0]}</li>
                                                ` : `
                                                    <li>Đại học chuyên ngành</li>
                                                    <li>5-10 năm kinh nghiệm</li>
                                                `}
                                            </ul>
                                        </td>
                                        <td>
                                            <span class="comp-fit-tag" style="background: ${c.fit.color}; color: ${c.fit.textColor};">${c.fit.label}</span>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    paragraph.innerHTML = html;

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Close button
    const closeBtn = modal.querySelector('.close-modal-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };
    }
}

/**
 * Global handlers for Analysis Modal
 * These must be in the global scope because they are called from onclick attributes in generated HTML
 */

window.switchAnalysisTab = function(tabId, btn) {
    // Update buttons
    document.querySelectorAll('.analysis-tab-btn').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    
    // Update content
    document.querySelectorAll('.analysis-tab-content').forEach(el => el.classList.remove('active'));
    const targetTab = document.getElementById('analysis-tab-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
};

window.showCareerWhy = function(index) {
    // Update sidebar items
    const items = document.querySelectorAll('.career-item');
    items.forEach(el => el.classList.remove('active'));
    if (items[index]) {
        items[index].classList.add('active');
    }
    
    // Update content blocks
    const contents = document.querySelectorAll('.why-content');
    contents.forEach(el => el.classList.remove('active'));
    const targetContent = document.getElementById('why-content-' + index);
    if (targetContent) {
        targetContent.classList.add('active');
    }
};
