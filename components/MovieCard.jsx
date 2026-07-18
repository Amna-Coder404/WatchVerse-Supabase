import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMAGE_BASE_URL } from '../constants/api';
import styles from "../styles/home.style";

const MovieCard = ({ movie, onPress }) => {
    return (
        <TouchableOpacity style={styles.movieCard} activeOpacity={0.8} onPress={() => onPress?.(movie)}>
            <Image
                source={{
                    uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
                }}
                style={styles.poster}
                resizeMode="cover"
            />

            <View style={{ padding: 12 }}>
                <Text
                    style={styles.movieTitle}
                    numberOfLines={1}
                >
                    {movie.title}
                </Text>

                <Text style={styles.rating}>
                    ⭐ {movie.vote_average.toFixed(1)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard