import GenresListItem from './GenresListItem';

function PhotoGenres({ slice }) {
  return (
    <>
      <div
        className="block-name text-5xl my-4 md:w-5/6 md:my-16 text-center"
        // eslint-disable-next-line camelcase
        id={slice.slice_type}
      >
        {slice.primary.title}
      </div>
      <div className="md:flex sm:w-3/4 container">
        {slice.items.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <GenresListItem key={item.image.url} {...item} />
        ))}
      </div>
      <div className="w-full h-32 text-center">content</div>
    </>
  );
}
export default PhotoGenres;
