function CountriesCard ({code , flag , name , population , area , region}) {
    return (
        <a key={code} href={`/countries/${code}`} className='grid grid-cols-5 sm:grid-cols-7 xl:grid-cols-9 my-3 gap-5 sm:gap-3 cursor-pointer items-center'>
            <div className=" h-11 w-[4rem]">
                <img src={flag} alt={`Flag of ${name}`} className='rounded object-cover h-11 w-[4.5rem] ' />
            </div>
            <p className='col-span-2'>{name}</p>
            <p className='col-span-2'>{population}</p>
            <p className='hidden sm:block col-span-2'>{area}</p>
            <p className='hidden xl:block col-span-2'>{region}</p>
         </a>

    )
} export default CountriesCard;



