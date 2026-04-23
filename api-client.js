const KareerAPI = (() => {
  const API_BASE = (window.Kareer_API_URL || 'http://localhost:3000') + '/api';
  return {
    saveUser: async (p) => { console.log('Saving user', p); },
    saveAssessment: async (d) => { console.log('Saving assessment', d); }
  };
})();
