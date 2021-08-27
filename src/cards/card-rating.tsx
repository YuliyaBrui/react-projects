interface Rating {
  like: number
  review: number
  comments: number
}
export function RatingCard({ like, review, comments }: Rating) {
  return (
    <div className="rating">
      <img className="rating_icon" src="./img/icons/like.png" alt="like" />
      <span className="rating_data">{like}</span>
      <img className="rating_icon" src="./img/icons/review.png" alt="review" />
      <span className="rating_data">{review}</span>
      <img className="rating_icon" src="./img/icons/chat.png" alt="comments" />
      <span className="rating_data">{comments}</span>
    </div>
  )
}
