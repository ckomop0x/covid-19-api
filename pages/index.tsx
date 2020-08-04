import Head from 'next/head';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import SwaggerUI from 'swagger-ui-react';

import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/Date';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Swagger: any = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

const HomePage: React.FC = ({ allPostsData }: any) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here you can find COVID-19 REST and GraphQL APIs.</p>
        <p>
          Graphql{' '}
          <Link href="/api/graphql">
            <a>api</a>
          </Link>
          ,{' '}
          <Link href="/api/graphiql">
            <a>playground</a>
          </Link>
          <br />
          REST{' '}
          <Link href="/api/countries/netherlands">
            <a>Dutch statistics</a>
          </Link>
        </p>
        {/* <p>
          Hi, I'm Pavel. I'm a software engineer and musician. I like to travel
          and share experience about my travels. You can find me everywhere with
          nickname <b>ckomop0x</b>.
        </p> */}
      </section>
      <section>
        <Swagger url="openapi/openapi_1_1_0.json" />
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
};

export default HomePage;
