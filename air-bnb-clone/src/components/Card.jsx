import { CardStyles } from './AppStyles';
const Card = (props) => {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <CardStyles>
      {badgeText && <div className="status">{badgeText}</div>}
      <img
        className="card-image"
        src={`../../public/images/${props.card.coverImg}`}
        alt="athlete-photo"
      />
      <div className="card-stats">
        <img src="../../public/images/star.png" className="star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">
          ({props.card.stats.reviewCount}) • {props.card.location}
        </span>
      </div>

      <div className="info">
        <div>
          <p>{props.card.title}</p>
        </div>

        <div>
          <span>
            <b>From ${props.card.price}</b>
          </span>
          <span>/ person</span>
        </div>
      </div>
    </CardStyles>
  );
};

export default Card;

// const Card = () => {
//   return (
//     <CardStyles>
//       <img
//         className="card-image"
//         src="https://scrimba-airbnb-page.vercel.app/static/media/katie-zaferes.4dcb2224d553ccd977a4.png"
//         alt="athlete-photo"
//       />
//       <div className="card-stats">
//         <img src="../../public/images/star.png" className="star" />
//         <span>5.0</span>
//         <span className="gray">(6) • </span>
//         <span className="gray">USA</span>
//       </div>
//       <p>Life Lessons with Katie Zaferes</p>
//       <p>From $136/ person</p>
//     </CardStyles>
//   );
// };
