export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gray-50">
      <div className="relative mx-auto w-full max-w-lg h-full min-h-screen bg-white">
        <main>{children}</main>
        <div id="portal" />
      </div>
    </div>
  );
}
