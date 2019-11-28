import axios from 'axios'

//URL para conexão
export const baseURL = 'https://api.github.com'

//Cria o objeto de conexão com a API do github
export default axios.create({
  baseURL
  /* Pode ser passado diretamente aqui, por exemplo:
  
  baseURL: 'https://api.github.com'

  Pura questão de preferência
  */
})