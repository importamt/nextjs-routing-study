import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    console.log('Middleware');

    const next =  NextResponse.next();

    next.headers.set('x-a-value','a');
    next.cookies.set('hello','world');


    return next;
}

export const config = {
    matcher: ['/middleware-test/check', {
        source: '/middleware-test',
        missing: [
            {
                type: 'cookie',
                key: 'hello',
            }
        ]
    }],
}