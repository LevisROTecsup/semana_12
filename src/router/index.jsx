import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminDrawer, AppBarClient } from "../layout";
import { HomeView, AboutView, AdminView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppBarClient />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about/:slug" element={<AboutView />} />
        </Route>
        <Route element={<AdminDrawer />}>
          <Route path="/admin" element={<AdminView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
