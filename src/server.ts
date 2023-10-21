import app from "./app.js"

app.get('/',(req,res)=>{
    const data = req.body;
    res.send(data)
})


app.listen(6000,()=>console.log("App Running"))