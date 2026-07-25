import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGE_BASE_URL } from "../../constants/api";
import COLORS from "../../constants/color";
import { formatDate } from "../../lib/utils";
import { getMovieDetails } from "../../services/movieApi";
import { DeleteReview, getMyReviews } from "../../services/review";
import { useAuthStore } from "../../store/authStore";
import styles from "../../styles/watchlist.style";
import Loader from "../Loader";
import NotFound from "../NotFound";


const MyReviews = () => {
    const { user } = useAuthStore();
    const [reviews, setReviews] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const deleteReview = async (reviewId) => {
        const success = await DeleteReview(reviewId);

        if (success) {
            setReviews((prev) =>
                prev.filter((item) => item.id !== reviewId)
            );
        }
    };
    const handleDeleteReview = (reviewId) => {
        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete your review?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => deleteReview(reviewId)
                }
            ]
        );
    };
    // Load whose movie where I add review
    const loadReviews = async () => {
        try {
            setLoading(true);

            const reviews = await getMyReviews(user.id);

            const reviewsWithMovie = await Promise.all(
                reviews.map(async (review) => {
                    const movie = await getMovieDetails(review.movie_id);

                    return {
                        ...review,
                        movie,
                    }
                })
            )
            setReviews(reviewsWithMovie);
        } catch (error) {
            console.log("Load reviews error:", error);
        } finally {
            setLoading(false);
        }


    }


    // Everytime when we comes this screen then its automatic refresh
    useFocusEffect(
        useCallback(() => {
            if (user) {
                loadReviews();
            }
        }, [user])
    );

    if (loading) return <Loader />
    return (
        <View style={styles.container}>

            {reviews.length == 0 ? (
                <NotFound text="No Reviews Found"
                    subText="You have not added any movie reviews yet" />
            ) : (
                <>
                    <Text style={styles.headerTitle}>
                        My Reviews
                    </Text>
                    <FlatList
                        data={reviews}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <TouchableOpacity style={styles.reviewContent} onPress={() =>
                                    router.push(`/movie/${item.movie.id}`)
                                }>
                                    <Image
                                        source={{ uri: IMAGE_BASE_URL + item.movie.poster_path }}
                                        style={styles.reviewPoster}
                                    />
                                    <View style={styles.info}>
                                        <Text style={styles.title}>{item.movie.title}</Text>
                                        <Text style={styles.rating}>⭐ {item.rating} / 5</Text>
                                        <Text style={styles.review}> {item.review}</Text>
                                        <Text style={styles.time}> {formatDate(item.created_at)}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bookmarkBtn} onPress={() => handleDeleteReview(item.id)}>
                                    <Ionicons
                                        name="trash-outline"
                                        size={22}
                                        color={COLORS.primary}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </>
            )}

        </View>
    )
}


export default MyReviews;