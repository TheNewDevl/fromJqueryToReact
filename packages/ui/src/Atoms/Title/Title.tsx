import { ReactNode } from "react";

interface TitleProps {
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  children: ReactNode;
  fontSize?: string;
  margin?: number | string;
  padding?: number | string;
  color?: string;
  fontWeight?: string;
  marginBottom?: string;
  textAlign?: "center" | "left" | "right";
}

/**
 * @param level - The level of the title (Default: 1)
 * @param children - The content of the title (Text or HTML)
 * @param rest - The rest of the props
 */
export const Title = ({ level = "1", children, ...rest }: TitleProps) => {
  let Element = "h1" as keyof JSX.IntrinsicElements;
  if (["1", "2", "3", "4", "5", "6"].includes(level)) {
    Element = `h${level}` as keyof JSX.IntrinsicElements;
  }

  return <Element style={{ ...rest }}>{children}</Element>;
};

/** Created by carlos on 13/01/2023 */
