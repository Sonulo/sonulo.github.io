import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Sonulo - Software Development Company"}
                </title>
            </Head>
        </>
    )
}

export default PageHead