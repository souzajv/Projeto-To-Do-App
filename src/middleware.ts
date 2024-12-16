import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("authjs.session-token");
    const pathname = request.nextUrl.pathname;

    if (pathname === "/auth" && token) {
        return NextResponse.redirect(new URL(getUrl("/app"), request.url));
    }

    if (pathname.startsWith("/app") && !token) {
        return NextResponse.redirect(new URL(getUrl("/auth"), request.url));
    }
}

export const config = {
    matcher: ["/auth", "/app/:path*"], 
};
