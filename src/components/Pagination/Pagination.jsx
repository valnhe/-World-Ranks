export default function Pagination({productosPerPage , currentPage, setCurrentPage, totalCountries}) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / productosPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    currentPage === 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1);
  }

  const onNextPage = () => {
    currentPage === pageNumbers.length ? setCurrentPage(pageNumbers.length) : setCurrentPage(currentPage + 1);
  } 

  return (
    <div className="flex items-center justify-between border-t border-gray-200 text-[#D2D5DA] px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={onPreviusPage}
        >
          Previous
        </a>
        <a
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={onNextPage}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 xl:items-center justify-center xl:justify-between">
        <div>
          <p className="text-sm text-[#D2D5DA] hidden xl:block">
            Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{pageNumbers.length}</span> of{' '}
            <span className="font-medium">{totalCountries}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={onPreviusPage}
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6C727F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
                <path d="M8 12l4 4" />
                <path d="M8 12h8" />
                <path d="M12 8l-4 4" />
              </svg>
            </a>

            {
              pageNumbers.map((number) => {
                return (
                  <a
                    key={number}
                    aria-current="page"
                    className={currentPage === number ? 
                      "relative z-10 inline-flex items-center text-[#282B30] ring-1 ring-inset ring-gray-300 px-4 py-2 text-sm font-semibold bg-gray-50 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                      "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#D2D5DA] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-[#282B30] focus:z-20 focus:outline-offset-0"}
                      onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </a>
                )
              })
            }
           
            <a
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={onNextPage}
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6C727F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                <path d="M16 12l-4 -4" />
                <path d="M16 12h-8" />
                <path d="M12 16l4 -4" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
