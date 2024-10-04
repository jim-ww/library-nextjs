export default function RowsPerPageSelector({
  maxRowsPerPage,
  setMaxRowsPerPage,
  options,
}: {
  maxRowsPerPage: number;
  setMaxRowsPerPage: (maxRowsPerPage: number) => void;
  options: number[];
}) {
  return (
    <div className="flex items-center">
      <span>Rows per page:</span>
      <select
        className="border-2 shadow-sm p-1"
        value={maxRowsPerPage}
        onChange={(option) => setMaxRowsPerPage(+option.target.value)}
      >
        {options.map((num: number) => (
          <option key={num}>{num}</option>
        ))}
      </select>
    </div>
  );
}
