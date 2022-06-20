import { animateScroll as scroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import HeroPhoto from './HeroPhoto';

function scrollToBottom() {
  scroll.scrollToBottom();
}

function SiteName({ slice }) {
  return (
    <>
      <div className="md:w-1/2 py-4" id={slice.slice_type}>
        <div className="title w-full md:w-3/4 grid justify-items-center">
          <div className="landing-name my-4 text-4xl sm:mx-0 mx-4">
            <Fade cascade duration={100}>
              {slice.primary.sitename}
            </Fade>
          </div>
          <div className="w-full p-4">
            <div className="grid justify-items-center">
              <div className="name text-6xl">{slice.primary.name}</div>
            </div>
            <div className="grid md:justify-items-end justify-items-center">
              <div className="soname text-6xl">{slice.primary.surname}</div>
            </div>
            <div className="grid justify-items-end">
              <div className="slogan text-xl p-8">
                {slice.primary.smalltext}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full mt-8 grid h-16">
          <button
            className="py-4 px-8 rounded border-2 border-black text-xl text-center justify-self-center hover:bg-black hover:text-white"
            onClick={scrollToBottom}
            type="button"
          >
            <p className="mx-4">Записаться</p>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 grid p-4">
        {'loaded' && <HeroPhoto photo={slice.primary.photo} />}
      </div>
      <div className="w-full h-32 text-center" />
    </>
  );
}

export default SiteName;
