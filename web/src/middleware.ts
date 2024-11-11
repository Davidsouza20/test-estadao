import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/feed", "/admin", "/news/:id*"],
};
