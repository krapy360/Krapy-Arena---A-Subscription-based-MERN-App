import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicExample from './components/Nav/Nav';
import LandingPage from "./pages/LandingPage";
import Articles from "./pages/Articles";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import ArticlesPlan from "./pages/ArticlesPlan";

function App() {
  return (
    <BrowserRouter>
      <BasicExample />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<ProtectedRoutes />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="/article-plans" element={<ProtectedRoutes />}>
          <Route path="/article-plans" element={<ArticlesPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
