'use client';

import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (
        <div className={'p-8 w-fit h-fit bg-fuchsia-400'}>
            <h1>Intercepting Modal Page</h1>
            <main>Hello</main>
            <button onClick={() => {
                router.back()
            }}>
                닫기
            </button>
        </div>
    );
}

export default Page;