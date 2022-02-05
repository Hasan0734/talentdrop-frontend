import React from 'react';
import TrustedCompany from '../trustedCompanies/TrustedCompany';
import Banner from './../banner/Banner';
import Layout from './../layout/index';
const Search = () => {
    return (
        <>
            <Layout>
                <Banner />
                <TrustedCompany />
                {/* <Cards jobs={jobs} generalJob={generalJob} /> */}
            </Layout>
        </>
    );
};

export default Search;