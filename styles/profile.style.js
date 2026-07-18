import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        paddingTop: 50,
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: COLORS.cardBackground,
    },

    name: {
        color: COLORS.white,
        fontSize: 24,
        fontWeight: "700",
        marginTop: 20,
    },

    email: {
        color: COLORS.textSecondary,
        marginTop: 6,
    },

    card: {
        width: "92%",
        backgroundColor: COLORS.cardBackground,
        borderRadius: 18,
        marginTop: 35,
        padding: 20,
    },
});