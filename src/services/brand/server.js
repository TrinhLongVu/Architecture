const app =require('./src/app.js')

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server authentication is running with PORT ${PORT}`)
})