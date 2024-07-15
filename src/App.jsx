import { useState } from "react";
// import "./App.css";
import { Stack, Button } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavbarComp from "./components/NavbarComp";
import ServicesPage from "./pages/ServicesPage";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<NavbarComp />}>
//           <Route index element={<Homepage />} />
//         </Route>
//         <Route path="/services" element={<ServicesPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Homepage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

export default App;
