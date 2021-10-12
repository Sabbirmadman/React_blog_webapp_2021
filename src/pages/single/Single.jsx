import Sidebar from "../../componnent/sidebar/Sidebar";
import SinglePost from "../../componnent/singlePost/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
