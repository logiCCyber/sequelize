import { sequelize, seqConnection  } from './connection.js';

const dbInitialize = async () => {
    try {
        await sequelize.query("CREATE DATABASE IF NOT EXISTS Family");

        await seqConnection.authenticate();
        console.log("Connected to Database!");

        return seqConnection;
    } catch (err) {
        console.log("Could not initialize the database!");
    }
}

export { dbInitialize };

