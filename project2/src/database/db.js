import mongoose from 'mongoose'

const connectionDB = async()=>{
    const connectionURL = 'mongodb+srv://zohaib45:qwertyuiop@cluster0.mp5dp.mongodb.net/'

    mongoose.connect(connectionURL).then(()=> console.log('Connection is Successful')).catch((error)=> console.log(error))

}
export default connectionDB
