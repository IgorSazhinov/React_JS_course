import { getPageArray } from "../../../utils/pages"


export default function Pagination ({totalPages, changePage, page}) {
    
    let pagesArray = getPageArray(totalPages)

    const pageLimit = (p) => {
        if (p <= 9) {
             return p
        } else {
            return '...'
        }
    }

    return (
        <div className='page__wraper'>
            {pagesArray.map( p =>
                <span
                    className={page === p ? 'page__current' : 'page'}
                    key={p}
                    onClick={() => changePage(p)}
                >
                    {pageLimit(p)}
                </span>
            )}
        </div>
    )
}