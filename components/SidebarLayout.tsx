type Props = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-6 items-start justify-center xl:flex-row xl:gap-[120px]">
      <main className="w-full flex-1 min-w-0 mx-auto xl:mx-0" style={{ maxWidth: 'var(--content-max)' }}>
        {children}
      </main>

      <aside
        className="w-full mx-auto flex flex-col gap-4 xl:w-[var(--ad-slot-width)] xl:mx-0 xl:sticky xl:top-20 xl:flex-shrink-0"
        aria-label="Advertisement"
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

