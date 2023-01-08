import "./listItem.scss";
// import {
//   PlayArrow,
//   Add,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
// } from "@material-ui/icons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";



export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  // console.log(movie.video);

  

  return (
    // <Link to={ pathname: "/watch"  } state = { videoTitle : video.title }>
    <Link to={'/watch'} state={{ movieVideo: movie.video }} key={movie._id}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225  + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpAltIcon className="icon" />
                <ThumbDownAltIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}