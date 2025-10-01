import WarningIcon from '../icons/WarningIcon';

interface InvalidInputMessageProps {
  message: string;
}

function InvalidInputMessage({ message }: InvalidInputMessageProps) {
  return (
    <div className="invalid-input-message">
      <WarningIcon />
      <span>{message}</span>
    </div>
  );
}

export default InvalidInputMessage;
