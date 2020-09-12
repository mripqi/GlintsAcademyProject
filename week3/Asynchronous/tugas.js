const request = require('request');
const fetch = require('node-fetch');

const options = {
    url: 'https://api.github.com/repos/request/request',
    headers: {
    'User-Agent': 'request'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(info.name)
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
    }
}
request(options, callback );


// function convertpromise (error, response, body) {
//     return new Promise( function (resolve, reject){
//         if (!error && response.statusCode == 200) {
//             const info = JSON.parse(body);
//             resolve(info.name, info.stargazers_count, info.forks_count)
//             }else{
//                 reject()
//             }
   
//     })
//   }

const getMoviesFromApi = () => {
  return fetch("https://api.github.com/repos/request/request")
    .then((response) => response.json())
    .then((json) => {
      return ('name = ' + json.name +json.stargazers_count + ' star ' + json.forks_count + ' forks')
    })
    .catch((error) => {
      console.error(error);
    });
};
getMoviesFromApi().then((result) => console.log(result));

//-----
const getMoviesFromApiAsync = async () => {
  try {
    let response = await fetch("https://api.github.com/repos/request/request");
    let json = await response.json();
    return ('name = ' + json.name +json.stargazers_count + ' star ' + json.forks_count + ' forks')
  } catch (error) {
    console.error(error);
  }
};
console.log(getMoviesFromApiAsync());