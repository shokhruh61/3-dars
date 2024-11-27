import "./index.css";
function Header(props) {
  const { images, text, likesNum, desc1, desc2, desc3, imagesLike, title } =
    props;

    const Likes = (() =>{
alert('bosildi')
    });
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <a href="#">
                <img width="40px" src={images} alt="avatar" />
              </a>
              <a href="#">
                <h1>{text}</h1>
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">{desc1}</a>
                </li>
                <li>
                  <a href="#">{desc2}</a>
                </li>
                <li>
                  <a href="#">{desc3}</a>
                </li>
              </ul>
            </nav>
            <div className="likes">
              <img width="30px"  src={imagesLike} alt="like image" />
              <p onClick={Likes}>
                {likesNum} {title}
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
