import "react-native-url-polyfill";
import AsynStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rxcmwtdkurqrtmzyinni.supabase.co';

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Y213dGRrdXJxcnRtenlpbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NzMyNTAsImV4cCI6MjAzNjU0OTI1MH0.tFbEJAJ9xc3GbQOu38mFQisbuNn3S7TaMOZ0xTxTGZg";


export const supabase = createClient( supabaseUrl , supabaseAnonKey ,{
    auth:{
        storage: AsynStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})


