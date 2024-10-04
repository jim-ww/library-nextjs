import type { ChangeEvent } from 'react';

export default function DatePicker({
  title,
  date,
  setDate,
}: {
  title: string;
  date: string;
  setDate: (newDate: string) => void;
}) {
  const handleSetDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <span>{title}</span>
      <input
        className="border-zinc-500 border-1 shadow-sm p-1 rounded"
        type="date"
        value={date}
        onChange={handleSetDate}
      />
    </div>
  );
}
