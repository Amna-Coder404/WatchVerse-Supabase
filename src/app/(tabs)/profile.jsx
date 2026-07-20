import { View } from 'react-native';
import { useAuthStore } from '../../../store/authStore';
import styles from "../../../styles/profile.style";

const Profile = () => {
    const { getProfile } = useAuthStore();
    console.log("USEr", getProfile())
    return (
        <View style={styles.container}>
            {/* <Image source={{uri : user.}} style={styles.avatar} /> */}
        </View>
    )
}

export default Profile