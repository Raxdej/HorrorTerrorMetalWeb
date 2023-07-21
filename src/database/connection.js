import sql from 'mssql';

const DBSettings = {
    user: 'MrVoid',
    password: '192843_VastoLorde',
    server: 'testvoid-server.database.windows.net',
    database: 'HorrorTerrorDB',
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