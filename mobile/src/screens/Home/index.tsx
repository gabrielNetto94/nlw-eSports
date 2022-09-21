import React from "react";
import {View, Image} from "react-native";

import {styles} from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import {Header} from "../../components/Header";
import {GameCard} from "../../components/GameCard";
import {GAMES} from '../../utils/games'

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Header title="Encontre seu duo!" subTitle="Selecione o game que deseja jogar..." />

      <GameCard 
      data={GAMES[0]}
      />

    </View>
  );
}
