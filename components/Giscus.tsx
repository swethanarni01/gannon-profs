"use client";

import { useEffect, useRef } from "react";

const GISCUS_REPO = "swethanarni01/gannon-profs";
const GISCUS_REPO_ID = "R_kgDOSWg_tQ";
const GISCUS_CATEGORY = "General";
const GISCUS_CATEGORY_ID = "DIC_kwDOSWg_tc4C8faC";

export default function Giscus({ term }: { term: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    const attrs: Record<string, string> = {
      "data-repo": GISCUS_REPO,
      "data-repo-id": GISCUS_REPO_ID,
      "data-category": GISCUS_CATEGORY,
      "data-category-id": GISCUS_CATEGORY_ID,
      "data-mapping": "specific",
      "data-term": term,
      "data-strict": "1",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "top",
      "data-theme": "light",
      "data-lang": "en",
      "data-loading": "lazy",
    };
    Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));

    ref.current.appendChild(script);
  }, [term]);

  if (GISCUS_REPO_ID.startsWith("__") || GISCUS_CATEGORY_ID.startsWith("__")) {
    return (
      <section className="bubble-card rounded-3xl p-6">
        <h3 className="font-bold text-lg text-slate-900 mb-2">Reviews &amp; Comments</h3>
        <p className="text-sm text-slate-600">
          The Giscus comment widget is configured but the repository owner needs to install the
          Giscus GitHub App and set the repository &amp; category IDs to enable it.
        </p>
      </section>
    );
  }

  return (
    <section className="bubble-card rounded-3xl p-6">
      <h3 className="font-bold text-lg text-slate-900 mb-3">Reviews &amp; Comments</h3>
      <p className="text-xs text-slate-500 mb-4">
        Comments are powered by GitHub Discussions. You will need a GitHub account to post.
      </p>
      <div ref={ref} />
    </section>
  );
}
