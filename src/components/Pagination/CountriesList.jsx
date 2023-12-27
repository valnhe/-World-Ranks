import { useState } from 'react';
import CountriesCard from '../CountriesCard';
import Pagination from './Pagination';

function CountriesList({ all }) {

    const productosPerPage = 23;
    const [currentPage, setCurrentPage] = useState(1);
    const totalCountries = all.length;

    const lastIndex = currentPage * productosPerPage; 
    const firstIndex = lastIndex - productosPerPage;


    return (
        <>
            {
                all.map((country) => {
                    return (
                            <CountriesCard key={country.cca2} code={country.cca2} flag={country.flags.png} name={country.name.common} population={country.population.toLocaleString()} area={country.area.toLocaleString()} region={country.region} />
                    )
                }).slice(firstIndex, lastIndex)
            }
            <Pagination productosPerPage={productosPerPage} 
                        currentPage={currentPage} 
                        totalCountries={totalCountries}
                        setCurrentPage={setCurrentPage} 
            />
        </>
    )
} export default CountriesList;