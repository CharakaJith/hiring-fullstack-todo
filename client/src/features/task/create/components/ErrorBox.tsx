interface ErrorBoxProps {
  messages: string[];
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ messages }) => {
  if (!messages.length) return null;

  return (
    <>
      {messages.map((msg, i) => (
        <div key={i} className="w-full py-2 bg-red-500 text-white rounded-md text-sm flex items-center justify-center">
          {msg}
        </div>
      ))}
    </>
  );
};

export default ErrorBox;
