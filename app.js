const express = require("express");
const router = require("./Index/Index");
const app = express();

app.use(express.json());
app.use(router);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
