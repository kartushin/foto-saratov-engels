import { Link } from 'react-scroll';

function FooterListItem({ sliceType, primary }) {
  return (
    <button
      type="button"
      className="w-1/3 px-2 text-center flex items-stretch text-white hover:text-stone-700"
    >
      <Link
        activeClass="active"
        to={sliceType}
        spy
        smooth
        offset={-150}
        duration={1000}
        className="icons w-full py-8"
      >
        {primary.title}
      </Link>
    </button>
  );
}

export default FooterListItem;
