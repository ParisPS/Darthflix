const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:8080/categorias' 
: 'https://darthflix.herokuapp.com'

export default {
  URL_BACKEND_TOP, 
};