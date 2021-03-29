import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersDate/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    }
})