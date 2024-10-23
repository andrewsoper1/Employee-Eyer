import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432
});
export const connectDB = async () => {
    await pool.connect();
};
export const disconnectDB = async () => {
    await pool.end();
};
export const queryDB = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};
