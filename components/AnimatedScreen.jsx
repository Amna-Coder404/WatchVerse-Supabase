import Animated, { FadeInDown } from "react-native-reanimated";


const AnimatedScreen = ({ children }) => {
    return (
        <Animated.View
            entering={FadeInDown.duration(400)}
            style={{ flex: 1 }}
        >
            {children}
        </Animated.View>
    );
};


export default AnimatedScreen;