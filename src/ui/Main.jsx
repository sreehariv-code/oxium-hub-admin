export default function Main({ children }) {
  return (
    <main className="flex-grow max-h-screen overflow-y-auto pb-[2rem]">
      {children}
    </main>
  );
}
