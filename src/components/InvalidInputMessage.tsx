import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InvalidInputMessageProps {
  message: string;
}

function InvalidInputMessage({ message }: InvalidInputMessageProps) {
  return (
    <div className="invalid-input-message">
      <FontAwesomeIcon icon={faCircleExclamation} />
      <span>{message}</span>
    </div>
  );
}

export default InvalidInputMessage;
