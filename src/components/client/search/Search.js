import { useRouter } from 'next/router';
import React from 'react';
import CardRow from '../cardrow/CardRow';
import Layout from './../layout/index';
import styles from "./Search.module.css";
const Search = ({ jobs }) => {
    const router = useRouter();
    // const { title, location } = router.query;

    return (
        <>
            <Layout>

                <section>
                    <div className={`${styles.toggle__container} container`}>
                        <div className="text-center mb-5">
                            {/* <h1 className={styles.tag_title}>#{tagSlug} on Scouted</h1> */}
                            {/* <p className={styles.tag_text}>Check out jobs tagged <span>{tagSlug}</span> here.</p> */}
                            {/* <h1><span>Searching: </span>
                                <Link href={`/s/${title}`}>
                                    <a > {title}</a>
                                </Link>
                            </h1> */}
                        </div>
                        <div className="row pt-5">
                            <div className="col-12">
                                {jobs.length > 0 ?
                                    jobs.map((job, i) => <CardRow key={i} job={job} />)
                                    :
                                    <h1 className='text-center'>Not Found</h1>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Search;