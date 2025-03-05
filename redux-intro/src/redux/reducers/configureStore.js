// redux/reducers/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer'; // Your reducer file

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Ensure you're correctly assigning reducers
  },
});

export default store;
