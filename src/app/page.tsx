import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Fetch snippets from Prisma (runs on the server)
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippets</h1>
        <Link href="/snippet/new">
          <Button>New</Button>
        </Link>
      </div>

      <div className="mt-4">
        {snippets.length > 0 ? (
          snippets.map((snippet) => (
            <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-4 rounded-md my-2">
              <h2>{snippet.title}</h2>
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant={'link'}>View</Button>
              </Link>
            </div>
          ))
        ) : (
          <p>No snippets available.</p>
        )}
      </div>
    </div>
  );
}
