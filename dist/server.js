import app from "./app.js";
require('./routes/user.js')(app)
app.listen(6000, () => console.log("App Running"));
