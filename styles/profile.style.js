import { StyleSheet } from "react-native";
import COLORS from "../constants/color";


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 18,
        paddingTop: 20,
    },


    // Top drawer area
    drawerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingBottom: 15,

        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.08)",
    },


    logo: {
        width: 170,
        height: 70,
        resizeMode: "contain",
    },


    closeButton: {
        width: 42,
        height: 42,

        borderRadius: 21,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: COLORS.cardBackground,
    },


    // Profile
    avatarContainer: {
        alignItems: "center",
        marginTop: 35,
    },


    avatar: {
        width: 100,
        height: 100,

        borderRadius: 50,

        borderWidth: 3,
        borderColor: COLORS.primary,
    },


    infoContainer: {
        alignItems: "center",

        marginTop: 18,
        marginBottom: 30,
    },


    username: {
        color: COLORS.white,

        fontSize: 24,

        fontWeight: "800",
    },


    email: {
        color: COLORS.textSecondary,

        fontSize: 14,

        marginTop: 6,
    },


    // Logout bottom area
    logoutContainer: {
        marginTop: "auto",

        marginBottom: 25,
    },


});