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
    },

    poster: {
        width: 95,
        height: 140,
    },

    info: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },

    title: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "700",
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

    playButton: {
        marginTop: 53,
        marginRight: 23,
        width: 50,
        height: 50,
        borderRadius: 25,

        backgroundColor: COLORS.primary,

        justifyContent: "center",
        alignItems: "center",

        elevation: 6,
    }
});