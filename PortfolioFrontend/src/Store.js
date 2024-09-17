import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, userReducer } from "./reducers/user";
// updateReducer, 
const store = configureStore({
  reducer: {
    user: userReducer,
    login:loginReducer,
    // update: updateReducer,
  },
});

export default store;
