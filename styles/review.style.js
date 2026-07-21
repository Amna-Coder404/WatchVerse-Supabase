import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 12,
        minHeight: 120,
        color: COLORS.white,
        fontSize: 15,
        textAlignVertical: "top", // Android
    },
    modalContainer: {
        width: "100%",
        backgroundColor: "#1F1F1F",
        borderRadius: 18,
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#FFF",
        marginBottom: 20,
    },

    formGroup: {
        width: "100%",
        gap: 16,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        color: COLORS.white,
        marginBottom: 8,
    },

    textArea: {
        backgroundColor: "#2C2C2C",
        color: "#FFF",
        borderRadius: 12,
        minHeight: 120,
        padding: 15,
        textAlignVertical: "top",
        fontSize: 15,
    },

    ratingContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },

    starButton: {
        marginHorizontal: 4,
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
        marginTop: 10,
    },

    submitText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    cancelButton: {
        position: "absolute",
        top: 0,
        right: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.1)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,

    },

    // REVIEW CONTAINER
    reviewContainer: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },

    addReview: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },

    addReviewText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    myReviewCard: {
        backgroundColor: "#1F2937",
        borderRadius: 12,
        padding: 15,
        marginVertical: 15,
    },

    reviewTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },

    reviewText: {
        color: "#E5E7EB",
        fontSize: 15,
        lineHeight: 22,
    },

    reviewRating: {
        color: "#FFD700",
        marginTop: 10,
        fontWeight: "600",
    },

    actionRow: {
        flexDirection: "row",
        marginTop: 18,
    },

    editButton: {
        flex: 1,
        backgroundColor: "#2563EB",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginRight: 8,
    },

    deleteButton: {
        flex: 1,
        backgroundColor: "#DC2626",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },

    actionText: {
        color: "#fff",
        fontWeight: "600",
    },

    ReviewCard: {
        backgroundColor: "#111827",
        padding: 15,
        borderRadius: 12,
        marginTop: 12,
    },

    username: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },

    reviewText: {
        color: "#ddd",
        marginTop: 8,
        fontSize: 15,
    },

    reviewRating: {
        color: "#f4b400",
        marginTop: 8,
    },

    actionRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 20,
    },

    editButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: COLORS.card, // or COLORS.surface

        paddingVertical: 14,
        borderRadius: 14,

        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.08)",
    },

    deleteButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "rgba(255,107,107,0.12)",

        paddingVertical: 14,
        borderRadius: 14,

        borderWidth: 1,
        borderColor: "rgba(255,107,107,0.25)",
    },

    actionText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "600",
        marginLeft: 8,
    },

    deleteText: {
        color: "#FF6B6B",
        fontSize: 15,
        fontWeight: "600",
        marginLeft: 8,
    },
});

export default styles;