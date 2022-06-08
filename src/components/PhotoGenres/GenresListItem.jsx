/* eslint-disable react/jsx-props-no-spreading */
import { PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './dots.css';

function PhotoItem({ photo }) {
  if (!photo) {
    return null;
  }

  const photoSrc = prismicH.asImageSrc(photo);

  return (
    <div>
      <img className="w-full" src={photoSrc} alt="" />
    </div>
  );
}

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
          {'loaded' && <PhotoItem photo={image.imageOne} />}
          {'loaded' && <PhotoItem photo={image.imageTwo} />}
          {'loaded' && <PhotoItem photo={image.imageTree} />}
          {'loaded' && <PhotoItem photo={image.imageFour} />}
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
