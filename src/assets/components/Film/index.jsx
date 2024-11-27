import "./index.css";
import heartImage from "./heart.png";
function Film(props) {
  const {
    id,
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    imdbRating,
    Images,
  } = props.info;
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="cards">
            <img
              className="imgHeart"
              width="40px"
              src={heartImage}
              alt="heart image"
            />
            <img
              className="cinoImg"
              width="100px"
              src={Images}
              alt="avatar image"
            />
            <h3>{Title}</h3>
            <p className="title">{Plot}</p>
            <div className="information">
              <div className="data">
                <h4 className="year">Yil:</h4>
                <p className="desc">{Year}</p>
                <h4 className="year">Chiqarilgan sana:</h4>
                <p className="desc">{Released}</p>
                <h4 className="year">Janr:</h4>
                <p className="desc">{Genre}</p>
                <h4 className="year">Yozuvchi:</h4>
                <p className="desc">{Writer}</p>
                <h4 className="year">Til:</h4>
                <p className="desc">{Language}</p>
                <h4 className="year">Mukofot:</h4>
                <p className="desc">{Awards}</p>
              </div>
              <div className="data">
                <h4 className="year">Reyting:</h4>
                <p className="desc">{Rated}</p>
                <h4 className="year">Davomiyligi:</h4>
                <p className="desc">{Runtime}</p>
                <h4 className="year">Rejissor:</h4>
                <p className="desc">{Director}</p>
                <h4 className="year">Aktyorlar:</h4>
                <p className="desc">{Actors}</p>
                <h4 className="year">Mamlakat:</h4>
                <p className="desc">{Country}</p>
                <h4 className="year">Reyting:</h4>
                <p className="desc">{imdbRating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;
