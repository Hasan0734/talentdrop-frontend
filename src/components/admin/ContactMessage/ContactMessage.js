import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import { setMessages } from './../../../../store/Messages/actions';
import MessageCard from './MessageCard';

const ContactMessage = () => {

    const [hideMessage, setHideMessage] = useState(false)
    const dispatch = useDispatch()
    const { messages } = useSelector(state => state)
    useEffect(() => {
        dispatch(setMessages())
    }, [])
    console.log(messages)
    return (
        <>
            <Layout>

                <div className=" container p-5">

                    <div className='row gy-5 g-xl-8'>
                        <div className="col-xl-4">
                            <div className="card card-xl-stretch mb-xl-8">
                                <div className="card-header border-0">
                                    <h3 className="card-title fw-bolder text-dark">Notifications</h3>
                                    <div className="card-toolbar">
                                        <button onClick={() => setHideMessage(!hideMessage)} type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                        <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                                        <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                        <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                        <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                                <div className={`card-body pt-0 pb-5 ${hideMessage && 'd-none'}`} style={{ height: '472px', overflow: 'scroll' }}>
                                    {messages.messageList?.map((message, i) => <MessageCard key={i} messages={message} />)}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    );
};

export default ContactMessage;