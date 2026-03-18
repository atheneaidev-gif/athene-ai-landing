import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Force Next.js to NEVER cache this route so the count is always live
export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// --- FETCH THE COUNT SECURELY ---
export async function GET() {
    try {
        // Call our secure custom database function
        const { data: count, error } = await supabase.rpc('get_waitlist_count');

        if (error) throw error;

        return NextResponse.json({ count: count || 0 }, { status: 200 });
    } catch (error) {
        console.error("Count Error:", error);
        return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
    }
}

// --- HANDLE NEW SIGNUPS ---
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, designation, phone } = body;

        if (!name || !email || !company || !designation || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { error } = await supabase
            .from("waitlist")
            .insert([{ name, email, company, designation, phone }]);

        if (error) {
            console.error("Supabase Error:", error);
            if (error.code === '23505') {
                return NextResponse.json({ error: "Email already registered" }, { status: 409 });
            }
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }

        return NextResponse.json(
            { message: "Successfully joined the waitlist" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}