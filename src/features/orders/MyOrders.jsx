import styles from "./MyOrders.module.css";
import Back from "../../ui/Back";
import { useGetOrders } from "./useGetOrders";
import Spinner from "../../ui/Spinner";
import EmptyPage from "../../ui/EmptyPage";
import OrderCard from "./OrderCard";

function MyOrders() {
  const { data, isLoading } = useGetOrders();

  if (isLoading) return <Spinner />;

  if (!data?.orders || data.orders.length === 0)
    return <EmptyPage resourceName="Order" />;

  return (
    <div className={styles.container}>
      <Back />
      <h2>Your orders</h2>
      <div className={styles.orderBoxContainer}>
        {data.orders.map((order) => (
          <OrderCard order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
