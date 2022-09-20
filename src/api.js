const BASE_URL = 'https://pokeapi.co/api/v2';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  generacion1: {
    list() {
      return callApi('/pokemon?limit=151&offset=0');
    },
   
  },
  generacion2: {
    list() {
      return callApi('/pokemon?limit=251&offset=0');
    },
 
  },
  generacion3: {
    list() {
      return callApi('/pokemon?limit=386&offset=0');
    },
  
  },
 
  buscar:{
    read(name) {
      return callApi(`/pokemon/${name}`);
    },
  }


};

export default api;
