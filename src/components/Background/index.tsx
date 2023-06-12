import React from "react";
import * as Styles from "./styles";
import { ReactNode } from "react";

interface IBackgroundProps {
    children: ReactNode;
}

export const Background: React.FC<IBackgroundProps> = ({ children }) => {
    return <Styles.Wrapper>{children}</Styles.Wrapper>;
};
