const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.html', {title : 'first website'})
    //res.sendFile(path.join(__dirname,'src/views/index.html'))
})
router.get('/contact', (req,res)=>{
    res.render('contact.html', {title: 'contaactpage'})
})
module.exports = router

