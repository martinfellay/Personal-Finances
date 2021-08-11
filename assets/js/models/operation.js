import { Sequelize } from "sequelize";
import { sequelize } from "../config/database";

//definir el modelo de la bd (name: 'operations')
const Concept = sequelize.define('operations',{
    // id:{
    //     type: Sequelize.INTEGER,
    //     primaryKey: true
    // },
    concept:{
        type: Sequelize.TEXT
    },
    operationdate:{
        type: Sequelize.DATE
    },
    amounttype:{
        type: Sequelize.TEXT
    },
    amount:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false  // avoid troubbles with dates //
});

export default Concept;