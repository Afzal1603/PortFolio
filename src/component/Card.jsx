export const Card = ({ name, url, img, content }) => {
  return (
    <div className="w-70 h-96 hover:bg-gradient-to-br from-zinc-800 via-emerald-900 to-zinc-800 backdrop-blur-xl border  border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <a href={url}>
        <img
          className="w-full h-48 object-cover rounded-t-lg transition duration-300 hover:opacity-90 cove"
          src={img}
          alt="Technology"
        />
      </a>
      <div className="p-5">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 hover:text-emerald-500">
            {name}
          </h5>
        </a>
        <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {content}
        </p>
      </div>
    </div>
  );
};
