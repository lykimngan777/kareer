/**
 * Kareer Database Migration
 */
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function migrate() {
  console.log('🚀 Kareer Database Migration');
  const { error } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT, email TEXT UNIQUE, role TEXT, created_at TIMESTAMPTZ DEFAULT now()
      );
      CREATE TABLE IF NOT EXISTS assessments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id), answers JSONB, scores JSONB, created_at TIMESTAMPTZ DEFAULT now()
      );
    `
  });
  if (error) console.error('Migration error:', error.message);
  else console.log('✅ Migration completed');
}
migrate().catch(console.error);
