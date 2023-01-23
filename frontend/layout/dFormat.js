import DHeader from '../components/dheader'
import Footer from '../components/footer'
import Head from "next/head"

export default function format({children}){
    return(
        <>
        <Head>
            <title>blog</title>
        </Head>

        <DHeader />
        <main>{children}</main>
        <Footer/>
        </>
        
    )
}