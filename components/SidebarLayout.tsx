type Props = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 flex gap-6 items-start justify-center">
      <main className="flex-1 min-w-0" style={{ maxWidth: 'var(--content-max)' }}>
        {children}
      </main>

      <aside
        className="hidden xl:flex flex-col gap-4 sticky top-20 flex-shrink-0"
        aria-label="Advertisement"
        style={{ width: 'var(--ad-slot-width)' }}
      >
        <div id="container-ad3a879f7acefad94dcedffe0b2a6b57" />
        <script
          async={true}
          data-cfasync="false"
          src="https://pl29635653.effectivecpmnetwork.com/ad3a879f7acefad94dcedffe0b2a6b57/invoke.js"
        />
      </aside>
    </div>
  );
}
