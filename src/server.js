import DBConnection from "./database/db.js"
import Express from "express"
import path from "path";
import * as dotenv from './config/env_config.js';
import router from "./routers/routes.js";

const app = Express();

app
    .use(Express.json())

DBConnection(process.env.MONGO_URI)

const __dirname = path.resolve();
app.use(Express.static(path.join(__dirname, 'client')));

// Set the default route to serve the app.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'app.html'));
});

app.use("/",router);

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Your Server is Hosted on http://localhost:${PORT}/`)
})
