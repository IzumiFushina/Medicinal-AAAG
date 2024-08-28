import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//IMPORTANDO PÁGINAS
import Cadastro from "../pages/Cadastro";
import CampoMinado from "../pages/CampoMinado"
import JogodaCobrinha from "../pages/JogodaCobrinha"
import JogoDaMemoria from "../pages/JogoDaMemoria"

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cadastro " component={Cadastro} />
        <Tab.Screen name="CampoMinado " component={CampoMinado} />
        <Tab.Screen name="JogodaCobrinha " component={JogodaCobrinha} />
        <Tab.Screen name="JogoDaMemoria " component={JogoDaMemoria} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}