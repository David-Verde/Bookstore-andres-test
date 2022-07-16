import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  return (
    <section>
      <h2>CATEGORIES</h2>
      <h3>{categories}</h3>
      <button
        type="button"
        onClick={() => dispatch(checkStatus('Under Development'))}
      >
        CHECK STATUS

      </button>
    </section>
  );
};
export default Categories;
