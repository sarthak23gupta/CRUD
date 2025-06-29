const express=require('express')
const router=express.Router()
const {getJokes,getOneJokes,postJokes,deleteJokes,updateJokes} = require('../controllers/joke.controller')

router.get('/',getJokes)
router.get('/:id',getOneJokes)
router.post('/',postJokes)
router.delete('/:id',deleteJokes)
router.put('/:id',updateJokes)



module.exports=router