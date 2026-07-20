import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getMovieReviews, getMyReview } from "../services/review";
import styles from "../styles/review.style";

import { Ionicons } from "@expo/vector-icons";


const MovieReviews = ({ userId, movieId }) => {
    const [reviews, setReviews] = useState([]);
    const [myReview, setMyReview] = useState(null);

    const loadReviews = async () => {
        try {
            const data = await getMovieReviews(movieId);
            setReviews(data);

            if (userId) {
                const myReviewData = await getMyReview(userId, movieId);
                setMyReview(myReviewData);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        loadReviews();
    }, [userId, movieId]);



    return (
        <View style={styles.reviewContainer}>

            {/* My Review */}
            {
                myReview && (
                    <View style={styles.reviewCard}>

                        <Text style={styles.sectionTitle}>
                            Your Review
                        </Text>


                        <View style={styles.ratingRow}>

                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <Ionicons
                                        key={index}
                                        name={
                                            index < myReview.rating
                                                ? "star"
                                                : "star-outline"
                                        }
                                        size={16}
                                        color="#f4b400"
                                    />
                                ))
                            }

                        </View>


                        <Text style={styles.reviewText}>
                            {myReview.review}
                        </Text>


                        <Text style={styles.date}>
                            {
                                new Date(
                                    myReview.created_at
                                ).toLocaleDateString()
                            }
                        </Text>

                    </View>
                )
            }



            {/* Other Reviews */}

            <Text style={styles.sectionTitle}>
                Other Reviews
            </Text>


            {
                reviews.filter(
                    (review) => review.id !== myReview?.id
                ).length === 0 ? (

                    <Text style={styles.empty}>
                        No other reviews yet
                    </Text>

                ) : (

                    reviews
                        .filter(
                            (review) => review.id !== myReview?.id
                        )
                        .map((review) => (

                            <View
                                key={review.id}
                                style={styles.reviewCard}
                            >

                                <View style={styles.ratingRow}>

                                    {
                                        Array.from({ length: 5 }).map((_, index) => (
                                            <Ionicons
                                                key={index}
                                                name={
                                                    index < review.rating
                                                        ? "star"
                                                        : "star-outline"
                                                }
                                                size={16}
                                                color="#f4b400"
                                            />
                                        ))

                                    }

                                </View>


                                <Text style={styles.reviewText}>
                                    {review.review}
                                </Text>


                                <Text style={styles.date}>
                                    {
                                        new Date(
                                            review.created_at
                                        ).toLocaleDateString()
                                    }
                                </Text>


                            </View>

                        ))
                )
            }

        </View>
    );
};


export default MovieReviews;