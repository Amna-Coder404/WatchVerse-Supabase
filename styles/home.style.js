import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 18,

    },

    header: {
        marginTop: 20,
        marginBottom: 25,
    },
    headerText: {
        color: COLORS.white,
        marginBottom: 12,
        fontSize: 25,
        fontWeight: "bold"
    },

    heading: {
        color: COLORS.textPrimary,
        fontSize: 30,
        fontWeight: "700",
        paddingBottom: 20
    },

    subHeading: {
        color: COLORS.textSecondary,
        marginTop: 6,
        fontSize: 15,
    },

    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#FFFFFF",

    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 58,

        backgroundColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.18)",

        borderRadius: 18,
        paddingHorizontal: 16,
    },
    movieCard: {
        width: 150,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 16,
        marginBottom: 12
    },

    poster: {
        width: "100%",
        height: 220,
    },

    movieTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "600",
    },

    rating: {
        color: COLORS.gold,
        marginTop: 4,
        fontWeight: "500",
    },

    // NOT FOUND component
    notFoundContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },

    notFoundEmoji: {
        fontSize: 50,
    },

    notFoundText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },

    notFoundSubText: {
        color: COLORS.white,
        marginTop: 5,
    },
});