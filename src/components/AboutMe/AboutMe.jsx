import { PrismicText } from '@prismicio/react';
import { Fade } from 'react-awesome-reveal';
import AboutMePhoto from './AboutMePhoto';

function AboutMe({ slice }) {
  return (
    <>
      <div
        className="sm:w-5/6 text-5xl md:my-16 text-center"
        id={slice.slice_type}
      >
        <Fade cascade duration={100}>
          {slice.primary.title}
        </Fade>
      </div>
      <div className="md:w-1/2 grid justify-items-center p-2">
        <div className="shadow-border shadow-border-right">
          <AboutMePhoto photo={slice.primary.optional_image} />
        </div>
      </div>
      <div className="md:w-1/2 grid justify-items-left p-2">
        <div className="md:w-3/4 md:border-4 border-black">
          <div className="md:border-0 border-4 border-black">
            <div className="justify-self-start pt-8 px-8 text-xl text-black">
              {slice && <PrismicText field={slice.primary.greetings} />}
            </div>
            <div className="justify-self-start md:pb-0 pb-8 px-8 text-xl text-black">
              {slice && <PrismicText field={slice.primary.description} />}
            </div>
          </div>
          <div className="md:w-1/2 py-3 sm:hidden">
            <div className="shadow-border">
              <AboutMePhoto photo={slice.primary.image_side_two} />
            </div>
          </div>
          <div className="justify-self-start md:pt-0 md:mt-0 mt-8 pt-8 pb-8 px-8 md:border-0 border-4 border-black text-xl text-black">
            {slice && (
              <PrismicText field={slice.primary.continued_description} />
            )}
          </div>
        </div>
        <div className="md:w-1/2 pt-6 sm:block hidden">
          <div className="shadow-border">
            <AboutMePhoto photo={slice.primary.image_side_two} />
          </div>
        </div>
      </div>
      <div className="w-full h-32 text-center" />
    </>
  );
}

export default AboutMe;
