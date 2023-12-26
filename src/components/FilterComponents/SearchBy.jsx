import { useState } from 'react';

function SearchBy({ handleSearchBy }) {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchBy(search);
        e.target.reset();
        setSearch('');
    }

    return (
        <article className="bg-[#282B30] rounded-xl px-3 py-3 w-96 ">
            <form onSubmit={handleSubmit}>
                <label className='flex gap-2'>
                    <button type="submit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="7" stroke="#6C727F" strokeWidth="2"/>
                            <path d="M20 20L17 17" stroke="#6C727F" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <input type="text" name="search" placeholder="Search by Name, Region, Subregion" onChange={handleChange} value={search} className="bg-transparent font-medium placeholder:font-[450] text-[#6C727F] placeholder:text-[#6C727F] w-full"/>
                </label>
            </form>
        </article>
    )
}

export default SearchBy;
