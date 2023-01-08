// import { ArrowBackOutlined } from "@material-ui/icons";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  // const location = useLocation();
  // const movie = location.movie;

  const location = useLocation();
const { state } = location;
const movieVideo = state;


console.log(movieVideo.movieVideo);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movieVideo.movieVideo} />
    </div>
  );
}
