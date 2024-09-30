import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { getEUR } from "../services/awesomeapi";
import { useEffect, useState } from "react";
import { Money } from "../types/money";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState(0);

  const updateCurrency = async () => {
    setLoading(true);
    const euro = await getEUR();
    setLoading(false);
    setCurrentValue(euro);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/euro.png")} style={styles.logo} />
      {loading ? (
        <Text style={styles.h2}>Carregando...</Text>
      ) : (
        <>
          <Text style={styles.h2}>O Euro está: </Text>
          <Text style={styles.currencyText}>
            {Number(currentValue).toFixed(2)}
          </Text>
          <Button label="Atualizar" onPress={updateCurrency} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1c2d",
    paddingHorizontal: 20,
  },
  logo: {
    resizeMode: "contain",
    height: 180,
    width: 200,
  },
  h2: {
    color: "#ccc",
    fontSize: 24,
    marginTop: 30,
  },
  currencyText: {
    color: "#FFF",
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});

export default HomeScreen;
