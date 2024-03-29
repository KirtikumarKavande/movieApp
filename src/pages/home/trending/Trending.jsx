import  { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");


    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
        </div>
    );
};

export default Trending;