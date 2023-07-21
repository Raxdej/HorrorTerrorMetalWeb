import { Router } from 'express';
import bodyParser from 'body-parser';

const router = Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render("index", {title: "Horror Terror"});
});
router.get("/merch", (req, res) => {
    res.render("merch", {title: "Horror Terror - merch"});
});
router.get("/calendar", (req, res) => {
    res.render("calendar", {title: "Horror Terror - fechas"});
});
router.get("/loginEvents", (req, res) => {
    res.render("loginEvents", {title: "Horror Terror - SXCRXT"});
});
router.get("/Events", (req, res) => {
    res.render("Events", {title: "Horror Terror - SXCRT"});
});

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const query = `SELECT * FROM table WHERE u = '${username}' AND p = '${password}'`;
    res.send(query);
});

export default router;