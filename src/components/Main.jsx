import "../styles/GridMain.css";
import PostList from './posts/PostList';

function Main() {
  return (
    <div className="grid grid-cols-[75fr,25fr]">
      <div className="main">
        <PostList/>
      </div>
      <div className="left">Lateral</div>
    </div>
  );
}

export default Main;
