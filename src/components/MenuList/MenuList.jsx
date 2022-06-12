import * as Scroll from 'react-scroll';
import MenuListItem from './MenuListItem';
import './menu-list.css';

function scrollToTop() {
  Scroll.animateScroll.scrollToTop();
}

// function scrollToBottom() {
//   Scroll.animateScroll.scrollToBottom();
// }

const MENU_SLICES = [
  'alternate_grid',
  'cards_carousel',
  'cards_carousel_1',
  'contacts',
];

function MenuList({ data }) {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row backdrop-opacity-60 backdrop-invert bg-white/30 z-40">
      <div className="icons basis-1/5 px-2 text-center py-8">
        <button type="button" className="logo" onClick={scrollToTop}>
          Logo
        </button>
      </div>
      <div className="menu basis-3/5 flex">
        {data &&
          data.data.body
            .filter((i) => MENU_SLICES.includes(i.slice_type))
            .map((item) => (
              <MenuListItem
                key={item.slice_type}
                sliceType={item.slice_type}
                primary={item.primary}
              />
            ))}
      </div>
      <button
        type="button"
        className="icons basis-1/5 px-4 text-left py-8 hover:text-white"
        // onClick={scrollToBottom}
      >
        <Scroll.Link to="contacts" spy smooth>
          VK Instagram
        </Scroll.Link>
      </button>
    </header>
  );
}

export default MenuList;
