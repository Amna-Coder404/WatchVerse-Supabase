import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";

import Loader from "../../../components/Loader";
import MovieTabs from "../../../components/MovieTabs";
import ReviewModal from "../../../components/ReviewModal";

import { IMAGE_BASE_URL } from "../../../constants/api";
import { getMovieCredits, getMovieDetails } from "../../../services/movieApi";
import {
    isMovieInWatchlist,
    toggleWatchList,
} from "../../../services/watchlist";
import { useAuthStore } from "../../../store/authStore";
import styles from "../../../styles/movieDetail.style";

export default function MovieDetails() {
    const { id } = useLocalSearchParams();
    const { user } = useAuthStore();
    const router = useRouter();

    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (id && user) {
            loadMovie();
        }
    }, [id, user]);

    const loadMovie = async () => {
        try {
            setLoading(true);

            const movieData = await getMovieDetails(id);
            const creditsData = await getMovieCredits(id);

            const saved = await isMovieInWatchlist(
                user.id,
                movieData.id
            );

            setMovie(movieData);
            setCast(creditsData.cast.slice(0, 10));
            setIsSaved(saved);
        } catch (error) {
            Alert.alert("Error", "Failed to load movie.");
        } finally {
            setLoading(false);
        }
    };

    const handleToggleWatch = async () => {
        try {
            const saved = await toggleWatchList(user.id, movie);
            setIsSaved(saved);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    if (loading || !movie) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            {/* Backdrop */}
            <Image
                source={{
                    uri: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
                }}
                style={styles.backdrop}
            />

            {/* Back Button */}
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* Tabs */}
            <View style={{ flex: 1 }}>
                <MovieTabs
                    movie={movie}
                    cast={cast}
                    isSaved={isSaved}
                    handleToggleWatch={handleToggleWatch}
                    userId={user.id}
                />
            </View>

            {/* Review Modal */}
            <ReviewModal
                visible={visible}
                movie={movie}
                user={user}
                onClose={() => setVisible(false)}
            />
        </View>
    );
}