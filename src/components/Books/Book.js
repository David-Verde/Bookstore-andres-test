import { CircularProgressbar } from 'react-circular-progressbar';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    author,
    category,
    chapter,
    percentage,
  } = props;

  return (
    <section className="book-list-container">
      <div className="book-list-info">
        <h2 className="book-list__book-category">{category}</h2>
        <h2 id={id} className="book-list__book-title">{title || 'Title Goes Here'}</h2>
        <p className="book-list__book-author">{author || 'Author Goes Here'}</p>
        <div className="actions-container">
          <ul className="actions-list">
            <li className="action-list__item"><button type="button">Comments</button></li>
            <li className="action-list__item"><button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button></li>
            <li className="action-list__item"><button type="button">Edit</button></li>
          </ul>
        </div>
        <div className="progress-bar">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <div className="current-progress">
          <h2>CURRENT CHAPTER</h2>
          <p>{chapter || 'Chapter 17'}</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>

    </section>
  );
};

Book.defaultProps = {
  chapter: 'Not Specificated',
  percentage: 0,
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.string,
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Book;
