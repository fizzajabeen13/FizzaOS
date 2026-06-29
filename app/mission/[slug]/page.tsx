import Link from "next/link";
import { notFound } from "next/navigation";
import { missions } from "@/data/missions";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

type MissionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MissionDetailPage({ params }: MissionPageProps) {
  const { slug } = await params;

  const mission = missions.find((item) => item.slug === slug);

  if (!mission) {
    notFound();
  }

  const screenshots =
    mission.screenshots || (mission.screenshot ? [mission.screenshot] : []);

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white">
      <section className="os-container">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to FizzaOS
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            {mission.code}
          </p>

          <h1 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
            {mission.name}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {mission.overview}
          </p>

          <div className="mt-8">
            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-blue-300">
              {mission.status}
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Mission Metrics
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            SYSTEM STATUS
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <MetricCard label="Status" value={mission.status} />
            <MetricCard label="Version" value={mission.version} />
            <MetricCard label="Completion" value={mission.completion} />
            <MetricCard label="Category" value={mission.category} />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoBlock title="Overview" content={mission.overview} />
          <InfoBlock title="Problem" content={mission.problem} />
          <InfoBlock title="Solution" content={mission.solution} />
          <ListBlock title="Features" items={mission.features} />
          <ListBlock title="Challenges Faced" items={mission.challenges} />
          <ListBlock title="Architecture" items={mission.architecture} />
          <ListBlock title="Tech Stack" items={mission.tech} />
          <ListBlock title="Future Plans" items={mission.futurePlans} />

          <ProjectGallery
            screenshots={screenshots}
            projectName={mission.name}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={mission.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Live Demo <ExternalLink size={16} />
          </a>

          <a
            href={mission.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            Source Code <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-7 text-slate-400">{content}</p>
    </div>
  );
}

function ListBlock({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>

      <ul className="mt-4 space-y-3 text-slate-400">
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}