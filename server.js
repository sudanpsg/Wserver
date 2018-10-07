const express =require('express');
const app =express()
const hbs =require('hbs')
app.use(express.static(__dirname+ '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.use((req,res,next)=>{
//  res.render('main.hbs')
  console.log(req.method)
  next()
})
app.get('/', (req,res)=>{
  //res.send("<h1><b>hello word express</h1></b>")
   res.render('home.hbs',{cy:new Date().getFullYear(),country:'India'})
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{cy:new Date().getFullYear(),country:'India'})
})
app.listen(8000);
