// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
var listtodo = [
      {id: 0, work: 'Đi chợ' },
      {id: 1, work: 'Nấu cơm' },
      {id: 2, work: 'Rứa chén' },
      {id: 3, work: 'Học tại CoderX' },
    ];
// function change_alias(alias) {
//     var str = alias;
//     str = str.toLowerCase();
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
//     str = str.replace(/đ/g,"d");
//     str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
//     str = str.replace(/ + /g," ");
//     str = str.trim(); 
//     return str;
// }

app.set('view engine', 'pug');
app.set('views', './views');
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.render('index',{name:'Minh Thao'});
});


// app.get('/todos', (request, response) => {
//   response.render('todos/index',{
//     todos: listtodo
//   });
// });



app.get ('/todos', function(request, response){
  var q = request.query.q;
  var filterlisttodo = listtodo.filter(function(todo){
    
    var lowercase = todo.work.toLowerCase();
    return lowercase.indexOf(q) !==-1;
  });
  response.render('todos/index',{
    todos: filterlisttodo
  })
});



// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
