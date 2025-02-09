import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic" // disabling the caching feature -> dynamic route
// export const revalidate = 0; //

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="bg-blue-100 rounded-md min-h-64 m-10 p-2 shadow-md">
      <h1 className="font-bold text-4xl">Home</h1>
      <hr className="h-1 bg-white" />
      <div className="flex items-center justify-between">
        <h1> Snippets </h1>
        <Link href={"/snippet/new"}>
          <Button className=" bg-green-600 mt-2">Add New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2"
        >
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={"link"}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
