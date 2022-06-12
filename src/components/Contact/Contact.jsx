import * as prismicH from '@prismicio/helpers';
import * as Scroll from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { PrismicLink } from '@prismicio/react';

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

function Contact({ slice }) {
  return (
    <Scroll.Element name={slice.slice_type}>
      <div
        name="Contact"
        className="sm:w-5/6 text-5xl md:my-16 text-center"
        // id={slice.slice_type}
      >
        <Fade cascade duration={100}>
          {slice.primary.title}
        </Fade>
      </div>
      <div className="md:w-1/2 grid justify-items-center p-4">
        <div className="shadow-border shadow-border-up">
          {'loaded' && <ContactPhoto photo={slice.primary.firstphoto} />}
        </div>
      </div>
      <div className="md:w-1/2 grid justify-items-left p-4">
        <div className="md:w-3/4 md:border-4 border-black">
          <div className="md:border-0 border-4 border-black">
            <div className="justify-self-start py-8 px-8 text-xl text-black">
              {slice.primary.description}
            </div>
          </div>
          <div className="justify-self-start md:pt-0 md:mt-0 mt-8 pt-8 pb-8 px-8 md:border-0 border-4 border-black text-xl text-black">
            <PrismicLink field={slice.primary.instagram}>
              <i
                style={{ font_size: '35px' }}
                className="fab fa-brands fa-instagram"
              />{' '}
              {slice.primary.linktitleinst}
            </PrismicLink>
          </div>
          <div className="justify-self-start md:pt-0 md:mt-0 mt-8 pt-8 pb-8 px-8 md:border-0 border-4 border-black text-xl text-black">
            <PrismicLink field={slice.primary.vkontakte}>
              <i
                style={{ font_size: '35px' }}
                className="fab fa-brands fa-vk"
              />{' '}
              {slice.primary.linktitlevk}
            </PrismicLink>
          </div>
        </div>
        <div className="md:w-1/2 pt-6 sm:block hidden">
          <div className="shadow-border">
            {'loaded' && <ContactPhoto photo={slice.primary.secondphoto} />}
          </div>
        </div>
      </div>
      <div className="w-full h-32 text-center" />
    </Scroll.Element>
  );
}

export default Contact;
