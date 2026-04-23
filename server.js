require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const PORT = process.env.PORT || 3000;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.post('/api/users', async (req, res) => {
  const { email, name } = req.body;
  const { data, error } = await supabase.from('users').upsert({ email, name }).select().single();
  if (error) return res.status(500).json({ error: error.message });
  res.json({ user: data });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
