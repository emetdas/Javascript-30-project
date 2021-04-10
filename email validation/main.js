var form = document.querySelector(".form");
var validate = document.querySelector(".validate");
var email = document.querySelector(".email");
form.addEventListener("submit", fatch);
function fatch(e) {
  e.preventDefault();
  var email = document.querySelector(".email").value;
  var url = `https://emailvalidation.abstractapi.com/v1/?api_key=2b36d9a766e74b408c97a8993802157b&email=${email}`;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var result = JSON.parse(xmlHttp.responseText);
      var show ='<ul>'+
       '<li>'+result.quality_score+'</li>'+
       '<li>'+result.is_valid_format[0]+'</li>'+
       '<li>'+result.email+'</li>'+
       '<li>'+result.deliverability+'</li>'
      +'</ul>'
      ; 
      document.querySelector('.result').innerHTML = show;
    }
  };
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}
// form.addEventListener('submit',(e)=>{
// e.preventDefault();
// function httpGetAsync(url, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
//             // callback(xmlHttp.responseText);
//             console.log(xmlHttp.responseText);
//         }
//     }
//     xmlHttp.open("GET", url, true); // true for asynchronous
//     xmlHttp.send(null);
// }

// var url = `https://emailvalidation.abstractapi.com/v1/?api_key=2b36d9a766e74b408c97a8993802157b&email=${email}`;

// httpGetAsync(url);
// });
