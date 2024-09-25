import Express from "express"
import {FetchStocks , FetchAndStoreTopStocks} from "../controllers/stock.controller.js";

const router = Express.Router();

router
    .get(`/stocks`,FetchStocks)
FetchAndStoreTopStocks()


export default router;