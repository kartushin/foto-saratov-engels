import * as prismicH from '@prismicio/helpers';

function AboutMePhoto({ photo }) {
  if (!photo) {
    return null;
  }

  const photoSrc = prismicH.asImageSrc(photo);

  return (
    <div>
      <img src={photoSrc} alt="" />
    </div>
  );
}

export default AboutMePhoto;
