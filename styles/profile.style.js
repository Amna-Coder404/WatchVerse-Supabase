import { StyleSheet } from "react-native";
import COLORS from "../constants/color";


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
        paddingTop: 60,
    },


    avatarContainer: {
        alignItems: "center",
    },


    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,

        borderWidth: 3,
        borderColor: COLORS.primary,
    },


    infoContainer: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
    },


    username: {
        color: COLORS.white,
        fontSize: 26,
        fontWeight: "800",
    },


    email: {
        color: COLORS.textSecondary,
        fontSize: 14,
        marginTop: 8,
    },



    menuCard: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: COLORS.cardBackground,

        padding: 18,

        borderRadius: 18,

        marginBottom: 16,

        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
    },


    menuTextContainer: {
        flex: 1,
        marginLeft: 15,
    },


    menuTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },


    menuSubtitle: {
        color: COLORS.textSecondary,
        marginTop: 5,
        fontSize: 13,
    },



    logoutButton: {
        marginTop: 30,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        borderRadius: 18,
        backgroundColor: "rgba(255,90,90,0.12)",
        borderWidth: 1,
        borderColor: "rgba(255,90,90,0.25)",
    },


    logoutText: {
        color: "#FF6B6B",
        marginLeft: 10,

        fontSize: 16,
        fontWeight: "700",
    },
});