import Link from 'next/link';
import { useState } from 'react';
import Layout from '../layout';
import Styles from './Dashboard.module.css';
const Dashboard = () => {
    const [isTrue, setIstrue] = useState({
        candidate: false,
        talentdropRec: false,
        status: false,
        role: false,
        submited: false
    })
    const [isTrueSecond, setIstrueSecond] = useState({
        candidate: false,
        talentdropRec: false,
        status: false,
        role: false,
        submited: false
    })

    const selectedItem = (item) => {

        setIstrue({
            candidate: item === 'candidate' ? !isTrue.candidate : false,
            talentdropRec: item === 'talentdropRec' ? !isTrue.talentdropRec : false,
            status: item === 'status' ? !isTrue.status : false,
            role: item === 'role' ? !isTrue.role : false,
            submited: item === 'submited' ? !isTrue.submited : false,
        })
        setIstrueSecond({
            candidate: item === 'candidate' && isTrue.candidate ? !isTrueSecond.candidate : false,
            talentdropRec: item === 'talentdropRec' && isTrue.talentdropRec ? !isTrueSecond.talentdropRec : false,
            status: item === 'status' && isTrue.status ? !isTrueSecond.status : false,
            role: item === 'role' && isTrue.role ? !isTrueSecond.role : false,
            submited: item === 'submited' && isTrue.submited ? !isTrueSecond.submited : false,
        })


    }
    return (
        <>
            <Layout>
                <div className='container-md pt-5'>
                    <div className='mt-5'>
                        <h1 className='text-center display-5'>Referrer: Dashboard</h1>
                        <div className='table-responsive'>

                            <table className={`table table-borderless ${Styles.table}`}>
                                <thead className='text-center'>

                                    <tr className=''>
                                        <th>Candidate</th>
                                        <th className='d-none d-sm-block'>TALENTDROP REC</th>
                                        <th className='d-none d-sm-block'>CANDIDATE STATUS</th>
                                        <th>ROLE</th>
                                        <th className='d-none d-sm-block'>SUBMITTED</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td className="d-flex align-items-center">hello</td>
                                        <td>
                                            <p className={Styles.table__rec}>Spam</p>
                                        </td>
                                        <td>
                                            <p className={Styles.table__status}>Pass</p>
                                            <p className='mt-1 mb-0'>Update: 1/30</p>
                                        </td>
                                        <td className={Styles.table__role}>
                                            <Link href="/general_referral">
                                                <a className={Styles.job__title}>General Referral</a>
                                            </Link>
                                            <p className='mt-1 mb-0'>
                                                <img src="/images/logo.png" alt="" />
                                                <Link href="/talentrop">
                                                    <a className={Styles.company__name}>Talentdrop</a>
                                                </Link>

                                            </p>
                                        </td>
                                        <td className='d-flex gap-5 align-items-center justify-content-center'>
                                            <div>
                                                <p className='mb-0'>{new Date().toLocaleDateString()}</p>
                                                <p className='mb-0'>{new Date().toLocaleTimeString()}</p>
                                            </div>
                                            <p className='mb-0'>
                                                <Link href="/status">
                                                    <a>
                                                        <svg style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512">
                                                            <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                                                        </svg>
                                                    </a>
                                                </Link>
                                            </p>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard;