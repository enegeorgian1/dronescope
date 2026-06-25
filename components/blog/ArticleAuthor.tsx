import { blogAuthor } from "@/lib/blog-author";

export default function ArticleAuthor() {
  return (
    <aside className="mt-8 p-6 rounded-2xl border border-white/10 bg-surface flex flex-col sm:flex-row gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-lg">
        DS
      </div>
      <div>
        <p className="font-semibold text-text">{blogAuthor.name}</p>
        <p className="text-sm text-accent mb-2">{blogAuthor.role}</p>
        <p className="text-sm text-text-secondary leading-relaxed">{blogAuthor.bio}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {blogAuthor.credentials.map((cred) => (
            <span
              key={cred}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-text-secondary"
            >
              {cred}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}