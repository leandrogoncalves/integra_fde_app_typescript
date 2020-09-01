import api from '../api';

const authService = {

  async attemptLogin(usuario:string, senha:string) {

    let output = {
      status: false,
      message: ''
    };

    await api.post('/api/login', {usuario, senha})
    .then(response => {
      output = {
        ...response.data,
        status: true
      };
    }).catch(error => {
      const statusCode = error.response.status;

      if (! error.response.data.message) {
        switch (statusCode) {
          case 412:
          output.message = 'Usuário ou senha inválidos';
          return output;
          break;
          case 404:
          output.message = 'Usuário não encontrado';
          return output;
          break;
          case 500:
          output.message = 'Erro interno do servidor';
          return output;
          break;

        }
      }

      output.message = error.response.data.message;

    });

    return output;

  }

}

export default authService;
