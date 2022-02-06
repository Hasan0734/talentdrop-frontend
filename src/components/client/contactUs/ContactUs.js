
import { useForm } from 'react-hook-form';
import Layout from './../layout/index';
import styles from './ContactUs.module.css';
const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.contact__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.contact__title}>Contact Us</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4'>
                                <label>Name</label>
                                <input className='form-control' {...register("name", { required: true })} />
                                {errors.name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label>Email</label>
                                <input className='form-control' {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label>Message</label>
                                <textarea rows={6} className='form-control ' {...register("message", { required: true })} />
                                {errors.message && <span className='text-danger'>This field is required</span>}

                            </div>
                            <input className='btn btn-primary' value="Send" type="submit" />
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactUs;