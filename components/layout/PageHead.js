import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Creote - Just another Nextjs Template"}
                </title>
            </Head>
        </>
    )
}export default PageHead