import { useEffect } from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProfileHeader from "../../../components/profile/ProfileHeader";
import COLORS from "../../../constants/color";
import { useAuthStore } from "../../../store/authStore";
import styles from "../../../styles/profile.style";

const Profile = () => {
    const router = useRouter();

    const {
        logout,
        getProfile,
        profile,
        user,
    } = useAuthStore();


    useEffect(() => {
        getProfile();
    }, []);


    return (
        <View style={styles.container}>
            <ProfileHeader />

            {/* MENU ITEMS */}
            <TouchableOpacity style={styles.menuCard} onPress={() => router.push("/(tabs)/watchlist")}>
                <Ionicons name="bookmarks-outline" size={26} color={COLORS.primary} />
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuTitle}>
                        My Watchlist
                    </Text>

                    <Text style={styles.menuSubtitle}>
                        Movies saved for later
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color={COLORS.textSecondary} />
            </TouchableOpacity>


            <TouchableOpacity style={styles.menuCard}
                onPress={() => router.push({
                    pathname: "/(tabs)/watchlist",
                    params: {
                        tab: "reviews"
                    }
                })}
            >
                <Ionicons name="star-outline" size={26} color={COLORS.primary} />
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuTitle}>
                        My Reviews
                    </Text>

                    <Text style={styles.menuSubtitle}>
                        Your movie opinions
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color={COLORS.textSecondary} />
            </TouchableOpacity>

            {/* Logout */}

            <TouchableOpacity onPress={logout} style={styles.logoutButton}>
                <Ionicons name="log-out-outline" size={22} color="#FF6B6B" />
                <Text style={styles.logoutText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default Profile;