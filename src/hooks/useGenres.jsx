import { Genres } from "../utilities/Constants"

const useGenres = (dataType, genreIDs) => {
  if (dataType !== "movie" && dataType !== "tv") {
    return []
  }
  const genreIds = genreIDs
  const genreArray = Genres[dataType]
  const selectedGenres = genreArray.filter((genre) => genreIds.includes(genre.id)).map((genre) => genre.name)
  const limitedGenres = selectedGenres.slice(0, 3)
  return limitedGenres.map((item, index) => {
    const isLast = index === limitedGenres.length - 1
    return (
      <span key={index}>
        <span>{" " + item}</span>
        {!isLast && <span>,</span>}
      </span>
    )
  })
}
export default useGenres
