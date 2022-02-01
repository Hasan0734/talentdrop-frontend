import AddCompany from "../../../src/components/admin/Company/AddCompany/AddCompany";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <AddCompany />
        </>
    );
};

export default index;
export const getStaticProps = adminAuth(context => {
    return {
        props: {}
    }
})