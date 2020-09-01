import { HOST } from 'react-native-dotenv';

interface Iauth {
  host: string;
}

const auth:Iauth = {
  host: HOST
}

export default auth;
