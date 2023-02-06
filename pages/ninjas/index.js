import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data}
    }

}



const AllNinas = ({ninjas}) => {
    return ( 
        <div>
            <h1>Authors</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <h3 className={styles.single}>{ ninja.name }</h3>
                </Link>

            ))}
        </div>
     );
}
 
export default AllNinas;