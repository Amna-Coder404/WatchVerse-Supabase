import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { pickAvatar } from "../../lib/avatar";
import { useAuthStore } from "../../store/authStore";
import styles from "../../styles/profile.style";

const ProfileHeader = () => {
    const { user, profile, updateAvatar } = useAuthStore();

    const handleAvatar = async () => {
        if (!user) {
            Alert.alert("Error", "User not loaded.");
            return;
        }
        const url = await pickAvatar(user.id);

        if (!url) return;

        await updateAvatar(url);
    };

    return (
        <>
            <View style={styles.avatarContainer}>
                {/* TODO later : add udpate Logic */}
                <TouchableOpacity onPress={handleAvatar}>
                    <Image
                        source={
                            profile?.avatar_url
                                ? { uri: profile.avatar_url }
                                : require("../../assets/images/tabIcons/user.png")
                        }
                        style={styles.avatar}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAvatar}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            {/* User Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.username}>{profile?.username}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>
        </>
    )
}

export default ProfileHeader