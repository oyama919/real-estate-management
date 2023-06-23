import { ReactElement } from "react";

export type NestedArray = Array<{
  [key: string]: string | NestedArray | undefined;
}>;

interface NestedListProps {
  items: NestedArray;
  renderParentList?: (children: ReactElement) => ReactElement;
  renderList?: (children: ReactElement) => ReactElement;
  renderItem?: (key: string, children: ReactElement) => ReactElement;
  renderListWrapItem?: (key: string, children: ReactElement) => ReactElement;
}
interface RenderItemsProps {
  items: NestedArray;
  renderList: (children: ReactElement) => ReactElement;
  renderItem: (key: string, children: ReactElement) => ReactElement;
}

// Default Children
export const defaultRenderParentList = (children: ReactElement) => (
  <ul className="flex flex-col gap-2">{children}</ul>
);
export const defaultRenderList = (children: ReactElement) => (
  <ul className="flex flex-col gap-2 pl-8">{children}</ul>
);
export const defaultRenderItem = (key: string, children: ReactElement) => (
  <li className="flex flex-col gap-3 pl-8" key={key}>
    {children}
  </li>
);
export const defaultRenderListWrapItem = (
  key: string,
  children: ReactElement
) => (
  <li className="flex flex-col" key={key}>
    {children}
  </li>
);

export const NestedList = ({
  items,
  renderParentList = defaultRenderParentList,
  renderList = defaultRenderList,
  renderItem = defaultRenderItem,
  renderListWrapItem = defaultRenderListWrapItem,
}: NestedListProps) => {
  const renderItems = ({
    items,
    renderList,
    renderItem,
  }: RenderItemsProps): ReactElement[] => {
    let i = 0;
    return items.map((item, index): ReactElement => {
      const arr = Object.keys(item).map((itm, objectIndex) => {
        // ++i;
        return Array.isArray(item[itm])
          ? renderListWrapItem(
              itm,
              <>
                {renderList(
                  <>
                    {itm}
                    {renderItems({
                      items: item[itm] as NestedArray,
                      renderList,
                      renderItem,
                    })}
                  </>
                )}
              </>
            )
          : renderItem(
              `key-${index}-${objectIndex}-${item[itm]}`,
              <span className="grid grid-cols-[auto_auto_50px] gap-8 hover:bg-slate-100 px-2 py-1 border-radius-1">
                <span>{itm}</span>
                <span>{item[itm] ? String(item[itm]) : ""}</span>
                <input
                  className="ml-auto hover:cursor-pointer"
                  type="checkbox"
                />
              </span>
            );
      });
      return <>{arr}</>;
    });
  };
  return renderParentList(
    <>{renderItems({ items, renderList, renderItem })}</>
  );
};
