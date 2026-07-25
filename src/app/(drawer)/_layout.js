// This file configures the outer Drawer navigation container and references your tabs
import { Drawer } from "expo-router/drawer";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawer from "../../../components/CustomDrawer";

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerShown: false, }} drawerContent={(props) => (
                <CustomDrawer {...props} />
            )} />
        </GestureHandlerRootView>
    )
}

export default DrawerLayout

