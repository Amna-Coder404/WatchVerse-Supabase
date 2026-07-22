import { useEffect, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import COLORS from "../../constants/color";
import { createReview, updateReview } from "../../services/review";
import styles from "../../styles/review.style";





const ReviewModal = ({ movie, userId, onClose, visible, review, onSuccess }) => {
    const [caption, setCaption] = useState("");
    const [rating, setRating] = useState(0);

    // Renders an interactive 5-star rating picker.
    const renderRatingPicker = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)} style={styles.starButton}>
                    <Ionicons
                        name={i <= rating ? "star" : "star-outline"}
                        size={32}
                        color={i <= rating ? "#f4b400" : COLORS.textSecondary}
                    />
                </TouchableOpacity>
            )
        }

        return <View style={styles.ratingContainer}>{stars}</View>
    }
    useEffect(() => {
        if (visible) {
            setCaption(review?.review || "");
            setRating(review?.rating || 0);
        }
    }, [visible, review]);

    // Handle Submit Button
    const handleSubmit = async () => {
        if (!caption.trim() || rating === 0) {
            Alert.alert("Error", "Please write a review and select a rating.");
            return;
        }

        if (review) {
            const success = await updateReview(
                review.id,
                caption,
                rating
            )

            if (!success) return;
            Alert.alert("Success", "Review updated.");
        } else {
            const newReview = await createReview(
                userId,
                movie.id,
                caption,
                rating
            );

            if (!newReview) return;

            Alert.alert("Success", "Review added successfully")
        }


        setCaption("");
        setRating(0);
        onSuccess();
    }


    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}>
            {/* Caption */}
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.formGroup}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onClose}
                        >
                            <Ionicons
                                name="close"
                                size={24}
                                color={COLORS.white}
                            />
                        </TouchableOpacity>

                        <Text style={styles.label}>Caption</Text>

                        <TextInput
                            placeholder="Write your review or thoughts about the Movie....."
                            style={styles.input}
                            placeholderTextColor={"white"}
                            value={caption}
                            onChangeText={setCaption}

                            multiline
                        />


                        <Text style={styles.label}>Rating</Text>
                        {renderRatingPicker()}

                        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                            <Text style={styles.submitText}>
                                {review ? "Update Review" : "Submit Review"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default ReviewModal