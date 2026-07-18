import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 20,
    },

    title: {
        color: COLORS.white,
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 30,
    },

    input: {
        backgroundColor: COLORS.cardBackground,
        color: COLORS.white,
        borderRadius: 16,
        paddingHorizontal: 18,
        height: 55,
        marginBottom: 18,
    },

    textArea: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        color: COLORS.white,
        height: 160,
        padding: 18,
        textAlignVertical: "top",
        marginBottom: 20,
    },

    button: {
        backgroundColor: COLORS.primary,
        height: 56,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },
});