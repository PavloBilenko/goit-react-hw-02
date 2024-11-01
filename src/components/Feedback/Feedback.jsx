import PropTypes from "prop-types"; // Імпортуємо PropTypes
import s from "./Feedback.module.css";

const Feedback = ({ voteData }) => {
  const total = voteData.good + voteData.neutral + voteData.bad;
  const positivePercentage = total > 0 ? (voteData.good / total) * 100 : 0;

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>Good: {voteData.good}</li>
        <li className={s.listItem}>Neutral: {voteData.neutral}</li>
        <li className={s.listItem}>Bad: {voteData.bad}</li>
        <li className={s.listItem}>Total: {total}</li>
        <li className={s.listItem}>
          Positive: {positivePercentage.toFixed(2)}%
        </li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  voteData: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
