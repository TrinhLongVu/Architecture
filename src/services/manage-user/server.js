import app from './src/app.js'
import db from "./src/models/index.mjs"
import { importUserSampleData, createSampleData } from './src/models/sampleData/TTNGUOIDUNG.sample.js';

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    createSampleData();
    app.listen(PORT, () => {
        console.log(`server USER MANAGEMENT is running with PORT ${PORT}`)
    })
});
