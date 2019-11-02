const location = 'Trujillo,pe';
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';
// datos en grados cenigrados
// const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

export default api_weather;