import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://tvkuhlyuviplanluvjys.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2a3VobHl1dmlwbGFubHV2anlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyOTcyODMsImV4cCI6MjA3Njg3MzI4M30.lAtVtOuVJkuhyG1YNKQVQrGAFfMI08_lux5SgqUwPqw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
