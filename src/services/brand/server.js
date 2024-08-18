require('dotenv').config(); 
const app =require('./src/app.js')

const PORT = process.env.PORT||3002;

app.listen(PORT, () => {
    console.log(`Server brand is running with PORT ${PORT}`)
})