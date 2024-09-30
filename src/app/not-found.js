import Image from "next/image";
import Link from "next/link";


export default function NotFound(){
    return(
       <div className="not-found-page">
         <img src="/images/notfound.png" alt="notfound image"/>
         <Link href={'/'} className="return-link">GO TO HOME</Link>
       </div>
    );
}