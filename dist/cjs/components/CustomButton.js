"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CustomButton = ({ onPress, title, style }) => {
    const platformSpecificStyles = react_native_1.Platform.select({
        ios: styles.iosButton,
        android: styles.androidButton,
        web: styles.webButton
    });
    return (react_1.default.createElement(react_native_1.View, { style: [styles.buttonContainer, style] }, react_native_1.Platform.OS === 'web' ? (react_1.default.createElement("button", { className: "button", onClick: onPress },
        react_1.default.createElement(react_native_1.Text, { style: [styles.text, platformSpecificStyles] }, title))) : (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, platformSpecificStyles], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, title)))));
};
exports.CustomButton = CustomButton;
const styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    iosButton: {
        backgroundColor: '#007aff'
    },
    androidButton: {
        backgroundColor: '#2196f3'
    },
    webButton: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});
//# sourceMappingURL=CustomButton.js.map