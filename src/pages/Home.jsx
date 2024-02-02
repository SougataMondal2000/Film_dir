import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lg:p-20 md:p-10 p-5 gap-y-6 lg:grid lg:grid-cols-5 md:grid grid-cols-3 flex flex-wrap justify-center mx-auto md:h-[100vh]">
      {show?.map((item) => (
        <Card
          key={item?.show?.id}
          image={item?.show?.image?.original}
          title={item?.show?.name}
          showDetailUrl={`showdetails/${item?.show?.id}`}
          description={item?.show?.summary.slice(0, 80).replace(/<[^>]*>/g, "")}
          genres={item?.show?.genres}
        />
      ))}
    </div>
  );
};

export default Home;
