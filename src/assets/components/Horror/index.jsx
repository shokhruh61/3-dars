import "./index.css";
import Film from "../Film";
function Horror(props) {
  const { info } = props;
  console.log(info);
  return (
    <div>
      <div className="container">
        <div className="card">
          {info.length > 0 &&
            info.map((info, index) => {
              return <Film key={index} info={info} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Horror;
