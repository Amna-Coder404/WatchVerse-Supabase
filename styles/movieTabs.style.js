import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    tabBar: {
        flexDirection: "row",
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: "#2A2A2A",
    },

    tabButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
    },

    tabText: {
        color: "#8E8E93",
        fontSize: 16,
        fontWeight: "600",
    },

    activeText: {
        color: COLORS.white,
    },

    indicator: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 3,
        width: "50%",
        backgroundColor: "#8B5CF6",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    scene: {
        flex: 1,
    },

    scrollContent: {
        paddingBottom: 40,
    },
});