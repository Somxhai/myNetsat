

const FacultySearch = () => {
    return (<div className="px-5 w-screen h-screen absolute">
        <div className="hidden w-64 p-3 max-w-2xl min-w-fit fixed z-10 bg-white shadow-lg left-1/2 -translate-x-1/2 translate-y-1/2 rounded-lg" id="FacultySearch">
        <div className="text-secondary">
            <FacultySearchBar/>
        </div>
    </div>
    </div>)
}

const FacultySearchBar = () => {
    return (<div className="flex text-secondary">
        <SearchIcon className="mr-3" />
        <input className="text-secondary bg-white w-full focus:outline-none" id='search_result' placeholder="ค้นหาคณะ"/>
    </div>)
}
interface searchIconType {
    className: string,
}
const SearchIcon = ({className}:searchIconType) => {
    return <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
    </div>
}

export default FacultySearch;