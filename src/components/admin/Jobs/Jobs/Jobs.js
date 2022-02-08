import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../../../../../store/jobs/actions';
import Layout from '../../Layout/Layout';
import JobList from './JobList';

const Jobs = () => {
    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const { jobs, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })

    useEffect(() => {
        dispatch(setJobs())
    }, [])

    const { jobList } = jobs;


    return (
        <Layout>

            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between py-5 ">
                    <h1 className="mt-3">Jobs</h1>
                    <Link href="/admin/add-company">
                        <a>
                            <button onClick={() => {
                            }}
                                className="btn btn-primary">
                                Add Jobs
                            </button>
                        </a>
                    </Link>
                </div>
                <div id="kt_referrals_1" className="card-body p-0 tab-pane fade show active" role="tabpanel">
                    <div className="table-responsive">
                        <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                            <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                <tr>
                                    <th className="min-w-175px ps-9"></th>
                                    <th className="min-w-150px px-0">Title</th>
                                    <th className="min-w-350px">Company</th>
                                    {/* <th className="min-w-350px"></th> */}
                                    <th colSpan={2} className="min-w-125px text-end">Action</th>
                                    {/* <th className="min-w-125px text-center"></th> */}
                                </tr>
                            </thead>
                            <tbody className="fs-6 fw-bold text-gray-600">
                                {jobList?.map((job, i) => <JobList key={i} job={job} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default Jobs;

