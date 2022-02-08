
const JobDesc = ({ job }) => {


    const { job_title, job_description, job_salary, job_condition, job_vacancy, job_referer, job_interviewer, hired, job_bounty, company, tags, referars, country, state, timezone } = job
    return (
        <td className="bg-light-info " colSpan={5}>
            <div className="" style={{ paddingLeft: '15px' }}>
                <div className='row p-5' >
                    <div className='p-5 d-flex gap-5 justify-content-between'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex gap-4 align-items-center'>
                                <img style={{ width: '50px', borderRadius: '50%', height: '40px' }} src="https://www.seekpng.com/png/detail/267-2675194_00106-3d-company-logos-design-free-logo-online.png" />
                                <h2> {job_title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-4'>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Salary: ${job_salary}</h6>
                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Vacancy: {job_vacancy}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Referer: {job_referer}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Bounty: ${job_bounty}</h6>
                            </div>
                        </div>

                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Interviewer: {job_interviewer}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Hired: {hired}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Condition: {job_condition}</h6>

                            </div>
                        </div>


                    </div>
                    <div className='col-5 p-5'>
                        <div className="border my-3">
                            <div className="card-body">
                                <h5>Description here</h5>
                                <p>{job_description}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>Country: {country?.country_name}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>State: {state?.state_name}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>Timezone: {timezone?._zone_name_}</p>

                            </div>
                        </div>



                    </div>
                    <div className='col-3'>

                    </div>

                </div>
            </div>
        </td>
    );
};

export default JobDesc;