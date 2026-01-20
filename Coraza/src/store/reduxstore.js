import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice.js"


// store.js is the file that configures the store
// the convention is to create an object named store that is a redux method called configure Store
const store = configureStore({
    // here you have to mention all Slices that you have created, basically determining what type
    // of state changes you are tracking!
    reducer: {
        auth: authSlice,
    }
})


// here you export the store
export default store