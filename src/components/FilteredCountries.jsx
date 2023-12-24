import { useState } from 'react';
import Region from './FilterComponents/Region.jsx';
import Status from './FilterComponents/Status.jsx';
import SortBy from './FilterComponents/SortBy.jsx';

const data = await fetch('https://restcountries.com/v3.1/all').then((response) =>
  response.json()
);

function FilteredCountries() {

    const [sortedCountries, setSortedCountries] = useState('population');
    const [region, setRegion] = useState([]);
    const [independent, setIndependent] = useState(false);
    const [unMember, setUnMember] = useState(false);

    const filteredCountries = data.filter((country) => {
        const passRegionFilter = region.length === 0 || region.includes(country.region) 
        const passIndependenceFilter = !independent || country.independent;
        const passUNMemberFilter = !unMember || country.unMember;
      
        return passRegionFilter && passIndependenceFilter && passUNMemberFilter;
    });

    return (
        <>
            <header className='flex justify-between'>
                <h3 className='text-[#6C727F] font-bold'>Found {filteredCountries .length} Countries</h3>
                <h3 className='text-white'>jojos</h3>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                
                <section>
                    <SortBy/>
                    <Region setFilter={setRegion}/>
                    <Status setUNFilter={setUnMember} setINFilter={setIndependent}/>
                </section>

                <article className='col-span-3' >
                    <header className='grid grid-cols-7 xl:grid-cols-9 my-3 text-[12px] font-bold text-[#6C727F]'>
                        <p>Flag</p>
                        <p className='col-span-2'>Name</p>
                        <p className='col-span-2'>Population</p>
                        <p className='col-span-2'>Area (km<sup>2</sup>)</p>
                        <p className='hidden xl:block col-span-2'>Region</p>
                    </header>

                    <hr className='border-1 border-[#6C727F]'/>
                    
                    <section className='text-[#D2D5DA] text-[16px] font-mediums'>
                        {
                            filteredCountries.map((country) => {
                                return (
                                    <article key={country.cca2}  className='grid grid-cols-7 xl:grid-cols-9 my-3 gap-1'>
                                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className='rounded-sm w-auto h-7' />
                                        <p className='col-span-2'>{country.name.common}</p>
                                        <p className='col-span-2'>{country.population.toLocaleString()}</p>
                                        <p className='col-span-2'>{country.area.toLocaleString()}</p>
                                        <p className='hidden xl:block col-span-2'>{country.region}</p>
                                    </article>
                                )
                            })
                        }
                    </section>

                </article>
                
            </main>
        </>
    )
} export default FilteredCountries;