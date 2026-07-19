import { useEffect, useState } from "react";

import { getWatchList } from "../../../services/watchlist";
import { useAuthStore } from "../../../store/authStore";

import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { IMAGE_BASE_URL } from "../../../constants/api";
import COLORS from "../../../constants/color";
import styles from "../../../styles/watchlist.style";

import NotFound from "../../../components/NotFound";


const Watchlist = () => {
    const { user } = useAuthStore();

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

    // Refresh then load
    const onRefresh = async () => {
        setRefreshing(true);
        await loadWatchlist();
        setRefreshing(false)
    }

    useEffect(() => {
        if (user) {
            loadWatchlist();
        }
    }, [user])


    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Watch List</Text>
            </View>


            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                refreshing={refreshing}
                onRefresh={onRefresh}

                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={{
                                uri: `${IMAGE_BASE_URL}${item.poster_path}`,
                            }}
                            style={styles.poster}
                        />

                        <View style={styles.info}>
                            <Text style={styles.title}>{item.title}</Text>

                            <Text style={styles.rating}>  ⭐ {item.vote_average.toFixed(1)}</Text>

                            <Text style={styles.releaseDate}>
                                {item.release_date}
                            </Text>

                        </View>

                        <TouchableOpacity style={styles.playButton}>
                            <Ionicons name="play" size={18} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                )}

                ListEmptyComponent={
                    <NotFound
                        image={require("../../../assets/images/empty-watchlist.png")}
                        text="Your watchlist is empty"
                        subText="Save movies to watch them later."
                    />
                }
            />
        </View>
    )
}

export default Watchlist