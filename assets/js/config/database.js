import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'password',
    {
        host:"",
        dialect: "postgres",
        pool:{
            max: 5,
            min: 0,
            requiere: 30000,
            idle: 10000
        },
        logging: false //oculta los mensajes en console. ya lo hace morgan//
    }
)