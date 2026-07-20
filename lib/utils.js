
import { router } from "expo-router";
import { Alert } from "react-native";
import { getMovieVideos } from "../services/movieApi";


// This function are user to convert time into : 2h 55m
export const formatRuntime = (min) => {
    if (!min) return "N/A";

    const h = Math.floor(min / 60);
    const m = min % 60;

    return `${h}h ${m}m`;
}


// Play video  YoutubePlayer
export const handlePlayVideo = async (movieId) => {
    try {
        const data = await getMovieVideos(movieId);
        const trailer = data.results.find(
            video =>
                video.site === "YouTube" &&
                video.type === "Trailer"
        )
        if (!trailer) {
            Alert.alert("No trailer found.");

            return;
        }
        router.push({
            pathname: "/trailer",
            params: { key: trailer.key, },
        });


    } catch (error) {
        console.log("ERROR:", error);

        Alert.alert("Error", error.message);
    }
}