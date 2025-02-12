import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const logoFiles = fs
    .readdirSync(path.join(process.cwd(), "public/firm"))
    .filter((file) => file.endsWith(".svg"));

  return NextResponse.json({ logos: logoFiles });
}
