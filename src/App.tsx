import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layouts/dashboardLayout"
import { lazy, Suspense } from "react"

const LazyHome = lazy(()=>import("./pages/home/view/index"));


const App = () => {
  return (
    <Routes>
        <Route element={<DashboardLayout/>}>
            <Route
              path="/"
              element={
              <Suspense fallback={<div>loading...</div>}>
                <LazyHome/>
              </Suspense>
              }
            />
        </Route>
    </Routes>
  )
}

export default App