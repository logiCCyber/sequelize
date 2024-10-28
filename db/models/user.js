
import { dbInitialize } from '../initialize.js';
import { DataTypes } from "sequelize";



const createTables = async () => {
    const dateBase = await dbInitialize();
    const Persons = await dateBase.define("Persons", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       age: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
    });

    await Persons.sync();
    return Persons;
}

export { createTables };