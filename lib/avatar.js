import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system/legacy";
import { Alert } from "react-native";
import { supabase } from "./supabase";

export const pickAvatar = async (userId) => {
    // Open Gallery
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 0.8,
        allowsEditing: true,
        aspect: [1, 1],
    });

    if (result.canceled) return null;

    const image = result.assets[0];

    try {
        // Read image as Base64
        const base64 = await FileSystem.readAsStringAsync(image.uri, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Convert Base64 → ArrayBuffer
        const arrayBuffer = Uint8Array.from(atob(base64), (c) =>
            c.charCodeAt(0)
        ).buffer;

        const filePath = `${userId}/avatar.jpg`;

        // Upload
        const { error: uploadError } = await supabase.storage
            .from("avatars")
            .upload(filePath, arrayBuffer, {
                contentType: "image/jpeg",
                upsert: true,
            });

        if (uploadError) {
            Alert.alert("Upload Error", uploadError.message);
            return null;
        }

        // Get Public URL
        const { data } = supabase.storage
            .from("avatars")
            .getPublicUrl(filePath);

        return data.publicUrl;
    } catch (error) {
        Alert.alert("Error", error.message);
        return null;
    }
};