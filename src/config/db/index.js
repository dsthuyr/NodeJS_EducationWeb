import mongoose from 'mongoose';

async function connect() {
    
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/web-education');    
        console.log('Connnect sucssesfully.')        
    } catch (error) {
        console.log('Connect failure.')
    }
}

export default { connect }