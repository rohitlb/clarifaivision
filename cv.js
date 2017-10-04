// Require the client

const Clarifai = require('clarifai');




// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: 'e3417dec955e4a4cabaa1fd288d55554'
});
App.use('view engine' , 'pug');
// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
  

);

app.get('/', function(req,res){

res.render('index');

})

app.listen(4000);
