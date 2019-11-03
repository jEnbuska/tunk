import {createConnection} from "typeorm";
import {User} from "./User";

const {NODE_ENV, POSTGRES_HOST = 'localhost', POSTGRES_DB = 'hours_db', POSTGRES_PASSWORD = 'password', POSTGRES_USER = 'admin'} = process.env;
console.log('NODE_ENV', NODE_ENV);
createConnection({
    type: "postgres",
    host: POSTGRES_HOST, // TODO
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [User],
    synchronize: NODE_ENV === 'development',
    logging: true,
}).then(() => {
    console.log('DB Connection established');
}).catch(error => {
    console.error(error);
    console.error('DB Connection failed')
});