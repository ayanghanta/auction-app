import { IoCreateOutline, IoTrash } from "react-icons/io5";
import Menus from "./Menu";
import Modal from "./Modal";
import ConfirmDelete from "./confirmDelete";
import { useDeleteAddress } from "../features/user/useDeleteAddress";

function AddressEditOptions({ addressId, onEdit }) {
  const { isLoading, deleteAddress } = useDeleteAddress();
  return (
    <Modal>
      <Menus.Menu>
        <Menus.MenusToggle id={addressId} />
        <Menus.List id={addressId}>
          <Modal.Button id="delete">
            <Menus.Button>
              <IoTrash />
              <span>Delete</span>
            </Menus.Button>
          </Modal.Button>
          <Menus.Button onClick={() => onEdit((edit) => !edit)}>
            <IoCreateOutline />
            <span>Edit</span>
          </Menus.Button>
        </Menus.List>

        <Modal.Window id="delete">
          <ConfirmDelete
            resourceName="Address"
            onDelete={() => deleteAddress(addressId)}
            disabled={isLoading}
          />
        </Modal.Window>
      </Menus.Menu>
    </Modal>
  );
}

export default AddressEditOptions;
