import "./styles.css";
import faker from "faker";
export default function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            sam
          </a>
          <div className="metadata">
            <span className="date"> Today at 6:00PM</span>
          </div>
          <div className="text"> Hi, This is a Nice Blog post!</div>
        </div>
      </div>
    </div>
  );
}
