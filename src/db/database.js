const mongoose =require('mongoose')
const connect = mongoose.connect('mongodb://localhost:27017/kof')
.then(()=>{
    console.log('connectado na database')
})
.catch((err)=>{
    console.log(err)
})
