import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import styles from "./AuctionPage.module.css";
import { getAuctionProduct } from "../services/apiAuctions";
import Spinner from "../ui/Spinner";
import CollapsText from "../utils/CollapsText";
import AuctionStatus from "../features/auction/AuctionStatus";
import CurrentBider from "../features/auction/CurrentBider";
import { BASE_URL } from "../constant";
import Slider from "../ui/Slider";
import ProductSpecifications from "../ui/ProductSpecifications";
import ProductAuthDetails from "../ui/ProductAuthDetails";
import SellerOverview from "../ui/SellerOverview";

const IMAGE_URL = `${BASE_URL}/images/products`;

function AuctionPage() {
  const { id: productId } = useParams();
  const { data: auctionProduct, isLoading } = useQuery({
    queryKey: ["auctionProduct", productId],
    queryFn: () => getAuctionProduct(productId),
  });

  if (isLoading) return <Spinner />;

  const {
    coverImage,
    title,
    description,
    basePrice,
    timePeriod,
    originCountry,
    shippingTime,
    auctionsEndsAt,
    summary,
    historicalSignificance,
    height,
    width,
    depth,
    weight,
    material,
    overallCondition,
    certificateNumber,
    verifiedBy,
    legalDocument,
  } = auctionProduct;

  return (
    <div className={styles.productContainer}>
      {/* <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of ${title}`} /> */}
      <Slider />
      <div className={styles.productHader}>
        <h1>{title}</h1>
        <p>
          <CollapsText wordShown={30}>{summary}</CollapsText>
        </p>
        <AuctionStatus
          basePrice={basePrice}
          shippingTime={shippingTime}
          auctionsEndsAt={auctionsEndsAt}
        />
        <CurrentBider />
      </div>
      <div className={styles.ortherDtails}>
        <div>
          <p className={styles.title}>Description:</p>
          <p className={styles.descriptionText}>
            <CollapsText wordShown={30}>{description}</CollapsText>
          </p>
        </div>
        <div className={styles.sideCondiner}>
          <div>
            <p className={styles.title}>Specifications:</p>
            <ProductSpecifications
              originCountry={originCountry}
              timePeriod={timePeriod}
              condition={overallCondition}
              meterial={material}
              dimentions={{ height, weight, depth, width }}
            />
          </div>
          <div className={styles.sellerContainer}>
            <div>
              <p className={styles.title}>Historical Significance:</p>
              <p className={styles.descriptionText}>{historicalSignificance}</p>
            </div>
            <SellerOverview
              sellerImage={"/users/default-user.jpg"}
              sellerName="Ayan ghanta"
              productsSold={7}
            />
          </div>
        </div>
        <div>
          <p className={styles.title}>Authentication</p>
          <ProductAuthDetails
            certificateNo={certificateNumber}
            verifiedBy={verifiedBy}
            legalDocument={legalDocument}
          />
        </div>

        <div>ORTHER DETAILS</div>
      </div>
    </div>
  );
}

export default AuctionPage;
