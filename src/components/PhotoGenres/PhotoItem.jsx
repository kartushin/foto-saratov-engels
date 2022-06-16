import * as prismicH from '@prismicio/helpers';

function PhotoItem({ photo, key }) {
  if (!photo) {
    return null;
  }

  const photoSrc = prismicH.asImageSrc(photo);

  return <img className="w-full" src={photoSrc} alt={key} />;
}

export default PhotoItem;
