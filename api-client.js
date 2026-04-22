/**
 * Kareer API Client
 * 
 * Shared JS module used by all frontend pages (Step 1, 2, 3) to communicate
 * with the backend. Falls back to localStorage if the backend is unreachable.
 */

const KareerAPI = (() => {
  const API_BASE = (window.Kareer_API_URL || 'http://localhost:3000') + '/api';
  let _backendAvailable = null;

  async function checkBackend() {
    if (_backendAvailable !== null) return _backendAvailable;
    try {
      const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(2000) });
      _backendAvailable = res.ok;
    } catch {
      _backendAvailable = false;
    }
    return _backendAvailable;
  }

  async function post(endpoint, body) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return res.json();
  }

  async function get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    return res.json();
  }

  async function saveUser(profile) {
    localStorage.setItem('kareer_profile', JSON.stringify(profile));
    if (!(await checkBackend())) return null;
    try {
      const result = await post('/users', profile);
      if (result.user && result.user.id) localStorage.setItem('kareer_user_id', result.user.id);
      return result;
    } catch (err) { return null; }
  }

  async function saveAssessment(data) {
    localStorage.setItem('kareer_result', JSON.stringify(data));
    if (!(await checkBackend())) return null;
    try {
      const userId = localStorage.getItem('kareer_user_id');
      if (!userId) return null;
      return await post('/assessments', { ...data, user_id: userId });
    } catch (err) { return null; }
  }

  async function saveCareerSelection(careerName, fitLevel) {
    localStorage.setItem('selectedCareer', careerName);
    if (!(await checkBackend())) return null;
    try {
      const userId = localStorage.getItem('kareer_user_id');
      if (!userId) return null;
      return await post('/career-selections', { user_id: userId, career_name: careerName, fit_level: fitLevel });
    } catch (err) { return null; }
  }

  async function getStats() {
    if (!(await checkBackend())) return null;
    try { return await get('/stats'); } catch (err) { return null; }
  }

  return { saveUser, saveAssessment, saveCareerSelection, getStats, checkBackend };
})();