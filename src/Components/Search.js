import React, { useState } from 'react'
import { useGlobalContext } from '../Contex'
import { IoIosCloseCircleOutline } from 'react-icons/io'
const Search = () => {
    const { query, setQuery, isError, setRefreshList } = useGlobalContext();
    const [clear, setClear] = useState(false);
    const handleChange = (e) => {
        setQuery(e.target.value);
        setClear(true)

    }
    const clearInput = () => {
        setQuery('');
        setRefreshList(true)
    }
    return (
        <>
            <section className="search-section">
                <h2>Search Your Fovourite Moview</h2>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className='searchBox'>
                        <input type="text" placeholder='search here' value={query} onChange={handleChange} />
                        {
                            clear ?
                                <IoIosCloseCircleOutline fontSize={20} onClick={clearInput} cursor="pointer" />
                                : null
                        }

                    </div>
                </form>
                <div className="card-error">
                    <p>
                        {isError.show && isError.msg}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Search