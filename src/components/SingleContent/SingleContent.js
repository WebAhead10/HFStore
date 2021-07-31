import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  setFav,
}) => {
  return (
    <div
      className="media"
      onDoubleClick={() => {
        setFav((prevFav) => {
          if (
            prevFav.some((element) => {
              return element.id === id;
            })
            ) {
            alert('This Movie Is Already In The Favorite')
            return prevFav;
          }
          return prevFav.concat({ id, poster, title, date, vote_average });
        });
      }}
      onClick={() => {
        if (window.location.href.includes("/favorite")) {
          setFav((prevFav) => {
            return prevFav.filter((mario) => {
              return mario.id !== id;
            });
          });
        }
      }}
    >
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">{date}</span>
    </div>
  );
};

export default SingleContent;
