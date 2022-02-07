import React, { useState } from "react";

const CompaniesList = ({ company }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>


            <div onClick={() => setIsOpen(!isOpen)} className='d-flex justify-content-between align-items-center my-3'>
                <h4 style={{ width: '200px' }}>{company.company_name}</h4>
                <span><i className="fas fa-plus"></i></span>
            </div>
            {isOpen && <div>
                <h6>hello world</h6>
                <p>Hello wrold p</p>
            </div>}

        </>
    );
};

export default CompaniesList;