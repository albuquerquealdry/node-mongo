const express = require('express')
const app =express()
const db = require('./db/database')

const fightherRouter = require('./routers/fighterRouters')
app.listen(3000)
//JSON READ
//ESSE MIDLEWERE EU ULTILIZEI PARA FAZER LEITURA DE JSON NO MEU CÓDIGO

    express.urlencoded({
        extended: true,
    })
app.use(express.json())
//CRIAÇÃO DOS MEU ENDPOINTS

app.use('/characters', fightherRouter)
