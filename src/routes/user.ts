import user from "../controller/user.js";

export default (app:any) =>{
    app.get('/',user)
}
