import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../../store/authStore';
import styles from "../../../styles/profile.style";

const Profile = () => {
    const { logout } = useAuthStore();

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={logout}>
                <Text style={styles.name}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile