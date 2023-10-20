function InvalidInputMessage({ message }: { message: string | undefined }) {
  return <div className="text-red-200 text-sm">{message}</div>;
}

export default InvalidInputMessage;
