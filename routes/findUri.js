const router = require('express').Router()
const findUri = require('../util/util')
router.post('/',async(req,res)=>{
    
    const {input, year} = req.body;
    
    try{
        const output = []
        
        input.forEach(uri => {
            output.push({[uri]:findUri(uri,year)})
        });

        res.status(200).json(output)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports=router;