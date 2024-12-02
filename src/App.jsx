import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        Movie={{ title: "Lakhwani Ji the Goat", release_date: "2024-12-1" }}
      />
    </>
  );
}

export default App;
