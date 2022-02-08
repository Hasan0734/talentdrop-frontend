
import { useRouter } from 'next/router';
import { useState } from 'react';
import CompanyDesc from './CompanyDesc';

const CompanyList = ({ company }) => {
    const { company_name, company_slug, id, country } = company
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    return (
        <>
            <tr className=''>
                <td className="ps-9">{id}</td>
                <td className="ps-0">{company_name}</td>
                <td>{country?.country_name}</td>
                <td className="text-success">
                    <button onClick={() => router.push(`/admin/company/${company_slug}/update`)} className="btn btn-light-danger btn-sm btn-active-light-primary">
                        <i className="far fa-edit"></i>
                    </button>
                </td>
                <td className="text-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-light btn-sm btn-active-light-primary">
                        <i className="fas fa-angle-down"></i>
                    </button>
                </td>
            </tr>

            <tr >

                {isOpen && <CompanyDesc company={company} />}
            </tr>
        </>
    );
};

export default CompanyList;