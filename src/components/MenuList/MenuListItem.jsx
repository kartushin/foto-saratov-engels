import { Link } from 'react-scroll';
import './menu-list.css';

// eslint-disable-next-line camelcase
function MenuListItem({ primary, slice_type }) {
  return (
    <button
      type="button"
      className="basis-1/3 px-2 text-center flex items-stretch hover:text-white"
    >
      <Link
        activeClass="active"
        // eslint-disable-next-line camelcase
        to={slice_type}
        // eslint-disable-next-line react/jsx-boolean-value
        spy={true}
        // eslint-disable-next-line react/jsx-boolean-value
        smooth={true}
        offset={-150}
        duration={1000}
        className="icons w-full py-8"
      >
        {primary.title}
      </Link>
    </button>
  );
}

export default MenuListItem;
