import React, { FC } from 'react';
import Head from 'next/head';

interface HeadProps {
    title: string;
    description: string;
    keywords: string;
}

const Heading: FC<HeadProps> = ({title, description, keywords}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport"
                  content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <link rel="icon" href="/public/favicon.ico"/>
        </Head>
    );
};

export default Heading;