import { getPageArray } from "../../../utils/pages"


export default function Pagination ({totalPages, changePage, page}) {
    
    let pagesArray = getPageArray(totalPages)

    return (
        <div className='page__wraper'>
            {pagesArray.map( p =>
                <span
                className={page === p ? 'page__current' : 'page'}
                key={p}
                onClick={() => changePage(p)}
                >
                    {p}
                </span>
            )}
        </div>
    )
}