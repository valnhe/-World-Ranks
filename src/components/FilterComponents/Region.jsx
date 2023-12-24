import { useState , useEffect } from "react";

function Region ({ setFilter }) {

    const [region, setRegion] = useState([]);
    const [americas, SetAmericas] = useState(false);
    const [antartic, SetAntartic] = useState(false);
    const [africa, SetAfrica] = useState(false);
    const [asia, SetAsia] = useState(false);
    const [europe, SetEurope] = useState(false);
    const [oceania, SetOceania] = useState(false);

    const handleAmericas = () => {  
        SetAmericas(!americas);
        americas ? setRegion(region.filter((region) => region !== 'Americas')) : setRegion([...region, 'Americas']) ;
    }

    const handleAntartic = () => {
        SetAntartic(!antartic);
        antartic ? setRegion(region.filter((region) => region !== 'Antarctic')) : setRegion([...region, 'Antarctic']) ;
    }

    const handleAfrica = () => {
        SetAfrica(!africa);
        africa ? setRegion(region.filter((region) => region !== 'Africa')) : setRegion([...region, 'Africa']) ;
    }

    const handleAsia = () => {
        SetAsia(!asia);
        asia ? setRegion(region.filter((region) => region !== 'Asia')) : setRegion([...region, 'Asia']) ;
    }

    const handleEurope = () => {
        SetEurope(!europe);
        europe ? setRegion(region.filter((region) => region !== 'Europe')) : setRegion([...region, 'Europe']) ;
    }

    const handleOceania = () => {
        SetOceania(!oceania);
        oceania ? setRegion(region.filter((region) => region !== 'Oceania')) : setRegion([...region, 'Oceania']) ;
    }

    useEffect(() => {
        setFilter(region);
      }, [region, setFilter]);

    return (
        <article className="mt-7">
            <h3 className="text-[12px] font-bold text-[#6C727F] mb-3">Region</h3>
            <section className="flex flex-wrap gap-4 text-[14px] font-semibold">
                <button className={americas ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleAmericas}>Americas</button>
                <button className={antartic ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleAntartic}>Antarctic</button>
                <button className={africa ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleAfrica}>Africa</button>
                <button className={asia ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleAsia}>Asia</button>
                <button className={europe ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleEurope}>Europe</button>
                <button className={oceania ? `text-[#D2D5DA] bg-[#282B30] p-3 rounded-xl` : `text-[#6C727F] bg-transparent p-3`} onClick={handleOceania}>Oceania</button>
            </section>
        </article>
    )
} export default Region;