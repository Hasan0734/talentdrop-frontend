import React from 'react';
import Layout from './../layout/index';
import styles from "./Search.module.css";
const Search = () => {
    return (
        <>
            <Layout>

                <section>
                    <div className={`${styles.toggle__container} container`}>
                        {/* <div className="text-center mb-5">
                            <h1 className={styles.tag_title}>#{tagSlug} on Talentdrop</h1>
                            <p className={styles.tag_text}>Check out jobs tagged <span>{tagSlug}</span> here.</p>
                        </div> */}
                        <div className="row pt-5">
                            <div className="col-12">
                                {/* {jobs.map((job, i) => <CardRow key={i} job={job} />)} */}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Search;