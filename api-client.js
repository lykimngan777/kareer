const KareerAPI = (() => {
  const API_BASE = (window.Kareer_API_URL || 'http://localhost:3000') + '/api';
  let _backendAvailable = null;
  async function checkBackend() { if (_backendAvailable !== null) return _backendAvailable; try { const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(2000) }); _backendAvailable = res.ok; } catch { _backendAvailable = false; } return _backendAvailable; }
  async function post(endpoint, body) { const res = await fetch(`${API_BASE}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); }
  async function get(endpoint) { const res = await fetch(`${API_BASE}${endpoint}`); if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); }
  async function saveUser(profile) { localStorage.setItem('kareer_profile', JSON.stringify(profile)); const online = await checkBackend(); if (!online) return null; try { const result = await post('/users', profile); if (result.user && result.user.id) localStorage.setItem('kareer_user_id', result.user.id); return result; } catch (err) { return null; } }
  async function saveAssessment(data) { localStorage.setItem('kareer_result', JSON.stringify(data)); const online = await checkBackend(); if (!online) return null; try { const userId = localStorage.getItem('kareer_user_id'); if (!userId) return null; return await post('/assessments', { user_id: userId, ...data }); } catch (err) { return null; } }
  return { saveUser, saveAssessment, checkBackend };
})();
