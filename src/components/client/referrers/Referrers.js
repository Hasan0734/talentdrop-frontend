import Link from "next/link";
import Layout from "../layout";
import styles from './Referrers.module.css';
const Referrers = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.referrer__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.referrer__title}>Referring on Talentdrop</h1>
                            <p className='text-center'>Talentdrop is a talent marketplace that matches talent to a company's needs, in exchange for a reward.</p>
                        </div>
                        <ol>
                            <li>Go to <Link href="/"><a>talentdrop.com</a></Link>  to see the bounty board.</li>

                            <li>Pick which role or role(s) you want to explore with your network.</li>
                            <li>Have a friend or former colleague that sounds like a great fit for a role? Come across someone’s background or portfolio recently who’s a good match? See an opportunity that sounds too good to pass up for yourself?</li>
                            <li>Click “Refer” and fill out the short form. Hit “Submit.”</li>
                            <li>Create a free Talentdrop account (if you haven't already done so!). When you log in , you'll see your hunting dashboard, where you’ll always have a pulse on the status of your referrals and your bounty rewards.</li>

                            <li>The bounty is refundable for 90 days, in case your new hire doesn’t work out.</li>
                            <li>You can make a max of 20 referrals on Talentdrop. Want more? Contact us about becoming a VIP bounty hunter.</li>

                        </ol>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Referrers;