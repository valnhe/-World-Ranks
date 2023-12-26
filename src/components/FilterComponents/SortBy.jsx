function SortBy({onSortedBy}) {

    const handleSortBy = (e) => {
        onSortedBy(e.target.value);
    }

    return (
        <article>
            <h3 className="text-[12px] font-bold text-[#6C727F] mb-3">Sort by</h3>
            <section className="text-[14px] font-semibold">
                <select name="SortBy" id="sortby" onChange={handleSortBy}>
                    <option value="population">Population</option>
                    <option value="alphabetical">Alphabetical Order</option>
                    <option value="area">Area</option>
                </select>
                
            </section>
        </article>
    )
} export default SortBy;