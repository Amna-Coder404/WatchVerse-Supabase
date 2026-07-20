import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "../../styles/trailer.style";

export default function Trailer() {
    const router = useRouter();
    const { key } = useLocalSearchParams();

    const videoId = Array.isArray(key) ? key[0] : key;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <View style={styles.playerContainer}>
                <YoutubePlayer
                    height={220}
                    width={350}
                    play={true}
                    videoId={videoId}
                />
            </View>
        </View>
    );
}