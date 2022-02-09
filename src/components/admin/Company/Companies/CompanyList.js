
import { useRouter } from 'next/router';
import { useState } from 'react';
import CompanyDesc from './CompanyDesc';

const CompanyList = ({ company }) => {
    const queryString = require('query-string');
    const { company_name, company_slug, id, country, state, timezone } = company
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const companyQuery = queryString.stringify(company, { sort: false })
    const countryQuery = queryString.stringify(country, { sort: false })
    const stateQuery = queryString.stringify(state, { sort: false })
    const timezoneQuery = queryString.stringify(timezone, { sort: false })

    // const mainQuery = queryString.stringify(companyQuery, countryQuery, timezoneQuery, { sort: false });
    // console.log(countryQuery)
    // console.log(stateQuery)
    // console.log(timezoneQuery)
    // console.log(companyQuery)
    // console.log(mainQuery)
    // const parser = queryString.parse(mainQuery);
    // console.log(parser)

    const newSystem = queryString.stringify({

        nested: JSON.stringify({
            company: company,
            country: country,
            state: state,
            timezone, timezone
        })
    });
    // const parsed = queryString.parse(newSystem)
    // console.log(JSON.parse(parsed.nested))

    return (
        <>
            <tr className=''>

                <td className="text-start">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-light btn-sm btn-active-light-primary">
                        <i className="fas fa-angle-down"></i>
                    </button>
                </td>
                <td className="ps-0">{company_name}</td>
                <td>{country?.country_name}</td>
                <td className="text-end">
                    <button onClick={() => router.push({ pathname: `/admin/company/${company?.company_slug}/update`, query: newSystem })}

                        className="btn btn-light-danger btn-sm btn-active-light-primary">
                        <i className="far fa-edit"></i>
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