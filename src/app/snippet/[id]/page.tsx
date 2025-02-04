import React from 'react'
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as actions from '@/actions';
import { notFound } from 'next/navigation';

const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const snippet = await prisma.snippet.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    if (!snippet) {
        return notFound();
    }
    const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id);
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>{snippet.title}</h1>
                <div className='flex items-center gap-2'>
                    <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
                    <form action={deleteSnippetActions}>
                        <Button variant={`destructive`} type='submit'>Delete</Button>
                    </form>
                </div>
            </div>
            <div>
                <pre className='p-3 bg-gray-200 rounded border-gray-300 '>
                    <code>
                        {snippet.code}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default SnippetDetailPage
