import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  title: string;
  text?: string;
  children?: JSX.Element;
  link?: {
    path: string;
    label: string;
  };
};

export function ArticleRow({ title, text, children, link }: Props) {
  return (
    <div className="grid grid-cols-[8rem_auto]">
      <h3 className="font-semibold mr-2 text-lg">{title}</h3>
      <div>
        {text && <p>{text}</p>}
        {children}
        {link && (
          // underlineにtransition効かない
          <Link
            href={link.path}
            className="text-base text-gray-800 underline hover:no-underline"
          >
            {link.label}
          </Link>
        )}
      </div>
    </div>
  );
}
