import { Fade } from 'react-awesome-reveal';
import PriceListItem from './PricelistItem';

function PriceList({ slice }) {
  return (
    <>
      <div
        className="block-name text-5xl my-4 md:w-5/6 md:my-16 text-center"
        id={slice.slice_type}
      >
        <Fade cascade duration={100}>
          {slice.primary.title}
        </Fade>
      </div>
      <div className="md:flex sm:w-3/4 container">
        {slice.items.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <PriceListItem key={item.cost} {...item} />
        ))}
      </div>
      <div className="w-full h-32 text-center" />
    </>
  );
}
export default PriceList;
