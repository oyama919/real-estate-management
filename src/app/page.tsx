import { JSXElementConstructor, ReactElement, useMemo } from "react";
import { ArticleRow } from "./components/ArticleRow";
import { title, info } from "./data/corp-wakabadai.json";
import { RentalInformation } from "./components/RentalInformation";
import { NestedArray, NestedList } from "./components/NestedList";

export default function Index() {
  const currentFullYear = useMemo(() => new Date().getFullYear(), []);
  const {
    closestStation,
    buildingAge,
    address,
    structure,
    scale,
    rents,
    remainingWork,
    repairRecord,
  } = info;
  return (
    <article className="flex flex-col gap-10 pb-12">
      <header className="flex flex-col">
        <h2 className="font-semibold text-xl grid grid-cols-[8rem_auto]">
          <span className="inline-block">物件名</span>
          <span className="font-normal">{title}</span>
        </h2>
      </header>
      <article className="flex flex-col gap-8">
        <ArticleRow
          title={"概要情報"}
          text={"物件概要情報を記載予定 TODO "}
          link={{
            path: "/foo",
            label: "物件情報詳細",
          }}
        />
        <ArticleRow title={"物件所在地"} text={address}>
          <a
            href={`https://www.google.com/maps/place/${address}`}
            target="_brank"
            className="text-base text-[--link-color] hover:opacity-80 transition-all"
          >
            Gppgle Mapで確認
          </a>
        </ArticleRow>
        <ArticleRow
          title={"最寄駅"}
          text={`${closestStation.name} ${closestStation.distance}`}
        />
        <ArticleRow
          title={"築年月"}
          text={`${buildingAge.label}（築 ${
            currentFullYear - buildingAge.year
          }年）`}
        />
        <ArticleRow title={"構造・規模"} text={`${structure}・${scale}`} />
        <ArticleRow title={"賃貸情報"}>
          <RentalInformation rents={rents} />
        </ArticleRow>
        <ArticleRow
          title={"残作業"}
          text={"残作業を記載予定 TODO "}
          link={{
            path: "/foo",
            label: "詳細",
          }}
        >
          <NestedList items={remainingWork} />
        </ArticleRow>
        <ArticleRow
          title={"作業記録詳細"}
          text={"作業記録詳細を記載予定 TODO "}
          link={{
            path: "/foo",
            label: "作業記録詳細",
          }}
        >
          <NestedList items={repairRecord} />
        </ArticleRow>
        <ArticleRow title={"CF"} text={"キャッシュフロー情報を記載予定 TODO "}>
          <p>TODO Table chart.js等</p>
        </ArticleRow>
      </article>
    </article>
  );
}
