const router = require('express').Router()
const Character=require('../models/characterModel')
const express = require('express')
var idx = require('../scripts/numberId')

router.get('/', async(req,res)=>{
    try {
        const result = await Character.find({})
        res.send(result)

    } catch (error) {
        res.status(500).json({error:error}) 
    }
})
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const person = await Character.findOne({id:id})
        if(!person){
            res.status(422).json({message:'O Lutador não existe'})
        }
        res.send(person)
    } catch (error) {
        res.status(500).json({error:error})
        return
    }
})
router.post('/' ,async(req,res)=>{
const { id,name,game } =req.body
idResponse = Math.floor(Math.random() * (500 + 1))
if (!name){
    res.status(422).json({error: 'O nome é um campo obrigatório'})
if (!game){
    res.status(422).json({error:'O campo game é obrigatorio'})
}    
    return
}
    const person = {
        id:idResponse,
        name,
        game
    }
    //create
    try {    
        await Character.create(person)
        return (res.status(201).json({message:'ok'}))

    } catch (error) {
      res.status(500).json({error:'error'})  
    }
})
router.patch('/:id', async (req, res)=>{
    const id = req.params.id

    const {name,game } =req.body


    const person = {
        name:name,
        saga:game       
    }

    try {
        await Character.updateOne({name:name, game:game})
        res.status(200).json({message:"Lutador atualizado"})
    } catch (error) {
        res.status(404).json({error:'Erro na atualização'})
    }
})

router.delete('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        
        await Character.deleteOne({id:id})
        res.send({message:'Lutador deletado'})
    } catch (error) {
        res.status(404).json({error:'Error ao deletar lutador '})
    }
})


module.exports = router
