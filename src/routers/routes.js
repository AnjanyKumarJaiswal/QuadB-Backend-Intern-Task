import Express from "express"
import {FetchStocks , FetchAndStoreTopStocks} from "../controllers/stock.controller.js";

const router = Express.Router();

router
    .get("/test",(req,res)=>{
        return res.status(200).json({"message":"You Loser forgot how ExpressJS works while doing ML :)"})
    })
    .get(`/stocks`,FetchStocks)
FetchAndStoreTopStocks()


export default router;