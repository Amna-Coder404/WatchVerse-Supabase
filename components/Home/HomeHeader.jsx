import { Ionicons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";

import COLORS from "../../constants/color";
import styles from "../../styles/home.style";


const HomeHeader = ({ profile, navigation, showSearch, toggleSearch, }) => {

    return (
        <View style={styles.header}>

            {/* App Logo */}
            <Image
                source={require("../../assets/images/tabIcons/watchVerse-logo.png")}
                style={styles.logo}
            />

            <View style={styles.headerActions}>
                {/* Search Toggle */}
                <TouchableOpacity style={styles.iconButton}
                    onPress={toggleSearch}
                >
                    <Ionicons
                        name={showSearch ? "close" : "search"}
                        size={26}
                        color={COLORS.white}
                    />
                </TouchableOpacity>

                {/* Profile */}
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => navigation.openDrawer()}
                >

                    {/* TODO :LAter Add USer Own Image form gallary */}
                    {/* <Image
                        source={{
                            uri:
                                profile?.avatar_url ||
                                "https://i.pravatar.cc/150"
                        }}
                        style={styles.profileImage}
                    /> */}
                    <Image
                        source={
                            profile?.avatar_url
                                ? { uri: profile.avatar_url }
                                : require("../../assets/images/tabIcons/user.png")
                        }
                        style={styles.profileImage}
                    />
                </TouchableOpacity>


            </View>


        </View>
    );
};


export default HomeHeader;