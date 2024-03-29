import  { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";


const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
console.log("lets see data",data)

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