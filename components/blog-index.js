import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div className="p-3 rounded-md mb-3 border">
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
        {page.frontMatter?.date ? (
          <p className="opacity-60 text-sm">{page.frontMatter.date}</p>
        ) : null}
      </div>
    );
  });
}
