import app from './src/app.js'
import db from "./models/index.js"

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server authentication is running with PORT ${PORT}`)
    })
});
