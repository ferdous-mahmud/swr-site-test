import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import Image from "next/image";

export default function ProjectIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/projects").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div className="p-3 rounded-md mb-3 border grid grid-cols-2 gap-2 flex">
        <div className="object-cover mr-1">
        <Image
        className="rounded-md"
        src={page.frontMatter.image}
        alt="Picture of the author"
        width={300}
        height={300}
        />
        </div>
        <div className="flex flex-col grow">
        <h3 className="-mt-1 -mb-3">
          <Link href={page.route}>
            <A style={{ color: "inherit", textDecoration: "none" }}>
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-90">
          {page.frontMatter?.description}{" "}
          <Link href={page.route}>{more + " →"}</Link>
        </p>
        <div className="mt-auto mb-2">
        {page.frontMatter?.date ? (
          <p className="opacity-60 text-sm">{page.frontMatter.date}</p>
        ) : null}
        </div>
        </div>
      </div>
    );
  });
}
