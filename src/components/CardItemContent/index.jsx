
import "./CardItemContent.css";

export default function ({ title, content }) {
  return (
    <div className="card-item-content">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
}