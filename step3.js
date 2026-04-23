/* step3.js */
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    const tooltip = document.getElementById('matrix-tooltip');
    const modal = document.getElementById('details-modal');
    const closeBtn = document.querySelector('.close-modal');
    const centralHub = document.querySelector('.central-hub');

    const careerDatabase = [
        { name: "UI Designer", fit: 95, color: "high", x: 25, y: 20, desc: "Thiết kế giao diện người dùng tinh tế và hiện đại.", salary: "15-35M", demand: "Rất cao" },
        { name: "UX Researcher", fit: 88, color: "high", x: -28, y: -15, desc: "Nghiên cứu hành vi và tâm lý người dùng sản phẩm.", salary: "18-40M", demand: "Cao" },
        { name: "Frontend Dev", fit: 82, color: "high", x: 35, y: -25, desc: "Xây dựng giao diện web tương tác bằng code.", salary: "20-45M", demand: "Cực cao" },
        { name: "Product Manager", fit: 75, color: "medium", x: -38, y: 22, desc: "Quản lý lộ trình phát triển của sản phẩm.", salary: "25-60M", demand: "Cao" },
        { name: "Graphic Designer", fit: 68, color: "medium", x: 10, y: 40, desc: "Sáng tạo hình ảnh và truyền thông thị giác.", salary: "12-25M", demand: "Ổn định" },
        { name: "Data Analyst", fit: 62, color: "medium", x: -15, y: -42, desc: "Phân tích dữ liệu để đưa ra quyết định kinh doanh.", salary: "18-35M", demand: "Tăng trưởng" }
    ];

    // Navigation Tab Handling
    const tabDetail = document.getElementById('tab-detail');
    const tabRoadmap = document.getElementById('tab-roadmap');
    
    const updateTabs = (careerName) => {
        // Already handled by handleNav but we update title for visual feedback
        console.log("Selected career:", careerName);
    };

    window.handleNav = function(page) {
        const career = localStorage.getItem('selectedCareer');
        if (career) {
            location.href = `${page}?career=${encodeURIComponent(career)}`;
        } else {
            location.href = page;
        }
    };

    const selectCareer = (careerName, dotElement = null, fitLevel = null) => {
        // Deselect all
        document.querySelectorAll('.career-node').forEach(node => node.classList.remove('selected'));
        
        // Select new
        if (dotElement) dotElement.classList.add('selected');
        
        // Update tabs and localStorage
        localStorage.setItem('selectedCareer', careerName);
        updateTabs(careerName);

        // Optional: logic for fitLevel sync
    };

    const createNodes = () => {
        careerDatabase.forEach(career => {
            const node = document.createElement('div');
            node.className = `career-node`;
            node.innerHTML = `
                ${career.name}
                <span class="fit-score ${career.color}">${career.fit}%</span>
            `;

            // Position based on percentage of canvas
            node.style.left = `calc(50% + ${career.x}%)`;
            node.style.top = `calc(50% + ${career.y}%)`;

            // Tooltip events
            node.addEventListener('mouseenter', (e) => showTooltip(e, career));
            node.addEventListener('mouseleave', hideTooltip);
            
            // Selection event
            node.addEventListener('click', () => selectCareer(career.name, node, career.color));

            canvas.appendChild(node);
        });
    };

    const showTooltip = (e, career) => {
        tooltip.innerHTML = `
            <h4>${career.name}</h4>
            <p>${career.desc}</p>
            <div class="tooltip-stat"><span>Mức lương:</span> <span>${career.salary}</span></div>
            <div class="tooltip-stat"><span>Cơ hội:</span> <span>${career.demand}</span></div>
        `;
        tooltip.classList.add('visible');

        const updatePos = () => {
            const x = e.clientX + 20;
            const y = e.clientY + 20;
            
            // Flip if too close to edges
            const flipX = x + 300 > window.innerWidth ? -300 : 0;
            const flipY = y + 200 > window.innerHeight ? -200 : 0;

            tooltip.style.left = `${x + flipX}px`;
            tooltip.style.top = `${y + flipY}px`;
        };
        updatePos();
    };

    const hideTooltip = () => {
        tooltip.classList.remove('visible');
    };

    // Modal Interaction
    if (centralHub) {
        centralHub.addEventListener('click', (e) => {
            console.log("Central Hub Clicked");
            e.stopPropagation();
            try {
                modal.classList.add('active');
                // Trigger animation for bars
                setTimeout(() => {
                    document.querySelectorAll('.score-bar-fill').forEach(bar => {
                        const val = bar.parentElement.previousElementSibling.innerText.includes('Nghệ thuật') ? '92%' : 
                                   bar.parentElement.previousElementSibling.innerText.includes('Nghiên cứu') ? '85%' : '70%';
                        bar.style.width = val;
                    });
                }, 100);
            } catch (err) {
                console.error("Error opening modal:", err);
                // Fallback: simple style change
                modal.style.opacity = '1';
                modal.style.pointerEvents = 'auto';
                modal.style.clipPath = 'circle(150% at 50% 50%)';
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            // Clean up fallback styles if applied
            modal.style.opacity = '';
            modal.style.pointerEvents = '';
            modal.style.clipPath = '';
        });
    }

    createNodes();
});
