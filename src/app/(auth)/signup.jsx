import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../../../constants/color';
import { useAuthStore } from '../../../store/authStore';
import styles from "../../../styles/login.style";



const SignUp = () => {
    const signup = useAuthStore((state) => state.signup);
    const loading = useAuthStore((state) => state.loading);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const router = useRouter();
    // Hanldle SignUp
    const handleSignup = async () => {
        if (!username || !email || !password) {
            Alert.alert("Missing Fields", "Please fill in all fields.");
            return;
        }

        try {
            await signup(email.trim(), password, username.trim());

            Alert.alert(
                "Success",
                "Your account has been created."
            );
        } catch (error) {
            Alert.alert("Signup Failed", error.message);
            console.log("ERROR :", error.message);
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
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>
                    Create your account and start exploring amazing movies.
                </Text>
                <View style={styles.formContainer}>
                    {/* USERNAME */}
                    <View style={styles.inputGroup}>
                        <View style={styles.inputContainer}>
                            <Ionicons
                                name="person-outline"
                                size={20}
                                color="rgba(255,255,255,0.8)"
                                style={styles.inputIcon}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Johndeo"
                                placeholderTextColor={COLORS.placeholderText}
                                value={username}
                                onChangeText={setUsername}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                        </View>

                    </View>

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
                                placeholder="johndeo@gmail.com"
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
                                placeholder="*********"
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
                        onPress={handleSignup}
                        disabled={loading}>
                        <Text style={styles.buttonText}>
                            {
                                loading ? (
                                    <ActivityIndicator color={"#fff"} />
                                ) :
                                    (
                                        <Text style={styles.buttonText}>Sign Up</Text>
                                    )
                            }
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account ? </Text>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

export default SignUp