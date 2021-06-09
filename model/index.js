import pgconfig from '../config/db.postgres.config';
import Sequelize from 'sequelize';
import tutorial from './tutorial.model';

const sequelize = new Sequelize(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,{
    host: pgconfig.HOST,
    dialect: pgconfig.DIALECT,
    port: pgconfig.PORT,
    operatorAliases:false,
    pool:{
        max:pgconfig.max,
        min:pgconfig.min,
        idle:pgconfig.idle,
        aquire:pgconfig.aquire
    }
});

const db={
    Sequalize:Sequelize,
    sequelize:sequelize,
    //sequelize - used to make schema inside the tutorial function
    //Sequelize- used for defining the standard data types from the 'sequelize' module
    tutorials:tutorial(sequelize,Sequalize)
}

export default db;