import { Route, Routes } from "react-router-dom";
//Routes urls
import { ROUTES } from "../constants/routes";
//Components
import { Button } from "@/components/ui/button";
import Login from "./auth/login";
export function Router({}) {
  return (
    <Routes>
      <Route element={<Login />} path={ROUTES.homePage} />
    </Routes>
  );
}
