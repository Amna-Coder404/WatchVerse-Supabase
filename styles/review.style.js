import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

const styles = StyleSheet.create({
    // ===========================
    // Modal
    // ===========================
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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
        color: COLORS.white,
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
        textAlignVertical: "top",
    },

    textArea: {
        backgroundColor: "#2C2C2C",
        color: COLORS.white,
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

    // ===========================
    // Reviews
    // ===========================
    reviewContainer: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },

    reviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    reviewHeading: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "700",
    },

    reviewCount: {
        color: COLORS.textSecondary,
        fontSize: 15,
        fontWeight: "600",
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

    // ===========================
    // Cards
    // ===========================
    myReviewCard: {
        backgroundColor: "#1F2937",
        borderRadius: 14,
        padding: 16,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },

    ReviewCard: {
        backgroundColor: "#111827",
        borderRadius: 14,
        padding: 16,
        marginTop: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    reviewTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
    },

    // ===========================
    // User Info
    // ===========================
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },

    userDetails: {
        flex: 1,
        justifyContent: "center",
    },

    username: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    reviewRating: {
        color: "#FFD54F",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 4,
    },

    reviewText: {
        color: "#E5E7EB",
        fontSize: 15,
        lineHeight: 22,
        marginTop: 4,
    },

    actionRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 18,
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },

    time: {
        color: COLORS.textSecondary,
        fontSize: 13,
    },

    dot: {
        color: COLORS.textSecondary,
        marginHorizontal: 8,
        fontSize: 13,
    },

    ReviewCard: {
        backgroundColor: "#111827",
        borderRadius: 16,
        padding: 16,
        marginTop: 14,
        borderWidth: 1,
        borderColor: COLORS.border,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
    },

    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 27,
        marginRight: 14,
    },

    userDetails: {
        flex: 1,
    },

    username: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    reviewRating: {
        color: "#FFD54F",
        fontSize: 14,
        fontWeight: "700",
    },

    reviewText: {
        color: "#E5E7EB",
        fontSize: 15,
        lineHeight: 24,
    },
});

export default styles;