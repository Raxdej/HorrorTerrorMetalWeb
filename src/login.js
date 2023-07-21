// import { getConnection } from './database/connection.js';

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username) {
        return res.status(400).send('Por favor, ingrese un usuario');
    }

    const query = `SELECT * FROM table WHERE u = ${username} AND p= ${password}`;
    if (query){
        alert(query);
        res.status(200).redirect('https://www.youtube.com');
    }

    
};