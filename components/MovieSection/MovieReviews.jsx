import { useCallback, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import AppButton from "../../components/AppButton";
import { DeleteReview, getMovieReviews, getMyReview } from "../../services/review";
import styles from "../../styles/review.style";

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

                        <AppButton title="Edit Review" onPress={() => setVisible(true)} icon="pencil"
                        />

                        {/* delete */}
                        <AppButton
                            title="Delete" onPress={handleDeleteReview}
                            mode="danger"
                            icon="delete"
                        />

                    </View>
                </View>

            ) : (
                <AppButton
                    title="Add Review" onPress={() => setVisible(true)}
                    icon="pencil"
                />
            )
            }

            {/* Other Reviews */}
            {reviews.filter(item => item.user_id !== userId).map((item => (
                <View key={item.id} style={styles.ReviewCard}>
                    {/* User Info */}
                    <View style={styles.userInfo}>
                        <Image
                            source={
                                item.profiles?.avatar_url
                                    ? { uri: item.profiles.avatar_url }
                                    : require("../../assets/images/tabIcons/login-bg.jpg")
                            }
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