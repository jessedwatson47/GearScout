import {siSteam, siTwitch, siYoutube, siDiscord, siX} from "simple-icons";
import BrandIcon from "./BrandIcon";

function BioSection({username, type, country, age, gripType, padType, topGenre, img}) {
  return (
    <div className="flex justify-between gap-8 w-full rounded-lg bg-zinc-900 border-2 border-zinc-800 p-4 items-center">
      <div className="size-50 bg-zinc-800 rounded-full overflow-hidden items-center shrink-0 border-1 border-pink-500">
        <img className="w-full h-full object-contain object-bottom" src={img} />
      </div>

      <div className="h-full w-full flex flex-col gap-8">
        <h1 className="text-zinc-50 font-bold text-3xl">{username}</h1>
        <table className="border-collapse w-full">
          <tbody className="table-fixed [&_th]:text-zinc-500 [&_th]:font-normal [&_th]:text-left [&_th]:w-24 text-sm [&_td]:border-b [&_td]:border-zinc-800 [&_th]:py-2 [&_td]:py-2 [&_td]:pr-8 [&_th]:border-b [&_th]:border-zinc-800 text-zinc-50 ">
            <tr>
              <th>Class</th>
              <td>{type}</td>

              <th>Country</th>
              <td>{country}</td>

              <th>Age</th>
              <td>{age}</td>
            </tr>
            <tr>
              <th>Grip Type</th>
              <td>{gripType}</td>

              <th>Pad Type</th>
              <td>{padType}</td>
              <th>Top Genre</th>
              <td>{topGenre}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-8 cursor-pointer text-zinc-200 **:hover:text-zinc-100">
        <BrandIcon icon={siSteam} />
        <BrandIcon icon={siYoutube} />
        <BrandIcon icon={siDiscord} />
        <BrandIcon icon={siX} />
        <BrandIcon icon={siTwitch} />
      </div>
    </div>
  );
}

export default BioSection;
