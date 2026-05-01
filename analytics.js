// Cấu hình mã theo dõi (Hãy thay thế các mã bên dưới bằng mã thực tế của bạn)
const CONFIG = {
    GA_ID: 'G-SBSL7T0P7C', // Ví dụ: G-12345678
};

// --- Google Analytics 4 (GA4) ---
(function () {
    if (CONFIG.GA_ID === 'G-SBSL7T0P7C') return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + CONFIG.GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', CONFIG.GA_ID);
    console.log('GA4 Initialized');
})();