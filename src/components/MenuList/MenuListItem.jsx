import { Link } from 'react-scroll';
import './menu-list.css';

function MenuListItem({ primary, sliceType }) {
  return (
    <button
      type="button"
      className="basis-1/3 px-2 text-center flex items-stretch hover:text-white"
    >
      <Link
        activeClass="active"
        to={sliceType}
        spy
        smooth
        offset={-250}
        duration={1000}
        className="icons w-full py-8"
      >
        {primary.title}
      </Link>
    </button>
  );
}

export default MenuListItem;
