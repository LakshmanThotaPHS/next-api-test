import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Notfound = () => {
    const router = useRouter()
    useEffect(() => {
       const myInterval = setTimeout(()=>{
            router.push('/');
       }, 3000);
    }, []);
    return ( 
        <div className="content not-found">
            <h1>Oops...Not found the page</h1>
            <p>go back to <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default Notfound;