import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scrollContent: {
        paddingBottom: 40,
    },

    backdrop: {
        width: "100%",
        height: 320,
    },

    poster: {
        width: 160,
        height: 240,
        borderRadius: 20,
        alignSelf: "center",
        marginTop: -100,
        borderWidth: 3,
        borderColor: COLORS.cardBackground,
    },

    content: {
        paddingHorizontal: 20,
        marginTop: 20,
    },

    title: {
        color: COLORS.textPrimary,
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
    },

    yearGenre: {
        color: COLORS.textSecondary,
        fontSize: 15,
        textAlign: "center",
        marginTop: 8,
    },

    ratingContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },

    rating: {
        color: COLORS.gold,
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 6,
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
    },

    primaryButton: {
        flex: 1,
        backgroundColor: COLORS.primary,
        height: 52,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    secondaryButton: {
        flex: 1,
        backgroundColor: COLORS.cardBackground,
        height: 52,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "600",
    },

    section: {
        marginTop: 30,
    },

    sectionTitle: {
        color: COLORS.textPrimary,
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
    },

    overview: {
        color: COLORS.textSecondary,
        lineHeight: 24,
        fontSize: 15,
    },

    infoCard: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 18,
        padding: 18,
        marginTop: 15,
    },

    infoTitle: {
        color: COLORS.textSecondary,
        fontSize: 13,
        marginBottom: 4,
    },

    infoValue: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "600",
    },

    castContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },

    castChip: {
        backgroundColor: COLORS.cardBackground,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 30,
        marginRight: 10,
        marginBottom: 10,
    },

    castText: {
        color: COLORS.white,
        fontSize: 14,
    },

    reviewCard: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 18,
        padding: 16,
        marginBottom: 15,
    },

    reviewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },

    reviewerName: {
        color: COLORS.white,
        fontWeight: "700",
        fontSize: 15,
    },

    reviewRating: {
        color: COLORS.gold,
        fontWeight: "700",
    },

    reviewText: {
        color: COLORS.textSecondary,
        lineHeight: 22,
    },

    writeReviewButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 16,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
    },

    writeReviewText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },
});