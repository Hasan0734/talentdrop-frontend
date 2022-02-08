import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanies } from '../../../../../store/companies/actions';
import { modalToggle } from '../../../../../store/settings/actions';
import Layout from '../../Layout/Layout';
import CompanyUpdate from '../UpdateCompany/UpdateCompany';
import CompanyList from './CompanyList';

const Companies = () => {
    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const { companies, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })
    const [showDesc, setShowDesc] = useState(false)

    useEffect(() => {
        dispatch(setCompanies())
    }, [])

    const { companyList } = companies;


    const currentUpdate = (data) => {
        setTrigger(true)
        // setTrigger(false)
        dispatch(modalToggle(settings.modal))
        // const updateData = { ...currentData }
        // updateData.isUpdate = true;
        // updateData.tag_name = data.tag_name
        // updateData.id = data.id
        // setCurrentData(updateData)
    }

    return (
        <Layout>
            {/* {trigger && <AddTag></AddTag>} */}
            {trigger && <CompanyUpdate setCurrentData={setCurrentData} currentData={currentData} />}
            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between py-5 ">
                    <h1 className="mt-3">All Companies</h1>
                    <Link href="/admin/add-company">
                        <a>
                            <button onClick={() => {

                            }}
                                className="btn btn-primary">
                                Add Company
                            </button>
                        </a>
                    </Link>
                </div>
                <div id="kt_referrals_1" className="card-body p-0 tab-pane fade show active" role="tabpanel">
                    <div className="table-responsive">
                        <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                            <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                <tr>
                                    <th className="min-w-175px ps-9">Id</th>
                                    <th className="min-w-150px px-0">Company</th>
                                    <th className="min-w-350px">Country</th>
                                    <th className="min-w-125px">Action</th>
                                    <th className="min-w-125px text-center"></th>
                                </tr>
                            </thead>
                            <tbody className="fs-6 fw-bold text-gray-600">
                                {companyList?.map((company, i) => <CompanyList key={i} company={company} />)}


                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <div className='d-flex justify-content-between bg-secondary p-3 align-items-center rounded-1 text-center'>
                    <h5>Id</h5>
                    <h5>Company Name</h5>
                    <h5>Action</h5>
                    <h5>Full View</h5>
                </div>
                <div className=''>
                    <div className='d-flex justify-content-between bg-danger align-items-center py-3 ps-3 pe-5 text-center'>
                        <span>1</span>
                        <span>Scount</span>
                        <span className=''>
                            <i onClick={() => currentUpdate(item)} style={{ cursor: 'pointer' }} className="fas fa-edit"></i>
                        </span>
                        <span><i onClick={() => setShowDesc(!showDesc)} className="fas fa-angle-down" style={{ cursor: 'pointer' }}></i></span>
                    </div>
                </div> */}
                {/* <div className="t_table_content-wrapper">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead bg-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Company Name</th>
                                    <th className="text-center">Action</th>
                                    <th className="text-center"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    companyList?.map((item, index) => {
                                        return (<>
                                            <tr key={index}>
                                                <th scope="row" className="row-scope-line">{item.id}</th>
                                                <td>{item.company_name}</td>
                                                <td className="text-center">
                                                    <i onClick={() => currentUpdate(item)}

                                                        style={{ cursor: 'pointer' }} className="fas fa-edit"></i>
                                                </td>
                                                <td><i onClick={() => setShowDesc(!showDesc)} className="fas fa-angle-down" style={{ cursor: 'pointer' }}></i></td>
                                            </tr>

                                            {showDesc && <div><CompanyDesc></CompanyDesc></div>}
                                        </>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div> */}

            </div>
        </Layout >
    );
};

export default Companies;

