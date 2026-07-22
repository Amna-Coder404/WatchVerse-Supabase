import { useCallback, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { DeleteReview, getMovieReviews, getMyReview } from "../../services/review";
import styles from "../../styles/review.style";

import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import ReviewModal from "../../components/MovieSection/ReviewModal";

const MovieReviews = ({ userId, movie }) => {
    const [reviews, setReviews] = useState([]);
    const [myReview, setMyReview] = useState(null);
    const [visible, setVisible] = useState(false);


    const loadReviews = async () => {

        try {
            const data = await getMovieReviews(movie.id);
            setReviews(data);

            if (userId) {
                const myReviewData = await getMyReview(userId, movie.id);
                setMyReview(myReviewData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteReview = async () => {
        const success = await DeleteReview(myReview.id);

        if (success) {
            setMyReview(null);
            loadReviews();
        }
    }
    const handleDeleteReview = async () => {
        Alert.alert(
            "Delete Review",
            "Are you sure you want to delete your review ?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: deleteReview }
            ]
        )
    }


    useFocusEffect(
        useCallback(() => {
            loadReviews();
        }, [userId, movie])
    );


    return (
        <View style={styles.reviewContainer}>
            {myReview ? (
                <View style={styles.ReviewCard}>
                    <View style={styles.userInfo}>

                        <Image
                            source={{
                                uri: myReview.profiles?.avatar_url
                            }}
                            style={styles.avatar}
                        />

                        <Text style={styles.username}>
                            {myReview.profiles?.username}
                        </Text>

                    </View>
                    <Text style={styles.reviewText}>{myReview.review}</Text>
                    <Text style={styles.reviewRating}>
                        ⭐ {myReview.rating}/5
                    </Text>

                    {/* Action Buttons */}
                    <View style={styles.actionRow}>
                        <TouchableOpacity onPress={() => setVisible(true)} style={styles.editButton}>
                            <Ionicons
                                name="create-outline"
                                size={18}
                                color="#fff"
                            />
                            <Text style={styles.actionText}>Edit Review</Text>
                        </TouchableOpacity>
                        {/* delete */}
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteReview} >
                            <Ionicons name="trash-outline" size={18} color="#fff" />
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ) : (
                <TouchableOpacity onPress={() => setVisible(true)} style={styles.addReview}>
                    <Text style={styles.addReviewText}>Add Review</Text>
                </TouchableOpacity>

            )
            }

            {/* Other Reviews */}
            {reviews.filter(item => item.user_id !== userId).map((item => (
                <View key={item.id} style={styles.ReviewCard}>
                    {/* User Info */}
                    <View style={styles.userInfo}>
                        <Image
                            source={{
                                uri: item.profiles?.avatar_url ||
                                    "https://i.pravatar.cc/100"
                            }}
                            style={styles.avatar}
                        />
                        <Text style={styles.username}>
                            {item.profiles?.username || "Unknown User"}
                        </Text>
                    </View>
                    <Text style={styles.reviewText}>{item.review}</Text>
                    <Text style={styles.reviewRating}>
                        ⭐ {item.rating}/5
                    </Text>
                </View>
            )))}

            {/* Review Modal */}
            <ReviewModal
                visible={visible}
                movie={movie}
                userId={userId}
                onClose={() => setVisible(false)}
                review={myReview}
                onSuccess={() => {
                    setVisible(false);
                    loadReviews()
                }}
            />
        </View >
    );
};


export default MovieReviews;