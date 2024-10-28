import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppBar from "./components/AppBar";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import MyBlog from "./pages/MyBlog";
import Publish from "./pages/Publish";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/signin" && (
        <AppBar />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/myblog" element={<MyBlog />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
