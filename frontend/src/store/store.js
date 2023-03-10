import {configureStore} from '@reduxjs/toolkit'
import userReducers from '../features/userSlice'

const store = configureStore({
    reducer: {
        user : userReducers
    }
})
export default store
