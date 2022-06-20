import * as prismicH from '@prismicio/helpers';

function HeroPhoto({ photo }) {
  if (!photo) {
    return null;
  }

  const photoSrc = prismicH.asImageSrc(photo);

  return (
    <div className="shadow-border">
      <img className="place-self-center" src={photoSrc} alt="" />
    </div>
  );
}

export default HeroPhoto;
