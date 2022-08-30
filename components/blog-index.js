import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div className="bg-gray-300 p-3 rounded-md">
        <h3 className="dark:text-black -mt-1 -mb-3">
          <Link href={page.route}>
            <A style={{ color: "inherit", textDecoration: "none" }}>
              {page.meta?.title || page.frontMatter?.title || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-90 dark:text-gray-900">
          {page.frontMatter?.description}{" "}
          <Link href={page.route}>{more + " →"}</Link>
        </p>
        {page.frontMatter?.date ? (
          <p className="opacity-60 text-sm dark:text-gray-900">{page.frontMatter.date}</p>
        ) : null}
      </div>
    );
  });
}
