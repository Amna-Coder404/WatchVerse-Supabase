import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/color";
import styles from "../styles/movieDetail.style";

import { formatRuntime, handlePlayVideo } from "../lib/utils";


const MovieOverview = ({
    movie,
    cast,
    isSaved,
    handleToggleWatch,
}) => {



    return (
        <View style={styles.content}>

            <View style={styles.playTitle}>
                <Text style={styles.title}>
                    {movie.title}
                </Text>

                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => handlePlayVideo(movie.id)}
                >
                    <Ionicons
                        name="play"
                        size={18}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>


            <Text style={styles.info}>
                {movie.release_date?.split("-")[0]} •{" "}
                {formatRuntime(movie.runtime)} • ⭐{" "}
                {movie.vote_average.toFixed(1)}
            </Text>


            <Text style={styles.heading}>
                Overview
            </Text>

            <Text style={styles.overview}>
                {movie.overview}
            </Text>



            <Text style={styles.heading}>
                Genres
            </Text>

            <View style={styles.genreContainer}>
                {movie.genres.map((genre) => (
                    <View
                        key={genre.id}
                        style={styles.genre}
                    >
                        <Text style={styles.genreText}>
                            {genre.name}
                        </Text>
                    </View>
                ))}
            </View>



            <Text style={styles.heading}>
                Cast
            </Text>


            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    cast.map((person) => (
                        <View
                            key={person.id}
                            style={styles.castCard}
                        >
                            <Image
                                source={{
                                    uri:
                                        `https://image.tmdb.org/t/p/w185${person.profile_path}`,
                                }}
                                style={styles.castImage}
                            />

                            <Text
                                numberOfLines={1}
                                style={styles.castName}
                            >
                                {person.name}
                            </Text>

                        </View>
                    ))
                }

            </ScrollView>



            <TouchableOpacity
                style={styles.button}
                onPress={handleToggleWatch}
            >

                <Ionicons
                    name={isSaved ? "remove-circle" : "add-circle"}
                    size={22}
                    color={COLORS.white}
                />


                <Text style={styles.buttonText}>
                    {
                        isSaved
                            ? "Remove from Watchlist"
                            : "Add to Watchlist"
                    }
                </Text>

            </TouchableOpacity>


        </View>
    )
}


export default MovieOverview;