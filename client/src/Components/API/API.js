import axios from 'axios';
const URL = "http://10.0.50.39:3001/api/v1"
const URLocal = "http://localhost:3001/api/v1"
export default () => axios.create({
  // Conexao com o backend
  baseURL: URLocal,
});

// Fetchs na pasta Register, Login, Write/Form, Taskbar, Geral, Activity, Top