import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const cookie = cookies().get('Authorization')
    if (!cookie) 
        return NextResponse.redirect(new URL("/", request.url))

    try {
        const res = await fetch('https://tokenprovider-lak.azurewebsites.net/api/token/generate?code=BlxkX3vo2gMEXeGGwUmb3HliUde6gaGeA2FX6GoCp4mgAzFug-fh_A%3D%3D', {
            method: 'post',
            headers: {
                "Authorization": `bearer ${cookie.value}`,
            }
        })
        if (res.status === 200)
            NextResponse.redirect(request.url)
        else 
            return NextResponse.redirect(new URL("/", request.url))
    }
    catch (error) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: "/account:path*"
}
