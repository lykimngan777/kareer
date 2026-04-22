/**
 * Kareer Backend — Express Server
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Users API
app.post('/api/users', async (req, res) => {
  const { name, email, role, subjects, major, position, education, skills, experience, tasks, interests } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  
  const { data, error } = await supabase
    .from('users')
    .upsert({ name, email, role, subjects, major, position, education, skills, experience, tasks, interests }, { onConflict: 'email' })
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ user: data });
});

// Assessments API
app.post('/api/assessments', async (req, res) => {
  const { user_id, answers, scores, riasec, big_five, schwartz, top_group, second_group, group_details } = req.body;
  const { data, error } = await supabase
    .from('assessments')
    .insert({ user_id, answers, scores, riasec, big_five, schwartz, top_group, second_group, group_details })
    .select()
    .single();
    
  if (error) return res.status(500).json({ error: error.message });
  res.json({ assessment: data });
});

// Stats API
app.get('/api/stats', async (req, res) => {
  // Simplified version of the full server.js logic
  res.json({ message: 'Stats endpoint' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));