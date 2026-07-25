import { Button } from "react-native-paper";
import COLORS from '../constants/color';


const AppButton = ({ title, onPress, loading = false, mode = "contained", icon, disabled = false }) => {
    return (
        <Button
            mode={mode}
            onPress={onPress}
            loading={loading}
            disabled={disabled}
            icon={icon}
            buttonColor={
                mode === "danger"
                    ? "#FF5252"
                    : COLORS.primary
            }
            textColor={COLORS.white}
            style={{
                borderRadius: 12,
                marginVertical: 8,
            }}
            contentStyle={{
                height: 52,
            }}
            labelStyle={{
                fontSize: 16,
                fontWeight: "700",
            }}
        >
            {title}
        </Button>
    )
}

export default AppButton