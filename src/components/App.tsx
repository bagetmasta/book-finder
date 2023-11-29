import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const BookDetails = lazy(() => import("../pages/BookDetails"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
