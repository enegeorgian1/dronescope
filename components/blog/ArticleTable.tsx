import type { BlogTable } from "@/lib/blog";

interface ArticleTableProps {
  table: BlogTable;
}

export default function ArticleTable({ table }: ArticleTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm text-left">
        <caption className="sr-only">{table.caption}</caption>
        <thead>
          <tr className="bg-surface border-b border-white/10">
            {table.headers.map((header) => (
              <th key={header} className="px-5 py-4 font-semibold text-text">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}