export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#09090b] text-white font-mono p-4">
      <div className="p-8 rounded-xl bg-[#111318] border border-white/10 text-center space-y-4 max-w-md">
        <span className="text-[#a3ff5f] text-sm font-bold">404 // ROUTE_NOT_FOUND</span>
        <h1 className="text-3xl font-bold font-sans">Page Not Found</h1>
        <p className="text-[#9296a1] text-xs leading-relaxed">
          The requested resource is absent or has been relocated in the digital workspace.
        </p>
        <a
          href="/"
          className="inline-block px-4 py-2 rounded bg-[#a3ff5f] text-black font-semibold text-xs transition hover:bg-[#b8ff82]"
        >
          Return Home →
        </a>
      </div>
    </div>
  );
}

