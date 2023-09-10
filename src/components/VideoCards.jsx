const VideoCards = ({ item }) => {
  return (
    <div>
      <div className="cursor-pointer h-52 w-48">
        <img
          className="h-full w-full rounded-sm cursor-pointer"
          src={"https://image.tmdb.org/t/p/w200" + item?.poster_path}
        />
      </div>
    </div>
  );
};
export default VideoCards;
