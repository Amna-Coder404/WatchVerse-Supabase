import { useCallback, useState } from "react";

import { getWatchList } from "../../services/watchlist";
import { useAuthStore } from "../../store/authStore";

import { Ionicons } from "@expo/vector-icons";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_BASE_URL } from "../../constants/api";
import COLORS from "../../constants/color";
import styles from "../../styles/watchlist.style";
import NotFound from "../NotFound";


import { useFocusEffect, useRouter } from "expo-router";

import { handlePlayVideo } from "../../lib/utils";
import { toggleWatchList } from "../../services/watchlist";
import Loader from "../Loader";


const MyWatchlist = () => {
    const { user } = useAuthStore();

    const router = useRouter()
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);


    const loadWatchlist = async () => {
        try {
            const data = await getWatchList(user.id);
            setMovies(data);
        } catch (error) {
            console.log("ERROR ", error);
        } finally {
            setLoading(false);
        }
    }


    const handleToggleWatch = async (movie) => {
        try {
            await toggleWatchList(user.id, movie);

            // Remove from UI immediately
            setMovies((prev) =>
                prev.filter((m) => m.movie_id !== movie.movie_id)
            );

        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };
    // Refresh then load
    const onRefresh = async () => {
        setRefreshing(true);
        await loadWatchlist();
        setRefreshing(false)
    }
    useFocusEffect(
        useCallback(() => {
            if (user) {
                loadWatchlist();
            }
        }, [user])
    );
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image
                source={{
                    uri: `${IMAGE_BASE_URL}${item.poster_path}`,
                }}
                style={styles.poster}
            />

            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.rating}>
                    ⭐ {item.vote_average.toFixed(1)}
                </Text>

                <Text style={styles.releaseDate}>
                    {item.release_date}
                </Text>

                <TouchableOpacity style={styles.playButton} onPress={() => handlePlayVideo(item.movie_id)}>
                    <Ionicons
                        name="play"
                        size={18}
                        color={COLORS.white}
                    />

                    <Text style={styles.playText}>
                        Watch Trailer
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.bookmarkBtn}
                onPress={() => handleToggleWatch(item)}
            >
                <Ionicons
                    name="bookmark"
                    size={22}
                    color={COLORS.primary}
                />
            </TouchableOpacity>
        </View>
    );
    if (loading) return <Loader />
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My WatchList</Text>
            </View>


            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                refreshing={refreshing}
                onRefresh={onRefresh}
                renderItem={renderItem}
                ListEmptyComponent={
                    <NotFound
                        image={require("../../assets/images/empty-watchlist.png")}
                        text="Your watchlist is empty"
                        subText="Save movies to watch them later."
                    />
                }
            />
        </View>
    )
}

export default MyWatchlist