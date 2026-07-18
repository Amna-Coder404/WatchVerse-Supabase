import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 18,
    },

    card: {
        flexDirection: "row",
        backgroundColor: COLORS.cardBackground,
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
});