export default function Comment({ review }) {
  return (
    <div className="Review ">
      <div className="userInfo flex">
        <img
          src={
            review.user.photo ||
            "../../Graduation project assestst/Graduation project/user.png"
          }
          alt=""
        />
        <h6 className="UserName LightBlue">{review.user.name}</h6>
      </div>
      <div className="Stars&Date flex justContentSpaceArround">
        <div className="commentStars">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star ${
                index < review.rating ? "LightBlue" : ""
              }`}
            ></i>
          ))}
        </div>
        <div className="date LightBlue">{review.createdAt}</div>
      </div>

      <p className="Comment LightBlue textAlignLeft">{review.review}</p>
    </div>
  );
}
