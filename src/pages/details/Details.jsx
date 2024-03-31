import { useParams } from "react-router-dom";
import "./style.scss";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "../../components/cast/Cast";
import useFetch from "../../hooks/useFetch";
import VideosSection from "./videosSection/VideosSection";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
    </div>
  );
};

export default Details;
