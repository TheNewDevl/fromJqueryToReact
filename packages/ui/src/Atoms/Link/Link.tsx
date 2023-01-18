import { Link as RouterLink } from "react-router-dom";
import { CSSProperties, ReactNode } from "react";

interface LinkProps {
  path: string;
  children?: ReactNode;
  styles?: CSSProperties;
}

/**
 * Displays a react router link
 * ## Usage
 * ```jsx
 *  <Link path="/" children={"default link"} />
 * ```
 */
export const Link = ({ path, children, styles }: LinkProps) => {
  return (
    <RouterLink style={{ padding: "0.5rem 1rem", width: "fit-content", ...styles }} to={path}>
      {children && children}
    </RouterLink>
  );
};

/** Created by carlos on 13/01/2023 */
