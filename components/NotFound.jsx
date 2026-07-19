import { Image, Text, View } from "react-native";
import styles from "../styles/home.style";

const NotFound = ({ text, subText, image }) => {
    return (
        <View style={styles.notFoundContainer}>
            <Image
                source={image}
                style={styles.notFoundImage}
                resizeMode="contain"
            />

            <Text style={styles.notFoundText}>
                {text}
            </Text>

            <Text style={styles.notFoundSubText}>
                {subText}
            </Text>
        </View>
    );
};

export default NotFound;