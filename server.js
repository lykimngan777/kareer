const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from('users').upsert({ name, email }, { onConflict: 'email' }).select().single();
  if (error) return res.status(400).json({ error: error.message });
  res.json({ user: data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
