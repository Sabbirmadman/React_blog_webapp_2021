import Header from "../../componnent/Header/Header";
import Posts from "../../componnent/posts/Posts";
import Sidebar from "../../componnent/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar active="true" />
      </div>
    </>
  );
};

export default Home;
