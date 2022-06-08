import { SliceZone, usePrismicDocumentByUID } from '@prismicio/react';
import { SiteName } from '../SiteName';
import { AboutMe } from '../AboutMe';
import { PhotoGenres } from '../PhotoGenres';
import { PriceList } from '../PriceList';
import { Contact } from '../Contact';
import { MenuList } from '../MenuList';
import { Footer } from '../Footer';
import './shadow-border.css';

function App() {
  const [content] = usePrismicDocumentByUID('homepage', 'main');
  console.log(content);
  return (
    <>
      <div className="container mx-auto px-2">
        <MenuList />
        <div className="h-24" />
        <div className="relative flex flex-wrap justify-center my-4">
          {content && (
            <SliceZone
              slices={content.data.body}
              components={{
                sitename: SiteName,
                alternate_grid: AboutMe,
                cards_carousel: PhotoGenres,
                cards_carousel_1: PriceList,
                contacts: Contact,
              }}
            />
          )}
        </div>
      </div>
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
