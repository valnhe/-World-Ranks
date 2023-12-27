function SortBy({onSortedBy}) {

    const handleSortBy = (e) => {
        onSortedBy(e.target.value);
    }

    return (
        <article>
            <h3 className="text-[12px] font-bold text-[#6C727F] mb-3">Sort by</h3>
            <label className="text-[14px] font-semibold w-full border-[2px] rounded-xl px-3 py-2.5 border-[#282B30] flex place-items-center">
                <select name="SortBy" id="sortby" defaultValue={"population"} onChange={handleSortBy} className="w-full appearance-none bg-transparent text-[#D2D5DA]">
                    <option value="alphabetical" className="text-[#1A1B1D]">Alphabetical Order</option>
                    <option value="area" className="text-[#1A1B1D]">Area</option>
                    <option value="population" className="text-[#1A1B1D]">Population</option>
                </select>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6L8 10L4 6" stroke="#6C727F" strokeWidth="2"/>
                </svg>
            </label>
        </article>
    )
} export default SortBy;
