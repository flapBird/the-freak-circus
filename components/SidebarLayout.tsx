type Props = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="page-container page-section">
      <main className="w-full max-w-[900px] mx-auto">
        {children}
      </main>
    </div>
  );
}
