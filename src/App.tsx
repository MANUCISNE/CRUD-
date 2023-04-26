import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed/feed";
import { Post } from "./pages/Post/post";
import { Edit } from "./pages/Edit/edit";
import { ReadMore } from "./pages/ReadMore/readMore";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/readMore/:id" element={<ReadMore />}/>
      </Routes>
    </BrowserRouter>
  );
}
