const mongoos=require('mongoos');
require('dotenv').config;
const connectdb= async(()=>{
    try {
        mongoos.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("db connected");
    } catch (error) {
        console.log("failed to connect ");
    }
})
export default connectdb;