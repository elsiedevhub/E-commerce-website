interface FilterSelectProps {
  options: string[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options }) => {
  return (
    <div className="border-b border-gray-300 pb-1">
      <select
        className="w-full bg-transparent text-gray-500 text-sm focus:outline-none focus:border-none focus:ring-0"
        aria-label="Filter options"
      >
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
