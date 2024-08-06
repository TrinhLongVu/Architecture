require('dotenv').config(); 
const app =require('./src/app.js')

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server authentication is running with PORT ${PORT}`)
})