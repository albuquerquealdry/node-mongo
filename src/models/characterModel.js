const mongoose = require('mongoose')

const Character = mongoose.model('fighter',{
    id: Number,
    name: String,
    game: String
})

module.exports = Character