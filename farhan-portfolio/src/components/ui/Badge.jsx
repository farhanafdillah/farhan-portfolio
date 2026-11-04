export default function Badge({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
      {children}
    </span>
  );
}
