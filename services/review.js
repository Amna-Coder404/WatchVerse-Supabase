import { Alert } from "react-native";
import { supabase } from "../lib/supabase";


export const createReview = async (userId, movieId, review, rating) => {
    const { data, error } = await supabase
        .from("reviews")
        .insert({
            user_id: userId,
            movie_id: movieId,
            review,
            rating
        })
        .select()
        .single();

    if (error) {
        Alert.alert("Error", error.message);
        return null;
    }

    return data;
}

export const getMovieReviews = async (movieId) => {
    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("movie_id", movieId)
        .order("created_at", { ascending: false });

    if (error) {
        Alert.alert("Error", error.message);
        return [];
    }

    return data;

}



export const updateReview = async (reviewId, review, rating) => {
    const { data, error } = await supabase
        .from("reviews")
        .update({
            review,
            rating
        })
        .eq("id", reviewId)


    if (error) {
        Alert.alert("Error", error.message);
        return false;
    }

    return true;

}


export const DeleteReview = async (reviewId) => {
    const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", reviewId);

    if (error) {
        Alert.alert("Error", error.message);
        return false;
    }

    return true;
}


export const getMyReview = async (userId, movieId) => {

    const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("user_id", userId)
        .eq("movie_id", movieId)
        .maybeSingle();

    if (error) {
        Alert.alert("ERROR", error.message);
        return null;
    }

    return data;
}