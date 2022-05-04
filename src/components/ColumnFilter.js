import React from 'react'

export const ColumnFilter = ({
    column
}) => {
    const { filterValue, preFilteredRows, setFilter } = column
    
    const count = preFilteredRows.length
    
    return (
        <span>
            Search: {' '}
            <input value={filterValue || ''} onChange={e => setFilter(e.target.value || undefined)}
            placeholder={`Search ${count} records...`}
            />
        </span>
    )
}