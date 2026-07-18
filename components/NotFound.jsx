import { Text, View } from 'react-native'
import styles from "../styles/home.style"

const NotFound = ({ text, subText }) => {
    return (
        <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundEmoji}>😢</Text>

            <Text style={styles.notFoundText}>
                {text}
            </Text>

            <Text style={styles.notFoundSubText}>
                {subText}
            </Text>
        </View>
    )
}

export default NotFound