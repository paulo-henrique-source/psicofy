import * as Styles from "./styles";
import React from "react";
import { ActiveTab } from "../../models/enumerators";

interface IHeaderProps {
    handleChangeTab: (number: ActiveTab) => void;
}

export const Header: React.FC<IHeaderProps> = ({ handleChangeTab }) => {
    return (
        <Styles.Wrapper>
            <div className="items">
                <div
                    className="item"
                    onClick={() => handleChangeTab(ActiveTab.HOME)}
                >
                    Home
                </div>
                <div
                    className="item"
                    onClick={() => handleChangeTab(ActiveTab.ABOUT)}
                >
                    Sobre
                </div>
                <div
                    className="item"
                    onClick={() => handleChangeTab(ActiveTab.SERVICES)}
                >
                    Serviços
                </div>
                <div
                    className="item"
                    onClick={() => handleChangeTab(ActiveTab.SCHEDULE)}
                >
                    Agenda
                </div>
            </div>
        </Styles.Wrapper>
    );
};
