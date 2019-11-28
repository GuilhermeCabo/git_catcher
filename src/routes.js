//importa a biblioteca de criação de navegação
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Importando os arquivos para cada rota
import Home from './pages/Home';

export default createAppContainer(
  //O primeiro objeto json define as rotas e os componentes carregados
  //O segunto objeto define as configurações do navegador
  createStackNavigator(
    //Primeiro objeto
    {
      Home, //rota de nome 'Home' usando o componente 'Home'
    },
    //Segundo objeto
    {
      initialRouteName: 'Home', //Define 'Home' como a rota inicial
      headerLayoutPreset: 'center', //Centraliza o Header

      //Define as configurações padrões, podem ser sobreescritas nos componentes
      defaultNavigationOptions: {
        //Cor padrão do Header
        headerStyle: {
          backgroundColor: '#7159c1'
        },
        //Cor padrão do título do Header
        headerTintColor: '#fff'
      }
    },
  ),
);
