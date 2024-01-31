import "./App.css";
import Feedback from "./Feedback";
import Movie from "./Movie";
import NavBar from "./NavBar";

const movies = [
  {
    name: "Interstellar",
    genre: "Advanture,Drama",
    director: "Christopher Nolan",
    imdb: "8.7",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    name: "Argylle",
    genre: "Action,Thriller",
    director: "Matthew Vaughn",
    imdb: "7.1",
    description: "A reclusive author who write espionage novels about a secret agent and a global spy syndicate realizes the plot of the new book she's writing starts to mirror real-world events, in real time.",
    img: "https://m.media-amazon.com/images/M/MV5BZDM3YTg4MGUtZmUxNi00YmEyLTllNTctNjYyNjZlZGViNmFhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UY5000_.jpg"
  },
  {
    name: "Oppenheimer",
    genre: "Biography,Drana,History",
    director: "Christopher Nolan",
    imdb: "8.4",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UY3454_.jpg",
  },
];

const cinema = {
  name: "Magic Cinema",
  address: "Baku, Mashtagha",
  rating: "8.7",
};

const feedbacks = [
  {
    username: "Elvin Jamalzade",
    content: "The seats are too close to the TV",
  },
  {
    username: "Shireli Nuriyev",
    content:
      "The seats are uncomfortable for sleeping, I can't get a good sleep",
  },
];
function App() {
  return (
    <div className="App" style={{backgroundColor:"#F1A494"}}>
      <NavBar cinemaInfo={cinema}></NavBar>
      {movies.map((m) => (
        <Movie movieInfo={m}></Movie>
      ))}

      <h1
        style={{
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Feedbacks
      </h1>
      <Feedback feedback={feedbacks[0]}></Feedback>
      <Feedback feedback={feedbacks[1]}></Feedback>
    </div>
  );
}

export default App;
