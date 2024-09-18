import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

// IMPORTANDO PÁGINAS
import Cadastro from "../pages/Cadastro";
import CampoMinado from "../pages/CampoMinado";
import JogoDaMemoria from "../pages/JogoDaMemoria";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import JogoMat from "../pages/JogoMat";
import CaçaPalavras from "../pages/CaçaPalavras";
import chess from "../pages/chess";

const Drawer = createDrawerNavigator();

// Função de conteúdo personalizado do Drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, alignItems: 'center' }}>
      <Image
          source={require("../images/avatar.png")}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ marginVertical: 10, fontWeight: 'bold', fontSize: 16 }}>Nome do Usuário</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Login" component={Login} />       
        <Drawer.Screen name="Cadastro" component={Cadastro} /> 
        <Drawer.Screen name="CampoMinado" component={CampoMinado} /> 
        <Drawer.Screen name="JogoDaMemoria" component={JogoDaMemoria} />
        <Drawer.Screen name="Quiz" component={Quiz} />
        <Drawer.Screen name="JogoMat" component={JogoMat} />
        <Drawer.Screen name="CaçaPalavras" component={CaçaPalavras} />
        <Drawer.Screen name="chess" component={chess} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
