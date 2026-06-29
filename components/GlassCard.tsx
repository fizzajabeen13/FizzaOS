type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-card soft-glow p-6 ${className}`}>
      {children}
    </div>
  );
}