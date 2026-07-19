import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import Loader from "../../../components/Loader";
import { getMovieCredits, getMovieDetails } from "../../../services/movieApi";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../../../constants/api";
import { isMovieInWatchlist, toggleWatchList } from "../../../services/watchlist";
import { useAuthStore } from "../../../store/authStore";
import styles from "../../../styles/movieDetail.style";

import { formatRuntime } from "../../../lib/utils";




export default function MovieDetails() {
    const { id } = useLocalSearchParams();
    const { user } = useAuthStore();

    const router = useRouter();

    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);


    useEffect(() => {
        if (id && user) {
            loadMovie();
        }
    }, [id, user]);

    // Load Moive Detail
    const loadMovie = async () => {
        try {
            setLoading(true);

            const movieData = await getMovieDetails(id);
            const creditsData = await getMovieCredits(id);

            const saved = await isMovieInWatchlist(user.id, movieData.id);


            setMovie(movieData);
            setCast(creditsData.cast.slice(0, 10));
            setIsSaved(saved);

        } catch (error) {
            Alert.alert("Error", "Failed to load movie.");
        } finally {
            setLoading(false);

        }
    }


    // Add to watchList
    const handleToggleWatch = async () => {
        try {
            const saved = await toggleWatchList(user.id, movie);
            setIsSaved(saved);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };
    if (loading || !movie) return <Loader />
    return (
        <ScrollView style={styles.container}>
            {/* BackDrop Image */}
            <Image
                source={{
                    uri: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
                }}
                style={styles.backdrop}
            />
            {/* BACK BUTTON */}
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            {/* CONTENT */}
            <View style={styles.content}>
                <Text style={styles.title}>{movie.title}</Text>

                <Text style={styles.info}>
                    {movie.release_date?.split("-")[0]} • {formatRuntime(movie.runtime)} • ⭐{" "}
                    {movie.vote_average.toFixed(1)}
                </Text>

                <Text style={styles.heading}>Overview</Text>
                <Text style={styles.overview}>{movie.overview}</Text>


                {/* GENRES */}
                <Text style={styles.heading}>Genres</Text>
                <View style={styles.genreContainer}>
                    {movie.genres.map((genre) => (
                        <View key={genre.id} style={styles.genre}>
                            <Text style={styles.genreText}>{genre.name}</Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.heading}>Cast</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        cast.map((person) => (
                            <View key={person.id} style={styles.castCard} >
                                <Image
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w185${person.profile_path}`,
                                    }}
                                    style={styles.castImage}
                                />
                                <Text numberOfLines={1} style={styles.castName}>
                                    {person.name}
                                </Text>
                            </View>
                        ))
                    }
                </ScrollView>

                {/* ADD to Watch List */}
                <TouchableOpacity style={styles.button} onPress={handleToggleWatch}>
                    {isSaved ? (
                        <>
                            <Ionicons name="remove-circle" size={22} color="#FFFFFF" />
                            <Text style={styles.buttonText}>
                                Remove from Watchlist
                            </Text>
                        </>
                    ) : (
                        <>
                            <Ionicons name="add-circle" size={22} color="#FFFFFF" />
                            <Text style={styles.buttonText}>
                                Add to Watchlist
                            </Text>
                        </>
                    )}
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}