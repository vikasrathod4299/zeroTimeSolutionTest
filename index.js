const express = require('express');
const app = express()
const fs = require('fs');
const decompress = require('decompress');
const findUriRoute = require('./routes/findUri')

app.use(express.json())


const unzip = ()=>{
    
    const files = fs.readdirSync(__dirname);
    
    const zipFiles = files.filter(file => file.endsWith('.zip'));

    zipFiles.forEach(async file=>{
        await decompress(file, 'dist')
    })    
}

unzip()

app.use('/findUri',findUriRoute)

app.listen(3000,()=>console.log("Listning to port 3000"))




