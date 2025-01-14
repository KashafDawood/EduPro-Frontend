import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/AuthLayout.tsx", [index("./Pages/Login/index.tsx")]),
  layout("./layouts/PrivateLayout.tsx", [
    route("/dashboard", "./Pages/AdminDashboard/index.tsx"),
    route("/student", "./Pages/Student/index.tsx"),
    route("/teacher", "./Pages/Teacher/index.tsx"),
    route("/otherstaff", "./Pages/OtherStaff/index.tsx"),
    route("/class", "./Pages/Class/index.tsx"),
    route("/subject", "./Pages/Subject/index.tsx"),
    route("/expense", "./Pages/Expense/index.tsx"),
  ]),
] satisfies RouteConfig;
