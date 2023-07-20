import sql from 'mssql';

const DBSettings = {
    user: 'sa',
    password: 'PECF92426',
    server: 'localhost',
    database: 'Northwind',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try{
        const pool = await sql.connect(DBSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
};

export { sql };