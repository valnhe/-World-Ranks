import { useState } from 'react';
import { getWorldRank } from '../services/worldrank.js'

import SearchBy from './FilterComponents/SearchBy.jsx';
import Region from './FilterComponents/Region.jsx';
import Status from './FilterComponents/Status.jsx';
import SortBy from './FilterComponents/SortBy.jsx';

import CountriesCard from './CountriesCard.jsx';

const data = await getWorldRank();

function FilteredCountries() {

    const [sortedCountries, setSortedCountries] = useState('population');
    const [name, setName] = useState('');
    const [region, setRegion] = useState([]);
    const [subregion, setSubregion] = useState('');
    const [independent, setIndependent] = useState(false);
    const [unMember, setUnMember] = useState(false);

    const handleSearchBy = (search) => {
        if (independent === true) {
            setIndependent(false);
        }
        if (unMember === true) {
            setUnMember(false);
        }

         if (!(region.length === 1 && region[0] === search)) {
            setRegion([search.toLowerCase()]);
        }

        if (name !== search) {
            setName(search);
        }

        if (subregion !== search) {
            setSubregion(search);
        }

    }
    

    const filteredCountries = data.filter((country) => {
        const passRegionFilter = region.length === 0 || region.includes(country.region.toLowerCase()) || region.includes(country.region) 
        const passIndependenceFilter = !independent || country.independent;
        const passUNMemberFilter = !unMember || country.unMember;
        const passNameFilter = name === '' ||  country.name.common.toLowerCase() === name.toLowerCase() || country.name.official.toLowerCase() === name.toLowerCase();
        const passSubregionFilter = subregion === '' || country.subregion?.toLowerCase() === subregion?.toLowerCase();

        return passIndependenceFilter && passUNMemberFilter && (passRegionFilter || passNameFilter || passSubregionFilter) ;
    });

    return (
        <main className="bg-[#1C1D1F] rounded-0 lg:rounded-lg p-8 mx-0 lg:mx-[3%] -mt-[60px] mb-20 border-[1px] border-[#282B30]">
            <header className='flex justify-center gap-2 sm:gap-0 sm:justify-between flex-wrap mb-8'>
                <h3 className='text-[#6C727F] font-bold'>Found {filteredCountries .length} Countries</h3>
                <SearchBy handleSearchBy={handleSearchBy}/>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                
                <section>
                    <SortBy/>
                    <Region setFilter={setRegion}/>
                    <Status setUNFilter={setUnMember} setINFilter={setIndependent} independent={independent} unMember={unMember}/>
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
                    
                    <section className='text-[#D2D5DA] text-[16px] font-mediums'>
                        {
                            filteredCountries.map((country) => {
                                return (
                                    <CountriesCard key={country.cca2} code={country.cca2} flag={country.flags.png} name={country.name.common} population={country.population.toLocaleString()} area={country.area.toLocaleString()} region={country.region} />
                                )
                            })
                        }
                    </section>

                </article>
                
            </main>
        </main>
    )
} export default FilteredCountries;