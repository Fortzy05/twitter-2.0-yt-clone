import {createClient} from 'next-sanity';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiversion: '2021-03-25',
    useCon: process.env.Node_ENV === 'production',
}
// set up the client for fetching data in the getStaticProps and getServerSideProps functions in pages

export const client = createClient(config);

