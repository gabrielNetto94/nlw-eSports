import {StatusBar} from "react-native";
import {Home} from './src/screens/Home'
import {Loading} from "./src/components/Loading";
import {Background} from "./src/components/Background";

import {
  useFonts,
  Inter_400Regular,
  Inter_900Black,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function App() {
  //carrega as fontes da aplicação
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_900Black,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* se carregou as fontes mostra a home */}
      {fontsLoader ? <Home/> : <Loading/>}
    </Background>
  );
}
