import Link from 'next/link'

import { PER_PAGE } from '@/config/index'



export default function Pagination({ page, total }) {
    const lastPage = Math.ceil(total / PER_PAGE)

    return (
        <div className='pagination-buttons'>
            {/*go to prev page*/}
            {page > 1 && (
                <Link href={`/events?page=${page - 1}`}>
                    <a className='btn-secondary'>Prev</a>
                </Link>
            )}
            {/*go to next page*/}
            {page < lastPage && (
                <Link href={`/events?page=${page + 1}`}>
                    <a className='btn-secondary'>Next</a>
                </Link>
            )}
        </div>
    )
}

