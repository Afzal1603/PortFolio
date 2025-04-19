// export const Card = ({ name, url, img, content }) => {
//   return (
//     <div className="w-70 h-96 hover:bg-gradient-to-br from-zinc-800 via-emerald-900 to-zinc-800 backdrop-blur-xl border  border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
//       <a href={url}>
//         <img
//           className="w-full h-48 object-cover rounded-t-lg transition duration-300 hover:opacity-90 cove"
//           src={img}
//           alt="Technology"
//         />
//       </a>
//       <div className="p-5">
//         <a href={url}>
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 hover:text-emerald-500">
//             {name}
//           </h5>
//         </a>
//         <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
//           {content}
//         </p>
//       </div>
//     </div>
//   );
// };
import { ExternalLink } from "lucide-react";
export const Card = ({ name, url, img, content }) => {
  return (
    <div className="group  relative w-full md:max-w-[380px] border h-[380px] overflow-hidden hover:border-2 border-teal-500 rounded-lg">
      <a target="_blank" rel="noopener" href={url}>
        <img
          src={img}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </a>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg text-white font-semibold line-clamp-2">{name}</p>
        <span className="italic text-sm text-teal-400 mb-0.5">{content}</span>
        <a
          rel="noopener"
          target="_blank"
          href={url}
          className="z-10 text-xl font-semibold group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md rounded-tl-none m-2"
        >
          <span className="flex justify-center items-center gap-1">
            Try it <ExternalLink />
          </span>
        </a>
      </div>
    </div>
  );
};
