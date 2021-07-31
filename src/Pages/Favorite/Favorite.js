import SingleContent from "../../components/SingleContent/SingleContent";
const Favorite = (props) => {
  console.log('====================================');
  console.log(props.fav);
  console.log('====================================');
  return (
    <div className="trending">
      {props.fav &&
        props.fav.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type="movie"
            vote_average={c.vote_average}
            setFav={props.setFav}
          />
        ))}
    </div>
  );
};

export default Favorite;
