
import { Image, Text, View } from 'react-native';
import { useAuthStore } from "../../store/authStore";
import styles from "../../styles/profile.style";

const ProfileHeader = () => {
    const { user, profile, } = useAuthStore();


    return (
        <>
            <View style={styles.avatarContainer}>
                {/* TODO later : add udpate Logic */}
                <Image
                    source={
                        profile?.avatar_url
                            ? { uri: profile.avatar_url }
                            : require("../../assets/images/tabIcons/user.png")
                    }
                    style={styles.avatar}
                />
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