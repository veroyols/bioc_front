import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
    text: string;
    src: string;
    href: string;
    alt: string;
    invert?: boolean;
}
  
export default function Button({ text, src, href, alt, invert=true}: ButtonProps) {
    const isExternal = href.startsWith("http");

    const buttonContent = (
        <button 
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <Image
                className={invert ? "dark:invert" : ""}
                src={src}
                alt={alt}
                width={20}
                height={20}/>
            {text} 
        </button>
    );

    return isExternal ? ( 
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank">
            {buttonContent}
        </a>
    ) : (
        <Link href={href}>
            {buttonContent}
        </Link>
    );
 }
   