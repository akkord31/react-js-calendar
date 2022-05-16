
var express = require('express');
var cors = require('cors');
var path = require('path');
var fs = require('fs');

var jsonParser = express.json();

var app = express();
app.use(cors());


app.post("/registration", jsonParser, function(reqest, response){
  var fileName = path.resolve(__dirname, 'data/users.json')

  let data = fs.readFileSync(fileName, 'utf-8')
  let users = JSON.parse(data)
  let newUser = reqest.body
  users.push(newUser)
  fs.writeFileSync(fileName, JSON.stringify(users))
  response.sendFile(fileName,{})
})

app.post("/events", jsonParser, function(request, response){

    var fileName = path.resolve(__dirname, 'data/events.json')
    let data = fs.readFileSync(fileName, 'utf-8')
    let events = JSON.parse(data)
    let curEvents = []
    for(var i = 0; i < events.length; i++){
       
        var date1 = new Date(request.body.date)
        var date2 = new Date(events[i].date)

        if(date1.toLocaleDateString() == date2.toLocaleDateString()){
            curEvents.push(events[i])
        }
    }
    return response.json(curEvents)
    response.sendFile(fileName,{})
})

app.get('/events', function(reqest, response){
    var eventsFileName = path.resolve(__dirname, './data/events.json')
    response.sendFile(eventsFileName,{})
})

app.get('/users', function(reqest, response){
    var usersFileName = path.resolve(__dirname, './data/users.json')
    response.sendFile(usersFileName,{})
})

app.post("/add", jsonParser, function(request, response){
    var fileName = path.resolve(__dirname, 'data/events.json')
    let data = fs.readFileSync(fileName, 'utf-8')
    let events = JSON.parse(data)
    let newEvent = request.body
    events.push(newEvent)
    fs.writeFileSync(fileName, JSON.stringify(events))
    response.sendFile(fileName,{})
})

app.post("/login", jsonParser, function(reqest, response){
  var fileName = path.resolve(__dirname, 'data/users.json')
    
  let data = fs.readFileSync(fileName, 'utf-8')
  let users = JSON.parse(data)
  let done = false;
  const {id, login, password} = reqest.body
  console.log(login);
  console.log(password);
  for(var i = 0; i < users.length; i++){
      if(users[i].login == login && users[i].password == password){
          done = true
          break;
      }
  }
  if(done){
      return response.json({id})
  }else{
      return response.status(400).json({message:"Ошибка"})
  }
})


app.listen(3001, () => console.log("Сервер запущен..."));