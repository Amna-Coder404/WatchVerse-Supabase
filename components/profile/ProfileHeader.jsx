
import { Image, Text, View } from 'react-native';
import { useAuthStore } from "../../store/authStore";
import styles from "../../styles/profile.style";

const ProfileHeader = () => {
    const { user, profile, } = useAuthStore();


    return (
        <>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri:
                            "https://i.pravatar.cc/150"
                    }}
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