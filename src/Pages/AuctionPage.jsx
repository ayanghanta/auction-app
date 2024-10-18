import { useQuery } from "@tanstack/react-query";
import styles from "./AuctionPage.module.css";
import { getAuctionProduct } from "../services/apiAuctions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import CollapsText from "../utils/CollapsText";
import AuctionStatus from "../features/auction/AuctionStatus";
import Speciality from "../features/auction/Speciality";
import CurrentBider from "../features/auction/CurrentBider";
import CreateBid from "../features/bid/CreateBid";

const IMAGE_URL = `http://localhost:3000/images/products`;

function AuctionPage() {
  const { id: productId } = useParams();
  const {
    data: auctionProduct,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["auctionProduct"],
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
  } = auctionProduct;

  return (
    <div className={styles.productContainer}>
      <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of ${title}`} />
      <div className={styles.productHader}>
        <h1>{title}</h1>
        <p>
          <CollapsText wordShown={30}>{description}</CollapsText>
        </p>
        <AuctionStatus basePrice={basePrice} status={auctionStatus} />
        <CurrentBider />
      </div>
      <div className={styles.ortherDtails}>
        <Speciality specilities={specilities} />
      </div>
      <div className="bidAction">
        <CreateBid />
      </div>
    </div>
  );
}

export default AuctionPage;
