const  express =require('express')
const app  = express()
const mongoosse = require('mongoose')
const Usermodel = require('./module/User')
mongoosse.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority').then(()=>{
    console.log('connected');
}).catch(()=>{
    'error'
})


app.get('/app',async(req,res)=>{
    const art = await Usermodel.find()
    res.json(art)
})





app.get('/',(req,res)=>{
    res.send(
        'hello '
    )
})


app.listen(3000,()=>{
    console.log('hello');
})