function Status ({ onUNFilter , onINFilter , independent , unMember}) {

    const handleIndependent = () => {
        onINFilter(!independent);
    }

    const handleunMember = () => {
        onUNFilter(!unMember);
    }

    return (
        <article className="mt-7">
            <h3 className="text-[12px] font-bold text-[#6C727F] mb-3">Status</h3>
            <section className="text-[14px] font-semibold text-[#D2D5DA]">
                <div className="flex gap-2 items-center mb-3">
                    <input type="checkbox" id="unmember" 
                        className="relative peer shrink-0
                        appearance-none h-[1.5rem] w-[1.5rem] rounded-[0.25rem] border-[0.125rem] border-solid border-[#6C727F] outline-none
                        checked:border-[#4E80EE] checked:bg-[#4E80EE]"
                        checked={unMember}
                        onChange={handleunMember}
                    />
                    <label htmlFor="unmember">Member of the United Nations</label>
                    <svg className="
                        absolute 
                        h-[1.5rem] w-[1.5rem] 
                        hidden peer-checked:block pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#D2D5DA" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                
                <div className="flex gap-2 items-center">
                    <input type="checkbox" id="independent" 
                        className="relative peer shrink-0
                        appearance-none h-[1.5rem] w-[1.5rem] rounded-[0.25rem] border-[0.125rem] border-solid border-[#6C727F] outline-none
                        checked:border-[#4E80EE] checked:bg-[#4E80EE]"
                        checked={independent}
                        onChange={handleIndependent}
                    />
                    <label htmlFor="independent">Independent</label>
                    <svg className="
                        absolute 
                        h-[1.5rem] w-[1.5rem] 
                        hidden peer-checked:block pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" stroke="#D2D5DA" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </section>
            
        </article>
    )
} export default Status;