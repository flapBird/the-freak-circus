import AdSlot from './AdSlot';

type Props = {
  children: React.ReactNode;
  leftAdId?: string;
  rightAdId?: string;
};

export default function SidebarLayout({
  children,
  leftAdId = 'left-sidebar-ad',
  rightAdId = 'right-sidebar-ad',
}: Props) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 flex gap-4 items-start justify-center">
      <aside
        className="hidden xl:flex flex-col gap-4 sticky top-20 flex-shrink-0"
        aria-label="Left advertisement"
        style={{ width: 'var(--ad-slot-width)' }}
      >
        <AdSlot slotId={leftAdId} format="vertical" label="Left sidebar advertisement" />
      </aside>

      <main className="flex-1 min-w-0 w-full" style={{ maxWidth: 'var(--content-max)' }}>
        {children}
      </main>

      <aside
        className="hidden xl:flex flex-col gap-4 sticky top-20 flex-shrink-0"
        aria-label="Right advertisement"
        style={{ width: 'var(--ad-slot-width)' }}
      >
        <AdSlot slotId={rightAdId} format="vertical" label="Right sidebar advertisement" />
        <AdSlot
          slotId={`${rightAdId}-2`}
          format="rectangle"
          className="w-[160px]"
          label="Right sidebar rectangle advertisement"
        />
      </aside>
    </div>
  );
}
