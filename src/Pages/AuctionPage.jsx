import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import styles from "./AuctionPage.module.css";
import { getAuctionProduct } from "../services/apiAuctions";
import Spinner from "../ui/Spinner";
import CollapsText from "../utils/CollapsText";
import AuctionStatus from "../features/auction/AuctionStatus";
import Speciality from "../features/auction/Speciality";
import CurrentBider from "../features/auction/CurrentBider";
import CreateBid from "../features/bid/CreateBid";
import { BASE_URL } from "../constant";
import Slider from "../ui/Slider";

const IMAGE_URL = `${BASE_URL}/images/products`;

function AuctionPage() {
  const { id: productId } = useParams();
  const {
    data: auctionProduct,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["auctionProduct", productId],
    queryFn: () => getAuctionProduct(productId),
  });

  if (isLoading) return <Spinner />;

  const {
    coverImage,
    title,
    description,
    basePrice,
    status: auctionStatus,
    specilities,
    timePeriod,
    originCountry,
  } = auctionProduct;

  return (
    <div className={styles.productContainer}>
      {/* <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of ${title}`} /> */}
      <Slider />
      <div className={styles.productHader}>
        <h1>{title}</h1>
        <p>
          <CollapsText wordShown={30}>{description}</CollapsText>
        </p>
        <AuctionStatus basePrice={basePrice} status={auctionStatus} />
        <CurrentBider />
      </div>
      <div className={styles.ortherDtails}>
        <Speciality
          specilities={specilities}
          timePeriod={timePeriod}
          originCountry={originCountry}
        />
      </div>
      <div className="bidAction">
        <CreateBid />
      </div>
    </div>
  );
}

export default AuctionPage;
