import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
    },

    backdrop: {
        width: "100%",
        height: 320,
    },

    backBtn: {
        position: "absolute",
        top: 55,
        left: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 10,
        borderRadius: 30,
    },

    content: {
        padding: 20,
    },

    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },

    info: {
        color: "#ccc",
        marginTop: 10,
        fontSize: 15,
    },

    heading: {
        color: "white",
        marginTop: 25,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
    },

    overview: {
        color: "#ccc",
        lineHeight: 24,
    },

    genreContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    genre: {
        backgroundColor: "#222",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },

    genreText: {
        color: "white",
    },

    castCard: {
        width: 90,
        marginRight: 15,
    },

    castImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    castName: {
        color: "white",
        marginTop: 8,
        textAlign: "center",
    },

    button: {
        backgroundColor: "#7C4DFF",
        marginVertical: 30,
        padding: 18,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonIcon: {
        fontWeight: "bold",
    }
});
