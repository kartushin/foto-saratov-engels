import * as Scroll from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { PrismicLink } from '@prismicio/react';
import { FaInstagram, FaVk } from 'react-icons/fa';
import ContactPhoto from './ContactPhoto';

function Contact({ slice }) {
  return (
    <>
      <div className="sm:w-5/6 text-5xl md:my-16 text-center">
        <Fade cascade duration={100}>
          {slice.primary.title}
        </Fade>
      </div>
      <div className="flex w-full">
        <div className="md:w-1/2 grid justify-items-center p-4">
          <div className="shadow-border shadow-border-up">
            <ContactPhoto photo={slice.primary.firstphoto} />
          </div>
        </div>
        <div className="md:w-1/2 grid justify-items-left p-4">
          <div className="md:w-3/4 md:border-4 border-black">
            <div className="md:border-0 border-4 border-black">
              <div className="justify-self-start py-8 px-8 text-xl text-black">
                {slice.primary.description}
              </div>
            </div>
            <Scroll.Element name={slice.slice_type}>
              <div className="justify-self-start md:pt-0 md:mt-0 mt-8 pt-8 pb-8 px-8 md:border-0 border-4 border-black text-xl text-black">
                <PrismicLink field={slice.primary.instagram}>
                  <div className="flex items-center">
                    <div className="icons">
                      <FaInstagram />
                    </div>
                    <div className="px-2">{slice.primary.linktitleinst}</div>
                  </div>
                </PrismicLink>
              </div>
              <div className="justify-self-start md:pt-0 md:mt-0 mt-8 pt-8 pb-8 px-8 md:border-0 border-4 border-black text-xl text-black">
                <PrismicLink field={slice.primary.vkontakte}>
                  <div className="flex items-center">
                    <div className="icons">
                      <FaVk />
                    </div>
                    <div className="px-2">{slice.primary.linktitlevk}</div>
                  </div>
                </PrismicLink>
              </div>
            </Scroll.Element>
          </div>
          <div className="md:w-1/2 pt-6 sm:block hidden">
            <div className="shadow-border">
              <ContactPhoto photo={slice.primary.secondphoto} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 text-center" />
    </>
  );
}

export default Contact;
