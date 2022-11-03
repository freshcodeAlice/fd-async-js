
/// Promise
/*
Створення промісу

const promise = new Promise(executor);

executor = function

*/


const promise = new Promise(function(resolve, reject){
      if(Math.random() > 0.5) {
        resolve('It`s okay');
      } else {
        reject('It`s not okay');
      }
});

console.log(promise);

promise.then((string) => {
    console.log('RESOLVE: ', string);
}, (error) => {
    console.log('REJECT: ', error);
});


/*
Створіть новий проміс, який буде викликати resolve, якщо 2+2 === 4
і reject,якщо ні.
Навісити обробники через then, які виведуть на консоль результат


*/