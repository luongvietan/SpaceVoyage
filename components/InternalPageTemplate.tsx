import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type InternalPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function InternalPageTemplate({
  eyebrow,
  title,
  description,
}: InternalPageTemplateProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071126] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(122,170,233,0.34),transparent_42%),radial-gradient(circle_at_90%_90%,rgba(18,39,72,0.78),transparent_48%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
        <Link
          href="/"
          className="liquid-glass refine-link mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 font-body"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <div className="liquid-glass max-w-4xl rounded-[32px] p-8 md:p-12">
          <p className="text-xs tracking-[0.16em] text-white/75 uppercase font-body">{eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-[0.9] tracking-[-1px] font-heading italic sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 font-body">{description}</p>
        </div>
      </div>
    </main>
  );
}
