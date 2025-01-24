import { Media } from "bknd/elements";
import "bknd/dist/main.css";
import { Route, Router, Switch } from "wouter";
import { lazy, Suspense } from "react";

const AdminPage = lazy(() => import("./admin"));

export default function App() {
   return (
      <Router>
         <Switch>
            <Route path="/admin/*?">
               <Suspense>
                  <AdminPage />
               </Suspense>
            </Route>
            <Route path="*">
               <div>
                  media <a href="/admin">admin</a>
                  <div>
                     <Media.Dropzone />
                  </div>
               </div>
            </Route>
         </Switch>
      </Router>
   );
}
