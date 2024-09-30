import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Dólar Americano" }} />
        <Drawer.Screen name="eur" options={{ title: "Euro" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
