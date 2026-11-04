"use client";
export default function SectionTitle({ children }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
      <div
        className="mt-3 mx-auto h-1 w-16 rounded-full"
        style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
      />
    </div>
  );
}
