import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from "firebase";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { RestarantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyAwbdKgsWkwnzOnHXEY_uytuX-1hOeaprg",
  authDomain: "foodie-d48a5.firebaseapp.com",
  projectId: "foodie-d48a5",
  storageBucket: "foodie-d48a5.appspot.com",
  messagingSenderId: "442522998550",
  appId: "1:442522998550:web:03e4a061058a58081c2237",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestarantsContextProvider>
                <Navigation />
              </RestarantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
