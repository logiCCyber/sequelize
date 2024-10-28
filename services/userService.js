import { createTables } from "../db/models/user.js";


   const getUsers = async () => {
        const person = await createTables();
        const user = await person.findAll();
        return user.map(person => person.dataValues);
    }

   const createUser = async (name, age) => {
        const person = await createTables();
        await person.create({
            name: name,
            age: age,
        });
    }


export { getUsers, createUser };