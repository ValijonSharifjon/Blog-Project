import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.tsx";
import IndexPage from "./pages/IndexPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import {UserContextProvider} from "./UserContext.tsx";
import CreatePost from "./pages/CreatePost.tsx";
import PostPage from "./pages/PostPage.tsx";
import EditPost from "./pages/EditPost.tsx";

function App() {

  return (
      <UserContextProvider>
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<IndexPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/create" element={<CreatePost/>} />
                  <Route path="/post/:id" element={<PostPage />} />
                  <Route path="/edit/:id" element={<EditPost />} />
              </Route>
          </Routes>
      </UserContextProvider>
  )
}

export default App
