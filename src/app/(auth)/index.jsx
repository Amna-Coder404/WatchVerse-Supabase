import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ActivityIndicator, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Link } from 'expo-router';
import COLORS from '../../../constants/color';
import { useAuthStore } from "../../../store/authStore";
import styles from "../../../styles/login.style";

const Login = () => {
    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loading);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = async () => {
        if (!email.trim() || !password) {
            Alert.alert("Missing Field", "Please enter your email and password.");
            return;
        }


        try {
            await login(email, password);

        } catch (error) {
            Alert.alert("Login Failed", error.message);
            console.log("ERROR", error);
        }
    }


    return (
        <ImageBackground
            source={require("../../../assets/images/tabIcons/login-bg.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.logoContainer}>
                    <MaterialIcons name="movie-creation" size={40} color={COLORS.primary} />
                </View>
                <Text style={styles.title}>Welcome back  👋</Text>
                <Text style={styles.subtitle}>Sign in to continue to your account.</Text>

                <View style={styles.formContainer}>
                    {/* EMAIL  */}
                    <View style={styles.inputGroup}>
                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="mail-outline"
                                size={20}
                                color="rgba(255,255,255,0.8)"
                                style={styles.inputIcon}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email"
                                placeholderTextColor={COLORS.placeholderText}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                        </View>

                    </View>

                    {/* Password */}
                    <View style={styles.inputGroup}>
                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="lock-closed-outline"
                                size={20}
                                color="rgba(255,255,255,0.8)"
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                placeholderTextColor={COLORS.placeholderText}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                                    color="rgba(255,255,255,0.8)" size={20}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.button}
                        onPress={handleLogin}
                        disabled={loading}>
                        <Text style={styles.buttonText}>
                            {
                                loading ? (
                                    <ActivityIndicator color={"#fff"} />
                                ) :
                                    (
                                        <Text style={styles.buttonText}>Login</Text>
                                    )
                            }
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account ? </Text>
                    <Link href="/signup" asChild>
                        <Text style={styles.link}>SignUp</Text>
                    </Link>
                </View>
            </View>
        </ImageBackground >

    )
}

export default Login