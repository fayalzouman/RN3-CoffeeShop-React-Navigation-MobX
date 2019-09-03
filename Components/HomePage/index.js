import React, { Component } from "react";
import { View } from "react-native";

import AppContainer from "../Navigation/AppContainer";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <Header style={styles.transparent} />
      <AppContainer />
    </Container>
  );
};

export default HomePage;
