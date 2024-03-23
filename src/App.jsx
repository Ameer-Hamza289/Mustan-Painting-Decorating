import { BrowserRouter, Route, Routes } from "react-router-dom";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

const App = () => {


  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/service" element={<Services/>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )

}

export default App;