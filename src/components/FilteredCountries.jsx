import { useState } from 'react';
import { getWorldRank } from '../services/worldrank.js'

import SearchBy from './FilterComponents/SearchBy.jsx';
import Region from './FilterComponents/Region.jsx';
import Status from './FilterComponents/Status.jsx';
import SortBy from './FilterComponents/SortBy.jsx';

import CountriesCard from './CountriesCard.jsx';
import CountriesList from './Pagination/CountriesList.jsx';
import Pagination from './Pagination/Pagination.jsx';

const data = await getWorldRank();

function FilteredCountries() {

    const [sortedby, setSortedBy] = useState('population');
    
    const [region, setRegion] = useState([]);
    const [independent, setIndependent] = useState(false);
    const [unMember, setUnMember] = useState(false);
    
    const [search, setSearch] = useState('');


    const handleSearchBy = (s) => {
        if (independent === true) {
            setIndependent(false);
        }
        if (unMember === true) {
            setUnMember(false);
        }

        if (region.length !== 0 ) {
            setRegion([]);
        }

        if (search !== s) {
            setSearch(s);
        }

    }

    const filteredCountries = data.filter((country) => {

        const passIndependenceFilter = !independent || country.independent;
        const passUNMemberFilter = !unMember || country.unMember;

        const passSearchFilter = search === '' || 
                                country.name.common.toLowerCase().includes(search.toLowerCase()) || 
                                country.name.official.toLowerCase().includes(search.toLowerCase()) || 
                                country.subregion?.toLowerCase() === search?.toLowerCase() ||
                                search === country.region.toLowerCase();

        if (search !== '') {
            return passSearchFilter && passIndependenceFilter && passUNMemberFilter;

        }

        const passRegionFilter = region.length === 0 || region.includes(country.region.toLowerCase())
        
        return passIndependenceFilter && passUNMemberFilter &&  passRegionFilter;
    });

    const sortedCountries = sortedby === "population" ? filteredCountries.sort((a, b) => b.population - a.population) : sortedby === "area" ? filteredCountries.sort((a, b) => b.area - a.area) : filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    return (
        <main className="bg-[#1C1D1F] rounded-0 lg:rounded-lg p-8 mx-0 lg:mx-[3%] -mt-[60px] mb-20 border-[1px] border-[#282B30]">
            <header className='flex justify-center gap-2 sm:gap-0 sm:justify-between flex-wrap mb-8'>
                <h3 className='text-[#6C727F] font-bold'>Found {sortedCountries.length} Countries</h3>
                <SearchBy handleSearchBy={handleSearchBy}/>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                
                <section>
                    <SortBy onSortedBy={setSortedBy}/>
                    <Region onFilter={setRegion} actualRegions = {region} onSearch={setSearch}/>
                    <Status onUNFilter={setUnMember} onINFilter={setIndependent} independent={independent} unMember={unMember}/>
                </section>

                <article className='col-span-3' >
                    <header className='grid grid-cols-5 sm:grid-cols-7 xl:grid-cols-9 my-3 text-[12px] font-bold text-[#6C727F]'>
                        <p>Flag</p>
                        <p className='col-span-2'>Name</p>
                        <p className='col-span-2'>Population</p>
                        <p className='hidden sm:block col-span-2'>Area (km<sup>2</sup>)</p>
                        <p className='hidden xl:block col-span-2'>Region</p>
                    </header>

                    <hr className='border-1 border-[#6C727F]'/>
                    
                    <section className='text-[#D2D5DA] text-[16px] font-medium flex flex-col'>
                        <CountriesList all={sortedCountries}/>
                    </section>  
                </article>
                
            </main>
        </main>
    )
} export default FilteredCountries;