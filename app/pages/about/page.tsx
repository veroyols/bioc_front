//import Image from "next/image";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutPage() {
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
            </main>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <Button 
                    text="Volver" 
                    src="/file.svg"
                    alt="Volver"
                    href="/"
                />
            </footer>
        </div>
    )
}