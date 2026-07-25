import { useEffect } from "react";
import { Searchbar } from "react-native-paper";

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import COLORS from "../../constants/color";
import styles from "../../styles/home.style";


const SearchBar = ({
    visible,
    search,
    setSearch,
    handleSearch,
}) => {


    // Animation value
    const animation = useSharedValue(0);


    // Run animation when visible changes

    useEffect(() => {
        animation.value = withTiming(
            visible ? 1 : 0,
            {
                duration: 300,
            }
        );

    }, [visible]);


    // Connect animation value with styles
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: animation.value * 60,
            opacity: animation.value,
            marginBottom: animation.value * 15,
        };
    });



    return (
        <Animated.View
            style={[
                styles.searchWrapper,
                animatedStyle
            ]} >
            {
                visible && (

                    <Searchbar
                        placeholder="Search movies..."
                        value={search}
                        onChangeText={setSearch}
                        onSubmitEditing={handleSearch}

                        iconColor={COLORS.white}

                        placeholderTextColor={
                            COLORS.textSecondary
                        }

                        inputStyle={{
                            color: COLORS.white,
                        }}

                        style={{
                            backgroundColor:
                                COLORS.inputBackground,
                        }}
                    />

                )
            }


        </Animated.View>

    );

};


export default SearchBar;