import "./sidebar.css";
import {
  PersonOutline,
  Podcasts,
  Article,
  EventAvailable,
} from "@mui/icons-material/";
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pengguna</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/users" style={{ textDecoration: 'none', color: 'inherit', margin: 0, padding : 0}}>
              <PersonOutline className="sidebarIcon" />
              Users
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pesan Broadcast</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Podcasts className="sidebarIcon" />
              Broadcast
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tulis Artikel</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Article className="sidebarIcon" />
              Artikel
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Event Kalender</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EventAvailable className="sidebarIcon" />
              Kalender
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
