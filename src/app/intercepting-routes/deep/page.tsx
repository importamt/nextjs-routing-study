import Link from "next/link";

const Page = () => {
    return <div>
        <h1>Deep page</h1>
        <Link href={'/'}><p>Home</p></Link>
        <Link href={'/intercepting-routes'}><p>Back</p></Link>
        <Link href={'/modal2'}><p>Far Modal</p></Link>

    </div>
};

export  default Page;