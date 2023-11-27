import Header from "../components/Header/Header";
import BookList from "../components/BookList/BookList";

function Home() {
  return (
    <>
      <Header />
      <main>
        <BookList />
      </main>
      <footer>Thank you books for the broad outlook!</footer>
    </>
  );
}

export default Home;
