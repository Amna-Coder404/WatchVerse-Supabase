import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

// CHANGE: Import from expo-status-bar for better Expo compatibility
import { StatusBar } from "expo-status-bar";
import SafeScreen from "../../components/SafeScreen";
import { useAuthStore } from "../../store/authStore";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const segments = useSegments();

  const {
    user,
    loading,
    checkAuth,
    listenAuth
  } = useAuthStore();

  useEffect(() => {
    checkAuth();
    const unsubscribe = listenAuth();
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/(auth)");
    }

    if (user && inAuthGroup) {
      router.replace("/(drawer)/(tabs)");
    }

    // Hide splash after everything is ready
    SplashScreen.hideAsync();

  }, [user, loading, segments]);

  return (
    <SafeAreaProvider>
      {/* ADDED: Sets status bar text/icons to white and a dark background on Android */}
      <StatusBar style="light" backgroundColor="#000000" translucent={true} />

      <SafeScreen>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(drawer)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  );
};

export default RootLayout;
