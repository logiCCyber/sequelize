import { getUsers, createUser } from "./services/userService.js";

const main = async () => {
    // const user = await createUser("Aybek", 41);
    // console.log(user, "User created!");

    const user = await getUsers();
    console.log(user)
}

main();