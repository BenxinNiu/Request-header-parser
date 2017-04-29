const express=require('express');
const app=express();

const ip=require('ip');
const os=require('os');

app.get('/sysInfor',(req,res)=>{
var object={
  "IP address":ip.address(),
  "System information":{
    "Operating System":os.type(),
    "Os version":os.release(),
    "Os system bit":os.platform()
  }
};
res.send(object);
});

var server=app.listen(process.env.PORT || '8080', function(){
  console.log('request header parser is listening on the port %s', server.address().port);
  console.log('Ctrl + C to stop the server hahahahhahahha')
})
