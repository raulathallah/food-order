import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    console.log({ email, password });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Account" }}></Stack.Screen>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Button onPress={onSignUp} text="Create account" />
      <Link href={"/sign-in"} asChild>
        <Text style={styles.textButton}>Sign In</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: "500",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 10,
    color: Colors.light.tint,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
});
export default SignUpScreen;
