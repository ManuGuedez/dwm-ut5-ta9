import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  const selectedViewStyles = () => {
    if (isIOS) {
      return styles.iosContainer;
    } else if (isAndroid) {
      return styles.androidContainer;
    }
    return styles.unKnownContiner
  };

  const platformTextStyles = () => {
    if (isIOS) {
      return styles.iosText;
    } else if (isAndroid) {
      return styles.androidText;
    }
    return styles.unKnownText
  }

  const platformMessage = () => {
    if (isIOS) {
      return "Estás usando iOS";
    } else if (isAndroid) {
      return "Estás usando Android";
    }
    return "No sé qué estás usando :("
  };

  return (
    <View style={selectedViewStyles()}>
      <Text style={platformTextStyles()}>{platformMessage()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  iosContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 40,
  },
  unKnownContiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
    padding: 40,
  },
  androidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1",
    padding: 40,
  },
  iosText: {
    fontSize: 20,
    color: "#000080",
  },
  androidText: {
    fontSize: 18,
    color: "#8b0000",
  },
  unKnownText: {
    fontSize: 18,
    color: "#555",
  },
});
