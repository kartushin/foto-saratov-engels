import { usePrismicDocumentByUID } from '@prismicio/react';
import { animateScroll as scroll } from 'react-scroll';
import MenuListItem from './MenuListItem';
import './menu-list.css';

function scrollToTop() {
  scroll.scrollToTop();
}

function scrollToBottom() {
  scroll.scrollToBottom();
}

function MenuList() {
  const [content, { state }] = usePrismicDocumentByUID('homepage', 'main');
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row backdrop-opacity-60 backdrop-invert bg-white/30 z-40">
      <div className="icons basis-1/5 px-2 text-center py-8">
        <button type="button" className="logo" onClick={scrollToTop}>
          Logo
        </button>
      </div>
      <div className="menu basis-3/5 flex">
        {state === 'loaded' &&
          content.data.body.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <MenuListItem key={item.slice_type} {...item} />
          ))}
      </div>
      <button
        type="button"
        className="icons basis-1/5 px-4 text-left py-8 hover:text-white"
        onClick={scrollToBottom}
      >
        VK Instagram
      </button>
    </header>
  );
}

export default MenuList;
