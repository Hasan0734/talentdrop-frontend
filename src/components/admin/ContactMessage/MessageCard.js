
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../../../../store/Messages/actions';
import { authPost } from './../../../../__lib__/helpers/HttpService';

const MessageCard = ({ messages }) => {
    const { id, name, email, message } = messages
    const [showMessage, setShowMessage] = useState(false)
    const { admins } = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteMessage = () => {
        authPost(`/contact/${id}`, {}, admins.token)
            .then(res => {
                // toast.success('Message deleted successfully.')
                dispatch(setMessages())
            })

    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className=" bg-light-warning rounded p-5 mb-7">
                <div className='d-flex justify-content-between align-items-center'>
                    <div onClick={() => setShowMessage(!showMessage)} className='d-flex align-items-center' style={{ cursor: 'pointer' }}>
                        <span className="svg-icon svg-icon-warning me-5">
                            <span className="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                        <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width={3} height={18} rx={1} />
                                    </g>
                                </svg>
                            </span>
                        </span>
                        <div className="flex-grow-1 me-2">
                            <span className="fw-bolder text-gray-800 text-hover-primary fs-6">
                                {name} 	&nbsp;
                                {showMessage ? <i className="fas fa-angle-up"></i>
                                    : <i className="fas fa-angle-down"></i>}


                            </span>
                            <span className="text-muted fw-bold d-block">{email}</span>
                        </div>

                    </div>
                    <span className="fw-bolder text-warning py-1">
                        <i onClick={deleteMessage} className="fas fa-trash" style={{ cursor: 'pointer' }}></i>
                    </span>
                </div>
                <div className={showMessage ? 'd-block' : 'd-none'}>
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
};

export default MessageCard;