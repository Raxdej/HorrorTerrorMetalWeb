import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Horror Terror"});
});
router.get("/merch", (req, res) => {
    res.render("merch", {title: "Horror Terror - merch"});
});
router.get("/calendar", (req, res) => {
    res.render("calendar", {title: "Horror Terror - fechas"});
});

export default router;