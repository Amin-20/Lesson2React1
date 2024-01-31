import './App.css';
import Feedback from './Feedback';
import Movie from './Movie';
import NavBar from './NavBar';



const movies=[
  {
    name:"Recep Ivedik 4",
    genre:"Comedy",
    director :"Elchin Guliev",
    imdb:"8.6",
    description:"Funny turkish comedy",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kanald.com.tr%2Fsinemalar%2Frecep-ivedik-4&psig=AOvVaw1eNj0Mwox5_F9oCb23VgIo&ust=1706287867111000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPif5ej_-IMDFQAAAAAdAAAAABAD"
  },
  {
    name:"Kurtlar vadisi",
    genre:"Mafia",
    director :"Elchin Guliev",
    imdb:"999",
    description:"Better than modern movies",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsfera.az%2Fhadise%2F237506%2Fkurtlar-vadisi-ile-taninan-meshur-is-adamina-gllelendi-veziyyeti-airdirfoto%2F&psig=AOvVaw18Aqd3dGvdVIrAvc_Z3lGp&ust=1706287969806000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICfj5eA-YMDFQAAAAAdAAAAABAD"
  },
  {
    name:"Yali capkini",
    genre:"Drama",
    director :"Amin Atakishiyev",
    imdb:"2.1",
    description:"A movie to watch while eating",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fonedio.com%2Fhaber%2Fyali-capkini-konusu-nedir-ve-oyunculari-kimlerdir-yali-capkini-gercek-hikaye-mi-hangi-kitaptan-uyarlama-1142681&psig=AOvVaw3F7fdlyvXK4aYow0rbnSu7&ust=1706288165646000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDSoPKA-YMDFQAAAAAdAAAAABAH"
  }
]

const cinema = {
  name: "Park Cinema",
  address: "Park Bulvar",
  rating: "9.3",
}

const feedbacks = [
  {
    username: "Elvin Jamalzade",
    content:"The seats are too close to the TV",
  },
  {
    username: "Shireli Nuriyev",
    content:"The seats are uncomfortable for sleeping, I can't get a good sleep",
  },
]
function App() {
  return (
    <div className="App">
      
      <NavBar cinemaInfo={cinema}></NavBar>
      <Movie movieInfo={movies[0]}></Movie>
      <Movie movieInfo={movies[1]}></Movie>
      <Movie movieInfo={movies[2]}></Movie>

      <h1 style={{
        backgroundColor:"gray",
        color:"white"
      }}>Feedbacks</h1>
      <Feedback feedback={feedbacks[0]}></Feedback>
      <Feedback feedback={feedbacks[1]}></Feedback>
    </div>
  );
}

export default App;
