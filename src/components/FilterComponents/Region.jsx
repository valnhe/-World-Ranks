function Region ({ actualRegions , onFilter , onSearch }) {

    const handleRegionToggle = (region) => {
        const updatedRegions = actualRegions.includes(region.toLowerCase())
          ? actualRegions.filter((r) => r !== region)
          : [...actualRegions, region];
        onFilter(updatedRegions);
        onSearch('');
      };

    return (
        <article className="mt-7">
            <h3 className="text-[12px] font-bold text-[#6C727F] mb-3">Region</h3>
            <section className="flex flex-wrap gap-4 text-[14px] font-semibold">
                <button className={actualRegions.includes('americas') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('americas')}>Americas</button>
                <button className={actualRegions.includes('antarctic') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('antarctic')}>Antarctic</button>
                <button className={actualRegions.includes('africa') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('africa')}>Africa</button>
                <button className={actualRegions.includes('asia') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('asia')}>Asia</button>
                <button className={actualRegions.includes('europe') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('europe')}>Europe</button>
                <button className={actualRegions.includes('oceania') ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={() => handleRegionToggle('oceania')}>Oceania</button>
            </section>
        </article>
    )
} export default Region;