import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, } from "react-native";
import AnimatedScreen from "../../../../components/AnimatedScreen";
import styles from "../../../../styles/home.style";

// API functions
import {
    getPopularMovies, getTopRatedMovies, getTrendingMovies, searchMovies,
} from "../../../../services/movieApi";


// Components
import HomeHeader from "../../../../components/Home/HomeHeader";
import SearchBar from "../../../../components/Home/SearchBar";
import MovieCard from "../../../../components/MovieSection/MovieCard";
import MovieSection from "../../../../components/MovieSection/MovieSection";
import NotFound from "../../../../components/NotFound";


// Constants and store
import COLORS from "../../../../constants/color";
import { useAuthStore } from "../../../../store/authStore";


const Home = () => {

    // Get profile function from Zustand store
    const { getProfile } = useAuthStore();

    // Navigation for opening drawer
    const navigation = useNavigation();

    // User profile data
    const [profile, setProfile] = useState(null);

    // Refresh loading state
    const [refreshing, setRefreshing] = useState(false);

    // Search states
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [notFound, setNotFound] = useState(false);

    // Movie data states
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);


    // Main loading state
    const [loading, setLoading] = useState(true);


    // Toggle Search Bar
    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };


    // Search movies from TMDB API

    const handleSearch = async () => {
        // If input is empty clear results
        if (!search.trim()) {
            setSearchResults([]);
            setNotFound(false);
            return;
        }

        try {
            setLoading(true);
            const data = await searchMovies(search);
            // If API returns no movies
            if (data.results.length === 0) {

                setSearchResults([]);
                setNotFound(true);
            } else {
                setSearchResults(data.results);
                setNotFound(false);
            }
        } catch (error) {
            console.log("Search Error:", error);
            setSearchResults([]);
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    };



    // Load data when screen opens

    useEffect(() => {
        loadHomeData();
        loadProfile();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setSearchResults([]);
        }
    }, [search]);
    // Get logged-in user profile
    const loadProfile = async () => {

        const data = await getProfile();

        setProfile(data);

    };


    // Load Home Movies

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
            console.log("Home Error:", error);
        } finally {
            setLoading(false);
        }
    };

    // Pull to refresh function
    const onRefresh = async () => {
        setRefreshing(true);
        await loadHomeData();
        setRefreshing(false);

    };


    return (
        <AnimatedScreen>

            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[COLORS.primary]}
                        tintColor={COLORS.primary}
                    />
                } >
                {/* 
                Header Component
                Contains:
                - App logo
                - Search button
                - Profile image

            */}
                <HomeHeader
                    profile={profile}
                    navigation={navigation}
                    showSearch={showSearch}
                    toggleSearch={toggleSearch}
                />

                {/* 
                Search Component
                Contains:
                - Animated search input
                - Search logic connection

            */}

                <SearchBar
                    visible={showSearch}
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />

                {
                    search.trim() && notFound ? (
                        <NotFound
                            image={require("../../../../assets/images/no-search.png")}
                            text="No movies found"
                            subText="Try searching with another movie name"
                        />

                    ) : searchResults.length > 0 ? (

                        <>
                            <Text style={styles.heading}>
                                Search Results
                            </Text>

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
                    )}
            </ScrollView>
        </AnimatedScreen>
    );
};


export default Home;