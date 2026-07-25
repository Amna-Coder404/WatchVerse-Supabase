import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";

import AppButton from "../components/AppButton";
import COLORS from "../constants/color";
import { useAuthStore } from "../store/authStore";
import styles from "../styles/profile.style";
import ProfileHeader from "./profile/ProfileHeader";


const CustomDrawer = (props) => {

    const { logout } = useAuthStore();

    return (
        <View style={styles.container}>


            {/* Drawer Header */}
            <View style={styles.drawerHeader}>

                {/* App Logo */}
                <Image
                    source={require("../assets/images/tabIcons/watchVerse-logo.png")}
                    style={styles.logo}
                />


                {/* Close Button */}
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <Ionicons
                        name="close"
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>

            </View>



            {/* User Profile */}
            <ProfileHeader />



            {/* Bottom Logout Button */}
            <View style={styles.logoutContainer}>

                <AppButton
                    title="Logout"
                    icon="logout"
                    onPress={logout}
                />

            </View>


        </View>
    );
};


export default CustomDrawer;