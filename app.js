const express=require("express");
const path=require("path");
// const path=require("fs");
const app=express();
const port=80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug')
app.set('views',path.join(__dirname,'template'))

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params);
})
app.get('/about',(req,res)=>{
    const params={}
    res.status(200).render('about.pug',params);
})
app.get('/signup',(req,res)=>{
    const params={}
    res.status(200).render('signup.pug',params);
})

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})