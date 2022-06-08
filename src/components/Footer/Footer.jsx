import { usePrismicDocumentByUID } from '@prismicio/react';
import { animateScroll as scroll } from 'react-scroll';
import FooterListItem from './FooterListItem';

function scrollToTop() {
  scroll.scrollToTop();
}

function Footer() {
  const [content, { state }] = usePrismicDocumentByUID('homepage', 'main');
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
        {state === 'loaded' &&
          content.data.body.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <FooterListItem key={item.slice_type} {...item} />
          ))}
      </div>
      <div className="w-2/5">
        <div className="text-md text-white py-4">
          <p className="px-2 flex justify-center items-stretch">
            <i
              style={{ font_size: '35px' }}
              className="fab fa-brands fa-instagram py-1"
            />{' '}
            <p className="px-2">instagram</p>
          </p>
          <p className="px-2 mt-2 flex justify-center items-stretch">
            <i
              style={{ font_size: '35px' }}
              className="fab fa-brands fa-vk py-1"
            />{' '}
            <p className="px-2">vkontakte</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
