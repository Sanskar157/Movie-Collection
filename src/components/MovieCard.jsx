function MovieCard({ Movie }) {
  function OnFavorite() {
    alert("clicked");
  }

  return (
    <div className="Movie-card">
      <div className="Movie-poster">
        <img src={Movie.url} alt={Movie.title} />
        <div className="Movie-overlay">
          <button className="favourite-btn" onClick={OnFavorite}>
            ♡
          </button>
        </div>
      </div>
      <div className="Movie-info">
        <h3>{Movie.title}</h3>
        <p>{Movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
