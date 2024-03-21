import posts from "../assets/posts/";
import licon from "../assets/licon.jpg";
import "./Card.css";

// inline CSS must add another element style
function Card() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "solid black",
    borderRadius: "5px",
    margin: "5px",
    maxWidth: "500px",
    height: "200px",
    gap: "10px",
  };

  const imgStyle = {
    maxHeight: "25px",
  };

  return (
    <>
      {/* detructuring */}
      {posts.map(({ username, content, timestamp, likes }) => (
        // key prop to efficiently renders, key should have a uniqe identifier
        <div key={timestamp} style={cardStyle} className="card">
          {/* react evaluates an expression and renders it right away, the slice renders the rest of the name */}
          <h3>{username.charAt(0).toUpperCase() + username.slice(1)}</h3>
          <p>{content}</p>
          <p>
            {/* passing img  */}
            <img style={imgStyle} className="like" src={licon} alt="like" />
            {likes}
          </p>
          <p>{timestamp}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
