const path=require('path');

const express=require('express');

const rootDir=require('../util/path');

const router=express.Router();

router.get('/create-blogs',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','create-blog.html'));
});

router.post('/blog',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;