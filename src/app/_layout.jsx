import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeScreen from '../../components/SafeScreen';
import { useAuthStore } from '../../store/authStore';

import Loader from "../../components/Loader";


const RootLayout = () => {

  const router = useRouter();
  const segments = useSegments();

  const { user, loading, checkAuth, listenAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
    const unsubscribe = listenAuth();
    return () => {
      unsubscribe();
    };
  }, []);


  // // Auto  navigation 
  // useEffect(() => {
  //   if (loading) return;
  //   const inAuthGroup = segments[0] === "(auth)";

  //   if (!user && !inAuthGroup) {
  //     router.replace("/(auth)");
  //   }

  //   if (user && inAuthGroup) {

  //     router.replace("/(tabs)");

  //   }
  // }, [user, loading, segments]);

  if (loading) return <Loader />


  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='(tabs)' />
          {/* <Stack.Screen name='(auth)' /> */}
        </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  )
}

export default RootLayout