import type { NextPage } from "next";
import { HeadComponent } from "../components/Head";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Background } from "../components/Background";
import { useState } from "react";
import { ActiveTab } from "../models/enumerators";
import { About } from "../components/About";

const Main: NextPage = () => {
    const [activeTab, setActiveTab] = useState(ActiveTab.HOME);

    const handleChangeTab = (number: ActiveTab) => {
        setActiveTab(number);
    };

    return (
        <div className="mainWrapper">
            <HeadComponent />
            <Background>
                <Header handleChangeTab={handleChangeTab} />
                {/* {activeTab === ActiveTab.HOME && <Home />}
                {activeTab === ActiveTab.ABOUT && <About />} */}
                <div className="container">
                    <Home />
                    <About />
                </div>
            </Background>
        </div>
    );
};

export default Main;
