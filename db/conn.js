const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect('mongodb+srv://amandavic7576:<senha>@cluster0.zt7j94v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Banco ok...");
    } catch (error) {
        console.log('Erro: ' + error);
    }

    
}

module.exports = main