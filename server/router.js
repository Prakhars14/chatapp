const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    res.send('server up n runnning')
})

module.exports=router;