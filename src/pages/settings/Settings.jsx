import Sidebar from "../../componnent/sidebar/Sidebar";
import "./settings.css";
import img from "../../images/Untitled-3.png";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">
            <i className="settingsDeleteIcon fas fa-user-times"></i>
            Delete Account
          </span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent.fdac39-1.fna.fbcdn.net/v/t1.6435-9/218198816_1813674812138945_2224349374655338452_n.jpg?_nc_cat=110&amp;ccb=1-5&amp;_nc_sid=174925&amp;_nc_eui2=AeE1e6H_rq3CSHuxxlONRQaIamdX4jWLK5JqZ1fiNYsrkrhtPhltIEBxLHej4RtsLSArsK5VlMMdxW0RxmKK43Vk&amp;_nc_ohc=Q6ZOEqA-XekAX8n5Adk&amp;tn=sD1WELh04pvsPaVN&amp;_nc_ht=scontent.fdac39-1.fna&amp;oh=4636df734aba165e5925aa7daa294e7a&amp;oe=61883AAD"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="username" />
          <label>Email</label>
          <input type="email" placeholder="user@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
//
