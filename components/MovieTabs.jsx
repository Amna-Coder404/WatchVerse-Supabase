import { useState } from "react";
import { Dimensions, ScrollView, Text } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";

import MovieOverview from "./MovieOverview";
import MovieReviews from "./MovieReviews";

import styles from "../styles/movieTabs.style";

const initialLayout = {
    width: Dimensions.get("window").width,
};

const MovieTabs = ({
    movie,
    cast,
    isSaved,
    handleToggleWatch,
    userId
}) => {

    const [index, setIndex] = useState(0);

    const routes = [
        {
            key: "overview",
            title: "Overview",
        },
        {
            key: "reviews",
            title: "Reviews",
        },
    ];


    const renderScene = ({ route }) => {
        switch (route.key) {
            case "overview":
                return (
                    <ScrollView
                        style={styles.scene}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <MovieOverview
                            movie={movie}
                            cast={cast}
                            isSaved={isSaved}
                            handleToggleWatch={handleToggleWatch}
                        />
                    </ScrollView>
                );

            case "reviews":
                return (
                    <ScrollView
                        style={styles.scene}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <MovieReviews movieId={movie.id} userId={userId} />
                    </ScrollView>
                );

            default:
                return null;
        }
    };

    return (
        <TabView
            lazy
            navigationState={{
                index,
                routes,
            }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            swipeEnabled={true}

            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    style={styles.tabBar}
                    indicatorStyle={styles.indicator}
                    pressColor="transparent"

                    renderLabel={({ route, focused }) => (
                        <Text
                            style={[
                                styles.tabText,
                                focused && styles.activeText,
                            ]}
                        >
                            {route.title}
                        </Text>
                    )}
                />
            )}
        />
    );
}


export default MovieTabs