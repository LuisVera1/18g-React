import "./Card.css";

export default function Card({ photoURL, firstName, lastName, age, gender }) {
  return (
    <li className="listStyle">
      <div className="flexcontainer">
        <div className="img">
          <img className="imgThumb" src={photoURL} alt=""></img>
        </div>
        <div className="textContainer">
          <p className="textBlack">{firstName + " " + lastName}</p>
          <p className="textGray">{"Edad: " + age + ", Género: " + gender}</p>
        </div>
      </div>
    </li>
  );
}
