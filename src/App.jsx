import { BrowserRouter, Route, Routes } from "react-router-dom";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

const App = () => {


  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )

}

export default App;