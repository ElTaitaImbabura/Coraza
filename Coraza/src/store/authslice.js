import { createSlice } from "@reduxjs/toolkit";


// in authSlide.js you will create all your reducers

// every Slide needs an initial state so it knows where / how to start
// the redux framework requires: status, userData (from backend), 
const initialState = {
    status: false,
    userData: null
}


// now we create a Slice using the redux method createSlice() which takes an object with:
// name, initialState, reducers (which is an object itself)
// reducers contain: current state an an action
// the action is further defined with a type and a payload (data that needs to be integrated or handled)
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // the reducers are methods that determine what happens 
        // these reducer methods take two arguments: state and action
        // the state is the current state, what the store is depicting at the moment
        // actions are objects that can be invoqued to provide the payload (relevant data)

        // login method:
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        },

        //logout method:
        logout: (state) => {
            state.status = false;
            state.userData = null
        }
    }
})


// this exports the reducers individually 
export const { login, logout } = authSlice.actions

// this exports the authSlice reducers which need to be imported into the store
export default authSlice.reducer
