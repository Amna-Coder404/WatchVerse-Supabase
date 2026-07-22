import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { FlatList, RefreshControl, ScrollView, Text, TextInput, View } from 'react-native'
import COLORS from '../../../constants/color'
import styles from "../../../styles/home.style"

import MovieCard from "../../../components/MovieSection/MovieCard"
import MovieSection from "../../../components/MovieSection/MovieSection"
import NotFound from "../../../components/NotFound"
import {
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies, searchMovies
} from "../../../services/movieApi"
import { useAuthStore } from '../../../store/authStore'

const Home = () => {
    const { getProfile } = useAuthStore();
    const [profile, setProfile] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const [notFound, setNotFound] = useState(false);

    // handle search 
    const handleSearch = async () => {
        if (!search.trim()) {
            setSearchResults([]);
            setNotFound(false);
            return;
        }

        try {
            setLoading(true);

            const data = await searchMovies(search);

            if (data.results.length === 0) {
                setSearchResults([]);
                setNotFound(true);
            } else {
                setSearchResults(data.results);
                setNotFound(false);
            }

        } catch (error) {
            console.log("Search error:", error);
            setSearchResults([]);
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        loadHomeData();
        loadProfile();
    }, []);

    const loadProfile = async () => {
        const data = await getProfile();
        setProfile(data);
    };

    const loadHomeData = async () => {
        try {
            setLoading(true);

            const trendingData = await getTrendingMovies();
            const popularData = await getPopularMovies();
            const topRatedData = await getTopRatedMovies();

            setTrending(trendingData.results);
            setPopular(popularData.results);
            setTopRated(topRatedData.results);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Refresh then load
    const onRefresh = async () => {
        setRefreshing(true);
        await loadHomeData();
        setRefreshing(false)
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[COLORS.primary]} //this is for android
                    tintColor={COLORS.primary} //this is for IOS
                />
            }
        >
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Hi, {profile?.username || "Guest"} 👋
                </Text>
                {/* Search */}
                <View style={styles.inputContainer}>
                    <Ionicons name='search-sharp' color={COLORS.white} size={20} style={styles.inputIcon} />
                    <TextInput
                        placeholder='Search movies...'
                        style={styles.searchInput}
                        placeholderTextColor={"white"}
                        value={search}
                        onChangeText={setSearch}
                        onSubmitEditing={handleSearch}
                    />
                </View>

            </View>

            {
                search.trim() && notFound ? (
                    <NotFound
                        image={require("../../../assets/images/no-search.png")}
                        text="No movies found"
                        subText="Try searching with another movie name"
                    />
                ) : searchResults.length > 0 ? (
                    <>
                        <Text style={styles.heading}>Search Results</Text>

                        <FlatList
                            horizontal
                            data={searchResults}
                            renderItem={({ item }) => (
                                <MovieCard movie={item} />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </>
                ) : (
                    <MovieSection
                        trending={trending}
                        popular={popular}
                        topRated={topRated}
                        loading={loading}
                    />
                )
            }

        </ScrollView>
    )
}

export default Home