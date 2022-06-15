import { animateScroll as scroll } from 'react-scroll';
import { PrismicLink } from '@prismicio/react';
import { FaInstagram, FaVk } from 'react-icons/fa';
import { MENU_SLICES } from '../../constans/constans';
import FooterListItem from './FooterListItem';

function scrollToTop() {
  scroll.scrollToTop();
}

function Footer({ data }) {
  return (
    <div className="flex w-full bg-black">
      <button
        type="button"
        className="logo text-white w-1/5"
        onClick={scrollToTop}
      >
        Logo
      </button>
      <div className="w-3/5 flex">
        {data &&
          data.data.body
            .filter((i) => MENU_SLICES.includes(i.slice_type))
            .map((item) => (
              <FooterListItem
                sliceType={item.slice_type}
                primary={item.primary}
              />
            ))}
      </div>
      <div className="w-2/5">
        <div className="text-md text-white py-4">
          <div className="px-2 flex items-center justify-center">
            <div className="icons">
              <FaInstagram />
            </div>
            <div className="px-2">instagram</div>
          </div>
          <div className="px-2 mt-2 flex items-center justify-center">
            <div className="icons">
              <FaVk />
            </div>
            <div className="px-2">vkontakte</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
