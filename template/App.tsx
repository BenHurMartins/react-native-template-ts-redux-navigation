import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppNavigator from "./src/routes";
import SplashScreen from "react-native-splash-screen";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.appContainer]}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: "100%",
  },
});

export default App;
