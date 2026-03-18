import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, designation, phone } = body;

        // Basic validation
        if (!name || !email || !company || !designation || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Insert data into Supabase
        const { data, error } = await supabase
            .from("waitlist")
            .insert([
                {
                    name,
                    email,
                    company,
                    designation,
                    phone,
                },
            ]);

        // Handle duplicate emails or database errors
        if (error) {
            console.error("Supabase Error:", error);
            if (error.code === '23505') { // Unique constraint violation (duplicate email)
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