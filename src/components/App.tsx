import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="books/:booksId" element={<BooksDetails />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
