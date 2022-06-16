/* eslint-disable react/jsx-props-no-spreading */
import { PrismicText } from '@prismicio/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './dots.css';
import { IMAGE_ITEM } from '../../constans/constans';
import PhotoItem from './PhotoItem';

function GenresListItem({ image, title, content }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots) => (
      <div
        style={{
          bottom: '-16px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="md:w-1/4 grow border-4 border-black md:m-6 m-4 p-6 ">
      <div className="slider">
        <Slider {...settings}>
          <PhotoItem photo={image} />
          {Object.keys(image)
            .filter((i) => IMAGE_ITEM.includes(i))
            .map((item) => (
              <PhotoItem key={image[item]} photo={image[item]} />
            ))}
        </Slider>
      </div>
      <div className="info p-4">
        <p className="title text-justify text-black text-xl pt-2 pb-4">
          {title && <PrismicText field={title} />}
        </p>
        <p className="title text-justify text-black text-md pb-4">
          {content && <PrismicText field={content} />}
        </p>
      </div>
    </div>
  );
}
export default GenresListItem;
