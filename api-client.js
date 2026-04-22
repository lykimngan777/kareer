const KareerAPI = {
    baseUrl: window.KareerConfig ? window.KareerConfig.API_URL : 'http://localhost:3000/api',

    async saveUser(profileData) {
        // Luôn lưu vào localStorage trước
        localStorage.setItem('kareer_profile', JSON.stringify(profileData));

        try {
            const response = await fetch(`${this.baseUrl}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData)
            });
            return await response.json();
        } catch (error) {
            console.warn('Backend connection failed, using localStorage only.');
            return { success: true, offline: true };
        }
    },

    async saveAssessment(email, scores, results) {
        const data = { email, scores, results };
        localStorage.setItem('kareer_result', JSON.stringify(data));

        try {
            const response = await fetch(`${this.baseUrl}/assessments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.warn('Backend connection failed, using localStorage only.');
            return { success: true, offline: true };
        }
    },

    async saveCareerSelection(careerName, fitLevel) {
        const profile = JSON.parse(localStorage.getItem('kareer_profile') || '{}');
        const email = profile.email;
        if (!email) return;

        try {
            await fetch(`${this.baseUrl}/career-selection`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, careerName, fitLevel })
            });
        } catch (error) {
            console.error('Failed to save career selection');
        }
    },

    async getStats() {
        try {
            const response = await fetch(`${this.baseUrl}/admin/stats`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch stats');
            return null;
        }
    }
};
