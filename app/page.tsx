//import Image from "next/image";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Page() {
    return (
        <div>

            <main className="flex flex-col gap-8 row-start-2 items-center  font-[family-name:var(--font-geist-sans)]">
                <h1 className="text-center">Hello, Next.js!</h1>
                <Image 
                    className="dark:invert"
                    src="/globe.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority />
                <ol className="list-inside list-decimal text-sm sm:text-left">
                    <li className="mb-2">
                        Empezar editando {" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)]">
                            app/page.tsx
                        </code>
                        .
                    </li>
                    <li>Guardar y ver cambios.</li>
                </ol>


                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Button 
                        text="Deploy en Vercel" 
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    />
                    <Button 
                        text="Docs" 
                        src="/next.svg"
                        alt="Next Logo"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        invert={false}
                    />
                    <Button 
                        text="Bioconductor" 
                        src="/globe.svg"
                        alt="Bioconductor"
                        href="pages/about"
                    />
                </div>
            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}/>
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}/>
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}/>
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    )
}