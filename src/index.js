import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Button, EditableText} from "@blueprintjs/core";

import App from "./App";
// import Home from "./components/Ahome";

// import Car from "./components/Carrier";
// import Garage from "./components/Garage";
// import Epple from "./components/Empty";
// import favouritecolor from './components/favouritecolor';
// import Render from "./components/Render";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <>
      <App />
      {/* <Home/> */}
      {/* <Car /> */}
      {/* <Garage/>  */}
      {/* <Epple/> */}
      {/* <Render/> */}
    </>
  </StrictMode>
);
