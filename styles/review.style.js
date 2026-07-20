import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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
        textAlignVertical: "top", // Android
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
        color: "#FFF",
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

    textArea: {
        backgroundColor: "#2C2C2C",
        color: "#FFF",
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
    reviewContainer: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },


    heading: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 16,
    },


    empty: {
        color: "#999",
        fontSize: 15,
        textAlign: "center",
        marginTop: 20,
    },


    reviewCard: {
        backgroundColor: "#1c1c1e",
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
    },


    myReviewCard: {
        borderWidth: 1,
        borderColor: "#f4b400",
        backgroundColor: "#222",
    },


    myReviewTitle: {
        color: "#f4b400",
        fontSize: 14,
        fontWeight: "700",
        marginBottom: 10,
    },


    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },


    reviewText: {
        color: "#fff",
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 12,
    },


    date: {
        color: "#888",
        fontSize: 12,
    },


    userReviewSection: {
        marginBottom: 20,
    },


    sectionTitle: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 10,
    },


});

export default styles;