/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

console.log(options);
console.log(options.url)
console.log(options.method)
console.log(options.data)
console.log(options.data.email)
console.log(options.data.password)

//console.log(method)
// ...
   const xhr = new XMLHttpRequest;
  // ...
  try {
    xhr.open( options.method,`/user/current?mail=${options.data.email}&password=${options.data.password}1`);
    // console.log(xhr.open( options.method,`http://localhost:8000?mail=${options.data.email}&password=${options.data.password}`))
    xhr.send();
    console.log(xhr.response);
    xhr.responseType = 'json';
    callback = (err, response) => {
      console.log( 'Ошибка, если есть', err );
      console.log( 'Данные, если нет ошибки', xhr.response );
    }

  }
  catch ( e ) {
    // перехват сетевой ошибки
   alert('as')
    //callback( e );
}
};
