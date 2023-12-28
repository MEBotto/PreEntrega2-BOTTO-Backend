import { Router } from "express";
import cartDao from "../daos/dbManager/cart.dao.js";

const router = Router();
router.get("/", (req, res) => {
    res.render("home.hbs");
});

router.get("/realTimeProducts", (req, res) => {
    res.render("products.hbs");
})

router.get("/chat", (req, res) => {
    res.render("chat.hbs");
})

router.get("/carts/:id", async (req, res) => {
    const { id } = req.params
    const products = await cartDao.getProductsFromCart(id)
    console.log(products)
    res.json({
        data: products,
        message: "success"
    })
})

export default router;