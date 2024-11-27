import "./App.css";
import logo from "./assets/images/films.png";
import like from "./assets/images/like.png";
import Header from "./assets/components/Header";
import Horror from "./assets/components/Horror";
import data from "./assets/data.json";
function App() {
  return (
    <div>
      <Header
        images={logo}
        text="Kino Royhati"
        desc1="Bosh sahifa"
        desc2="Kinolar"
        desc3="Yangiliklar"
        imagesLike={like}
        title=" likes"
        likesNum={0}
      />
      <Horror info={data} />
    </div>
  );
}

export default App;
