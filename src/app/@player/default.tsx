import Link from "next/link";

const Default = () => {
    return <span className={'absolute left-0 bottom-0'}>
        <Link href={'/player'}>Player Default</Link>
    </span>;
};

export default Default;