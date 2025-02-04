"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });
    redirect(`/snippet/${id}`);
}

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        }
    });
    redirect(`/`);
}

export async function createSnippet(prevState:{message:string},formData: FormData) {

    try {
        
    } catch (error) {
        
    }
    const title = formData.get("title");
    const code = formData.get("code");

    if (!title) {
        return{message:"Title is required"};
    }
    
    if (!code) {
        return{message:"Code is required"};
    }
    
    const snippet = await prisma.snippet.create({
        data: {
            title: title,
            code: code
        }
    });
    redirect("/");
}