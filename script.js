// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('getMessage').onclick = () => {
//         const req = new XMLHttpRequest();
//         req.open("GET", '/json/cats.json', true);
//         req.send();
//         req.onload = function () {
//             const json = JSON.parse(req.responseText);
//             document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
//         };
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('getMessage').onclick = () => {
//         fetch('/json/cats.json')
//             .then(response => response.json())
//             .then(data => {
//                 document.getElementById('message').innerHTML = JSON.stringify(data)
//             })
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('getMessage').onclick = () => {
//         fetch('/json/cats.json')
//             .then(response => response.json())
//             .then(data => {
//                 const json = JSON.parse(data);
//                 document.getElementById('message').innerHTML = JSON.stringify(data)
//                 console.log(json[2].codeNames[1]);
//             })
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('getMessage').onclick = () => {
//         fetch('/json/cats.json')
//             .then(response => response.json())
//             .then(data => {
//                 let html = "";
//                 data.forEach((val) => {
//                     const keys = Object.keys(val);
//                     html += "<div class = 'cat'>";
//                     keys.forEach((key) => {
//                         html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
//                     });
//                     html += "</div><br>";
//                 });
//                 document.getElementsByClassName('message')[0].innerHTML = html;
//             });
//     };
// });


// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('getMessage').onclick = function(){
//       const req=new XMLHttpRequest();
//       req.open("GET",'/json/cats.json',true);
//       req.send();
//       req.onload = function(){
//         const json = JSON.parse(req.responseText);
//         let html = "";
//         json.forEach(function(val) {
//           html += "<div class = 'cat'>";
//           // Add your code below this line

//           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

//           // Add your code above this line
//           html += "</div><br>";
//         });
//         document.getElementsByClassName('message')[0].innerHTML=html;
//       };
//      };
//   });


// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('getMessage').onclick = function () {
//         const req = new XMLHttpRequest();
//         req.open("GET", '/json/cats.json', true);
//         req.send();
//         req.onload = function () {
//             let json = JSON.parse(req.responseText);
//             let html = "";
//             // Add your code below this line

//             json = json.filter(function(val) {
//                 return (val.id !== 1);
//               });

//             // Add your code above this line
//             json.forEach(function (val) {
//                 html += "<div class = 'cat'>"

//                 html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

//                 html += "</div>"
//             });
//             document.getElementsByClassName('message')[0].innerHTML = html;
//         };
//     };
// });


// if (navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(function(position) {
//       document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
//     });
//   }


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendMessage').onclick = function () {

        const userName = document.getElementById('name').value;
        const url = 'https://jsonplaceholder.typicode.com/posts';
        // Add your code below this line

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                const serverResponse = JSON.parse(xhr.response);
                document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
            }
        };
        const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
        xhr.send(body);

        // Add your code above this line
    };
});