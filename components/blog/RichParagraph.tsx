import Link from "next/link";
import type { RichSegment } from "@/lib/blog";

interface RichParagraphProps {
  segments: RichSegment[];
  className?: string;
}

export default function RichParagraph({ segments, className }: RichParagraphProps) {
  return (
    <p className={className ?? "text-text-secondary text-[15px] leading-relaxed mb-4 last:mb-0"}>
      {segments.map((segment, i) => {
        if (segment.type === "text") {
          return <span key={i}>{segment.content}</span>;
        }
        if (segment.external) {
          return (
            <a
              key={i}
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accessible"
            >
              {segment.content}
            </a>
          );
        }
        return (
          <Link key={i} href={segment.href} className="link-accessible">
            {segment.content}
          </Link>
        );
      })}
    </p>
  );
}