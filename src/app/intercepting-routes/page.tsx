import Link from "next/link";

const Page = () => {
    return (
        <div>
        <h1>Intercepting Routes Page</h1>
            <Link href="/modal">
                <p>Modal</p>
            </Link>
        </div>
    );
}

export default Page;