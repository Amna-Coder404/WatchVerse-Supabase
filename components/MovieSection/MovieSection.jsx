import { FlatList, Text, View } from "react-native";
import styles from "../../styles/home.style";
import Loader from "../Loader";
import MovieCard from "./MovieCard";


const MovieSection = ({ trending, popular, topRated, loading }) => {
    if (loading) {
        return <Loader />;
    }

    return (
        <View>
            <Text style={styles.heading}>
                Trending
            </Text>

            <FlatList
                horizontal
                data={trending}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard movie={item} />
                )}
            />


            <Text style={styles.heading}>
                Popular
            </Text>

            <FlatList
                horizontal
                data={popular}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard movie={item} />
                )}
            />


            <Text style={styles.heading}>
                Top Rated
            </Text>

            <FlatList
                horizontal
                data={topRated}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard movie={item} />
                )}
            />

        </View>
    );
};

export default MovieSection;