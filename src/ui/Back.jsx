import { useNavigate } from "react-router-dom";
import Button from "./buttons/Button";

function Back() {
  const navigate = useNavigate();
  return (
    <Button size="mid" type="secondary" onClick={() => navigate(-1)}>
      &larr;Back
    </Button>
  );
}

export default Back;
