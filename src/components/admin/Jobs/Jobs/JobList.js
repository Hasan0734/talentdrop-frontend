
import { useState } from 'react';
import JobDesc from './JobDesc';

const JobList = ({ job }) => {
    const { job_title, job_slug, company } = job
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <tr className=''>

                <td className="text-start">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-light btn-sm btn-active-light-primary">
                        <i className="fas fa-angle-down"></i>
                    </button>
                </td>
                <td className="ps-0">{job_title}</td>
                <td>{company?.company_name}</td>
                <td className="text-end">
                    <button onClick={() => router.push({ pathname: `/admin/job/${company?.company_slug}/${job_slug}/update`, query: job })} className="btn btn-light-danger btn-sm btn-active-light-primary">
                        <i className="far fa-edit"></i>
                    </button>
                </td>

            </tr>

            <tr >

                {isOpen && <JobDesc job={job} />}
            </tr>
        </>
    );
};

export default JobList;