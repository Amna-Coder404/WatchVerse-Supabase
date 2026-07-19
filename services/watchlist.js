import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

// Toggle Watchlist
export const toggleWatchList = async (userId, movie) => {
    // check if movie already exits  
    const { data: existing, error: checkError } = await supabase.from("watchlists")
        .select("id").
        eq("user_id", userId).
        eq("movie_id", movie.id)
        .maybeSingle();

    if (checkError) {
        Alert.alert(checkError.message || "Something went wrong!");
        return false;
    }

    // Remove of already save
    if (existing) {
        const { error } = await supabase
            .from("watchlists")
            .delete().eq("user_id", userId)
            .eq("movie_id", movie.id);

        if (error) {
            Alert.alert(error.message || "Failed to remove from watchlist!");
            return false;
        }
        return false;
    }

    // Add if not save
    const { error } = await supabase.from("watchlists").insert({
        user_id: userId,
        movie_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
    });

    if (error) {
        Alert.alert(error.message || "Failed to add to watchlist!");
        return false;
    }

    return true; // Movie added
}


// Check movie are already exit or not

export const isMovieInWatchlist = async (userId, movieId) => {
    const { data, error } = await supabase
        .from("watchlists")
        .select("id")
        .eq("user_id", userId)
        .eq("movie_id", movieId)
        .maybeSingle();

    if (error) {
        console.log(error);
        return false;
    }

    return !!data;
};


// get user watch list
export const getWatchList = async (userId) => {
    const { data, error } = await supabase
        .from("watchlists")
        .select("*").
        eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) {
        Alert.alert(error.message, "Faild to Get WatchList");
    }

    return data;
}