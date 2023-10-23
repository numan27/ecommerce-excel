/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { Routes, Route } from "react-router-dom";
import WEB_PAGES from "./pages/index";
import PATH from "./utils/path";

function RouterConfig() {
  return (
    <Routes>     
      
      {/* <Route
        path={PATH.LOGIN}
        element={<WEB_PAGES.LOGIN />} /> */}
      <Route
        path={PATH.HOME}
        element={<WEB_PAGES.HOME />} />
      <Route
        path={PATH.LOGIN}
        element={<WEB_PAGES.LOGIN />} />
      <Route
        path={PATH.REGISTER}
        element={<WEB_PAGES.REGISTER />} />

    </Routes>


  );
}

export default RouterConfig;
