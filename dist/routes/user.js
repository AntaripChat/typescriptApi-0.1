import user from "../controller/user.js";
export default (app) => {
    app.get('/', user);
};
