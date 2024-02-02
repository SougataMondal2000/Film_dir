import { useEffect, useState } from "react";
import ShowDetails from "../components/ShowDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowDetailsPage = () => {
  const [showDetail, setShowDetail] = useState([]);
  const id = useParams();
  const showId = Number(id.showId);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShowDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [showId]);

  return (
    <div>
      {showDetail?.map(
        (item) =>
          item?.show?.id === showId && (
            <ShowDetails
              key={item?.show?.id}
              image={item?.show?.image?.original}
              title={item?.show?.name}
              description={item?.show?.summary.replace(/<[^>]*>/g, "")}
              genres={item?.show?.genres}
              language={item?.show?.language}
              showDetailUrl={item?.show?.officialSite}
              rating={item?.show?.rating?.average}
              status={item?.show?.status}
            />
          )
      )}
    </div>
  );
};

export default ShowDetailsPage;
