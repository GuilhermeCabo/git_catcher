import React, {Component} from 'react';
import {Keyboard} from 'react-native';

//Importa a biblioteca de ícones
import Icon from 'react-native-vector-icons/MaterialIcons';

//Importa o objeto com configurção de conexão à API do github
import api from '../../services/api';

//Importa os componentes estilizados
import {
  Container,
  Form,
  Input,
  SubmitButton,
  UsersList,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Home extends Component {
  //cria um state pra armazenar os dados do input e os usuários encontrados
  state = {
    newUser: '',
    users: [],
  };

  handleSubmit = async () => {
    try {
      //Destructor é uma forma mais rápida de pegar valores de objetos JSON
      //Por exemplo, ambos os códigos abaixo fazem a mesma coisa:
      //const data = response.data;
      //const { data } = response

      //Você pode também pegar mais de um valor, como abaixo, o código
      //pega a variável newUser e users direto do state, com apenas uma linha
      const {newUser, users} = this.state;

      //recebe os dados da api do github
      const {data} = await api.get(`/users/${newUser}`);

      //cria o objeto de usuário a ser adicionado no array de usuários
      const user = {
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
      };

      //Adiciona o usuário no array de usuários, mantendo os já adicionados
      this.setState({
        users: [...users, user],
      });

      Keyboard.dismiss();
    } catch (err) {
      //Caso ocorra um erro, mostra uma mensagem de aviso na tela com o erro
      console.warn(err.message);
    }
  };

  render() {
    //Pega o array de usuários do state,
    //para não ter que ficar escrevendo this.state antes da variável
    const {users} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicione um usuário"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            //o parâmentro abaixo altera o estado toda vez que o texto do input muda
            onChangeText={text => this.setState({newUser: text})}
          />

          {/* Dispara a função de adicionar usuaŕio (handleSubmit) */}
          <SubmitButton onPress={this.handleSubmit}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <UsersList
          data={users}
          //define uma key para cada usuário usando seu nome de usuário
          keyExtractor={user => user.login}
          //Renderiza o componente User para cada usuário no array
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar_url}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

//Define o título para o Header do componente
Home.navigationOptions = {
  title: 'Usuários',
};
