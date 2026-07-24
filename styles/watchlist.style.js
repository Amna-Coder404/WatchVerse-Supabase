import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 18,
    },
    header: {
        paddingBottom: 20,
    },
    reviewContent: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: COLORS.textPrimary,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#35004e20",
        borderRadius: 18,
        marginBottom: 18,
        overflow: "hidden",
        padding: 12
    },

    poster: {
        width: 95,
        height: 140,
        borderRadius: 10,
    },

    info: {
        flex: 1,
        marginLeft: 15,
        position: "relative",
        gap: 5
    },
    title: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "700",
        marginRight: 40
    },

    year: {
        color: COLORS.textSecondary,
    },

    rating: {
        color: COLORS.gold,
    },
    releaseDate: {
        color: COLORS.textSecondary,
        fontSize: 13,
        marginTop: 4,
    },

    bookmarkBtn: {
        position: "absolute",
        top: 8,
        right: 10,
        padding: 4,
    },

    playButton: {
        marginTop: 15,
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        width: "100%",
        justifyContent: "center"
    },

    playText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
        marginLeft: 6,
    },
    reviewPoster: {
        width: 70,
        height: 100,
        borderRadius: 8,
    },

    review: {
        fontSize: 14,
        marginBottom: 8,
        color: COLORS.white,
    },
    time: {
        fontSize: 12,
        opacity: 0.7,
        color: "#9CA3AF",
    },

});