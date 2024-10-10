import Link from "next/link";

const Page = () => {
    return (
        <div>
        <h1>Player Page</h1>
            <Link href={'/'}>Home</Link>
            <Link href={'/player'}>Player</Link>
        </div>
    );
};

export default Page;