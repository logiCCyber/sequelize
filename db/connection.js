
import dotenv from 'dotenv';
import {Sequelize} from "sequelize";

dotenv.config();

const USERNAME = process.env.USER;
const PASSWORD = process.env.PASS;

const sequelize = new Sequelize(`mysql://${USERNAME}:${PASSWORD}@localhost:3306`, {
    dialect: 'mysql'
});

const seqConnection = new Sequelize("Family", USERNAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export { sequelize, seqConnection };