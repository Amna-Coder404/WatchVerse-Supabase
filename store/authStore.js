import { Alert } from "react-native";
import { create } from "zustand";
import { supabase } from "../lib/supabase";


export const useAuthStore = create((set) => ({
    user: null,
    session: null,
    loading: true,

    // SIGN-UP
    signup: async (email, password, username,) => {
        set({ loading: true });

        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            set({ loading: false });
            throw error
        }
        const user = data.user;

        if (user) {
            const { error: profileError } = await supabase.from("profiles").insert({
                id: user.id,
                username
            });

            if (profileError) {
                set({ loading: false });
                throw profileError;
            }

            set({ user, session: data.session, loading: false });
            return data;
        }
    },


    // LOGIN
    login: async (email, password) => {
        set({ loading: true });

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            set({ loading: false });
            throw error
        }
        set({ user: data.user, session: data.session, loading: false });
    },

    // LOGOUT
    logout: async () => {
        await supabase.auth.signOut();

        set({ user: null, session: null });
    },

    // Check User (existhing login)
    checkAuth: async () => {
        set({ loading: true });
        const { data, error } = await supabase.auth.getSession(); //check user

        if (error) {
            console.log("Auth check error", error);
            Alert.alert(error.message || "User not found!");
        }

        set({
            session: data.session,
            user: data.session?.user ?? null,
            loading: false
        });
    },

    // Listen for auth changes
    listenAuth: () => {
        const { data: { subscription }, } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                set({ session, user: session?.user ?? null, });
            });
        return subscription.unsubscribe;

    },

    // Get Current User Profile
    getProfile: async () => {
        const {
            data: { user }, } = await supabase.auth.getUser();

        if (!user) return null;

        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

        if (error) throw error;

        return data;
    },


}))