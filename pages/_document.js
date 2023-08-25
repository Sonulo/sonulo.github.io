import { Head, Html, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700,800,900|spartan:400,500,600,700,800,900"
                rel="stylesheet"
            />
            <body className="theme-creote">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
