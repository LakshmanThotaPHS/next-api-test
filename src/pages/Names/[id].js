import styles from './name.module.css'

const Singlename = ({nameData}) => {
    return ( 
        <div className={styles.eachItem}>
            <h4>{nameData.name}</h4>
            <p>{nameData.email}</p>
            <p>{nameData.phone}</p>
        </div>
     );
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map((name) => {
        return { 
            params: { id: name.id.toString() }
        }
    })

    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props:{nameData: data}
    }
}
 
export default Singlename;