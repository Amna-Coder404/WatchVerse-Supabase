import { useEffect, useState } from 'react';
import { Dimensions, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import MyReviews from '../../../components/watchlist/MyReviews';
import MyWatchlist from '../../../components/watchlist/MyWatchlist';
import styles from "../../../styles/movieTabs.style";

import { useLocalSearchParams } from "expo-router";
const initialLayout = {
    width: Dimensions.get("window").width,
}


const WatchList = () => {
    const [index, setIndex] = useState(0);
    const { tab } = useLocalSearchParams();

    useEffect(() => {
        if (tab === "reviews") {
            setIndex(1);
        } else {
            setIndex(0);
        }
    }, [tab]);
    const routes = [
        {
            key: "watchlist",
            title: "Watchlist"
        },
        {
            key: "reviews",
            title: "Reviews"
        }
    ];

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "watchlist":
                return <MyWatchlist />;

            case "reviews":
                return <MyReviews />

            default:
                return null;
        }
    }

    return (
        <TabView

            lazy

            navigationState={{
                index,
                routes
            }}

            renderScene={renderScene}

            onIndexChange={setIndex}

            initialLayout={initialLayout}


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
                                focused && styles.activeText
                            ]}
                        >
                            {route.title}
                        </Text>

                    )}

                />

            )}

        />

    )

}

export default WatchList