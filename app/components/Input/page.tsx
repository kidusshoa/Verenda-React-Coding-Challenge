import { useState } from "react";

const page = ({
  onSubmit,
  columnId,
}: {
  onSubmit: (input: string, columnId: string) => void;
  columnId: string;
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input, columnId);
    setInput("");
  };

  return (
    <div className="flex gap-[10px]">
      <input
        type="text"
        className="p-[10px] rounded-lg border-solid border-[#ddd] border-[2px]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="rounded-lg p-5 bg-[#2563eb] text-white"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default page;
