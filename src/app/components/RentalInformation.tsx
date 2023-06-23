import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  rents: {
    name: string;
    size: string;
    rent: string;
    isRented: boolean;
  }[];
};

export function RentalInformation({ rents }: Props) {
  return (
    <ul>
      {rents.map((rent) => (
        <li
          className="grid grid-cols-[200px_1fr_1fr_60px] gap-8 border-b-[1px] last:border-b-0 justify-between
        items-center py-4"
        >
          <div>{rent.name}</div>
          <div>
            <span className="font-semibold text-base mr-3">部屋面積</span>
            <span>{rent.size}</span>
          </div>
          <div>
            <span className="font-semibold text-base mr-3">賃料</span>
            <span>{rent.rent}</span>
          </div>
          {rent.isRented ? (
            <span className="w-14 h-max text-center text-xs font-semibold inline-block m-auto py-1 px-2 rounded-full text-sky-600 bg-sky-200">
              賃貸中
            </span>
          ) : (
            <span className="w-14 h-max text-center text-xs font-semibold inline-block m-auto py-1 px-2 rounded-full text-emerald-600 bg-emerald-200">
              空室
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
