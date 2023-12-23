import { useState } from 'react';

const data = await fetch('https://restcountries.com/v3.1/all').then((response) =>
  response.json()
);

function FilteredCountries() {

    const [sortedCountries, setSortedCountries] = useState('population');
    const [region, setRegion] = useState('all');
    const [independent, setIndependent] = useState(false);
    const [unMember, setUnMember] = useState(false);

    const filteredCountries = data.filter((country) => {
        const passRegionFilter = region === 'all' || country.region === region;
        const passIndependenceFilter = !independent || country.independent;
        const passUNMemberFilter = !unMember || country.unMember;
      
        return passRegionFilter && passIndependenceFilter && passUNMemberFilter;
    });

    return (
        <>
            <header className='flex justify-between'>
                <h3 className='text-[#6C727F] font-bold'>Found {filteredCountries.length} Countries</h3>
                <h3 className='text-white'>jojos</h3>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                
                <section>
                    <h2>jaso</h2>
                </section>

                <article className='col-span-3' >
                    <header >
                        peo

                    </header>
                    <section className='text-[#D2D5DA]'>
                        {
                            filteredCountries.map((country) => {
                                return (
                                    <article key={country.cca2}  className='grid grid-cols-4 lg:grid-cols-9 my-3'>
                                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className='rounded-sm w-auto h-7' />
                                        <p className='col-span-2'>{country.name.common}</p>
                                        <p className='col-span-2'>{country.population}</p>
                                        <p className='col-span-2'>{country.area}</p>
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