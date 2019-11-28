//importa a biblioteca de estilização styled-components
import styled from 'styled-components/native';

//Importa o botão da biblioteca externa
import {RectButton} from 'react-native-gesture-handler';

//Cria uma View estilizada nomeando como Container
export const Container = styled.View`
  flex: 1; /* Faz o componente principal ocupar toda a tela */
  flex-direction: column; /* Faz a view se tornar vertical (padrão é horizontal)*/
  background-color: #333;
  padding: 20px;
`;

//Cria um componente View estilizado para o Form
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
`;

//Estiliza o Input do Form para adição de usuário
export const Input = styled.TextInput`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 10px 15px;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

//Estiliza o botão para submit do Form
export const SubmitButton = styled(RectButton)`
  background-color: #7159c1;

  /* os dois parâmetros abaixo centralizam o ícone do botão, 
  horizontalmente e verticalmente */
  align-items: center;
  justify-content: center;

  width: 50px;
  border-radius: 4px;
`;

//Cria uma lista estilizada sem barra de rolagem
export const UsersList = styled.FlatList.attrs({
  //Retira a barra de rolagem
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

export const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  //Define o número máximo de linhas do texto
  numberOfLines: 2,
})`
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 20px;
  align-self: stretch; /* Força o botão a esticar e ocupar todo o espaço */
  border-radius: 4px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
