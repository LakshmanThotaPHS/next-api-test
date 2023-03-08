import Head from "next/head";
import styles from "./index.module.css"
import Link from "next/link";

const Names = ({namesData}) => {
    return (
    <>
        <Head>
            <title>all names</title>
        </Head>
        <div className="content">
            <h1>Names</h1>
            {namesData.map(nd => (
                <div id={nd.id}>
                    <Link className={styles.single} href={`/Names/${nd.id}`}>{nd.name}</Link>
                </div>
            ))}
        </div>
    </> 
    );
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return {
        props:{namesData: data}
    }
}
export default Names;