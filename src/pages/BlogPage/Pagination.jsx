import React from 'react'

const Pagination = () => {
    return (
        <ul className="paging">
            <li><a href="#"><i><img src="img/iconprev.svg" alt /></i></a></li>
            <li><a href="#" className="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#"><i><img src="img/iconprev.svg" alt /></i></a></li>
        </ul>
    )
}

export default Pagination