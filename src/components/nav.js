import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return ( 
        <div class="topnav">
            <Image src="/vercel.svg" width={150} height={25}/>
            <h1>Lakshman</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/Names">All Names</Link>
            </div>
        </div>
     );
}
 
export default Navigation;