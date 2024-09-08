import app from './src/app.js'
import db from "./src/models/index.mjs"
import { createSampleData } from './src/models/sampleData/TTNGUOIDUNG.sample.js';
import { SUKIENYEUTHICHSampleData } from './src/models/sampleData/SUKIENYEUTHICH.sample.js';
import { VOUCHERNGUOIDUNGSampleData } from './src/models/sampleData/VOUCHERNGUOIDUNG.sample.js';


const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
    createSampleData();
    SUKIENYEUTHICHSampleData();
    VOUCHERNGUOIDUNGSampleData();
    app.listen(PORT, () => {
        console.log(`server USER MANAGEMENT is running with PORT ${PORT}`)
    })
});
