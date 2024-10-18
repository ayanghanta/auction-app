import Button from "../../ui/buttons/Button";
import styles from "./CreateBid.module.css";
function CreateBid() {
  return (
    <div>
      <form>
        <input type="number" placeholder="Ammount" min="0" />
        <Button type="primary" size="big">
          BID For the Product
        </Button>
      </form>
    </div>
  );
}

export default CreateBid;
