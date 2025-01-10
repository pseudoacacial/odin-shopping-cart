import App from "./App"
import { ErrorPage } from "./ErrorPage"
import { LandingPage } from "./LandingPage"
import { Shop } from "./Shop"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]

export default routes
