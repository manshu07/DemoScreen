import { AppRegistry, Text, TouchableOpacity, ScrollView, TextInput, View, Platform } from 'react-native';
import App from './src/screen/Chats';
import { name as appName } from './app.json';
import { font, color } from './src/Component/Styles'

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

View.defaultProps = View.defaultProps || {};
View.defaultProps.borderColor = color.borderColor;

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = .9;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInput.defaultProps.padding = 0;
TextInput.defaultProps.fontFamily = font.reg;
TextInput.defaultProps.paddingVertical = 0;
TextInput.defaultProps.marginBottom = Platform.OS === "ios" ? 0 : -3;
TextInput.defaultProps.textAlignVertical = 'top';
TextInput.defaultProps.placeholderTextColor = color.borderColor;

ScrollView.defaultProps = ScrollView.defaultProps || {};
ScrollView.defaultProps.showsVerticalScrollIndicator = false;
ScrollView.defaultProps.keyboardShouldPersistTaps = 'handled';

AppRegistry.registerComponent(appName, () => App);
