var express= require('express');
var app= express();
app.listen(3000, function(){
    console.log('Server is listening on port 3000');
});

app.get('/Signup', function(request, response){
    response.send('This function adds a new user info to the user list');
});

app.get(`/`, function(request, response){
    response.send('Hello, World!');
});

app.get('/items', function(request, response){
    response.send('This function will return a list of all stored items');
});