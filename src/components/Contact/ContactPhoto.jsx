import * as prismicH from '@prismicio/helpers';

function ContactPhoto({ photo }) {
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

export default ContactPhoto;
