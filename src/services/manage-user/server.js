import app from './src/app.js'
import db from "./src/models/index.mjs"
import { importUserSampleData } from './src/models/sampleData/TTNGUOIDUNG.sample.js';

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    importUserSampleData();
    app.listen(PORT, () => {
        console.log(`server USER MANAGEMENT is running with PORT ${PORT}`)
    })
});
