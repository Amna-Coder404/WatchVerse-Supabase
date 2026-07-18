import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingTop: 80,
    },
    background: {
        flex: 1,
    },

    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.65)", // dark overlay
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    logoContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: COLORS.inputBackground,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 24,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    logo: {
        width: 90,
        height: 90,
        alignSelf: "center",
        marginBottom: 30,
    },

    title: {
        fontSize: 34,
        fontWeight: "800",
        color: COLORS.textPrimary,
        textAlign: "center",
        letterSpacing: 0.3,
    },

    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
        textAlign: "center",
        lineHeight: 24,
        marginTop: 10,
        marginBottom: 42,
        paddingHorizontal: 20,
    },
    formContainer: {
        marginTop: 10
    },
    inputGroup: {
        marginBottom: 20,
    },
    eyeIcon: {
        padding: 8,

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
    inputIcon: {
        marginRight: 12,
    },


    input: {
        flex: 1,
        fontSize: 16,
        color: "#FFFFFF",

    },
    button: {
        backgroundColor: COLORS.primary,
        height: 58,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
    },
    footerText: {
        color: COLORS.textSecondary,
        marginRight: 5,
    },
    link: {
        color: COLORS.primary,
        fontWeight: "600",
    },
});