/**
 * Kareer API Client
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

  async function saveUser(profile) {
    localStorage.setItem('kareer_profile', JSON.stringify(profile));
    const online = await checkBackend();
    if (!online) return null;
    const result = await post('/users', profile);
    if (result.user && result.user.id) localStorage.setItem('kareer_user_id', result.user.id);
    return result;
  }

  async function saveAssessment(data) {
    const quizResult = { scores: data.scores, topGroup: data.top_group };
    localStorage.setItem('kareer_result', JSON.stringify(quizResult));
    const online = await checkBackend();
    if (!online) return null;
    const userId = localStorage.getItem('kareer_user_id');
    if (!userId) return null;
    return post('/assessments', { ...data, user_id: userId });
  }

  async function saveCareerSelection(careerName, fitLevel) {
    localStorage.setItem('selectedCareer', careerName);
    const online = await checkBackend();
    if (!online) return null;
    const userId = localStorage.getItem('kareer_user_id');
    const assessmentId = localStorage.getItem('kareer_assessment_id');
    if (!userId) return null;
    return post('/career-selections', {
      user_id: userId,
      assessment_id: assessmentId,
      career_name: careerName,
      fit_level: fitLevel
    });
  }

  return { saveUser, saveAssessment, saveCareerSelection, checkBackend };
})();
