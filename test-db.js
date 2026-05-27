import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wooighmdckuoebsuegzz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2lnaG1kY2t1b2Vic3VlZ3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2OTE4MDcsImV4cCI6MjA4ODI2NzgwN30.ETVnzajdLNdezhh-lraSrubf1MC--VSyKKV3KUh9vWk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const tables = [
  'employees',
  'time_records',
  'geofence_zones',
  'app_settings',
  'evaluations',
  'announcements',
  'host_supervisors',
  'host_feedback',
  'announcement_submissions'
];

async function testConnection() {
  console.log('Testing connection to Supabase...');
  for (const table of tables) {
    try {
      const { data, error } = await supabase.from(table).select('*').limit(1);
      if (error) {
        console.log(`Table "${table}": Error ->`, error.message);
      } else {
        console.log(`Table "${table}": Success! Found ${data.length} records.`);
      }
    } catch (err) {
      console.log(`Table "${table}": Catch Error ->`, err.message || err);
    }
  }
}

testConnection();
