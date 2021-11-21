const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const HOST = '0.0.0.0';
const port = process.env.port || 3000;
let cors = require('cors')

app.use(cors())
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'public','/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
app.use(express.static(path.join(__dirname, 'public')));

console.log('Running at Port 3000');
