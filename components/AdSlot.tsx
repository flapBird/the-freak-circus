'use client';

type AdSlotProps = {
  slotId: string;
  format?: 'vertical' | 'horizontal' | 'rectangle';
  className?: string;
  label?: string;
};

export default function AdSlot({
  slotId,
  format = 'vertical',
  className = '',
  label,
}: AdSlotProps) {
  const dimensions: Record<NonNullable<AdSlotProps['format']>, string> = {
    vertical: 'w-[160px] min-h-[600px]',
    horizontal: 'w-full min-h-[90px]',
    rectangle: 'w-[300px] min-h-[250px]',
  };

  return (
    <div
      className={`ad-slot flex flex-col gap-1 ${dimensions[format]} ${className}`}
      aria-label={label ?? 'Advertisement'}
      role="complementary"
    >
      <span className="text-[10px] text-circus-muted uppercase tracking-widest">Ad</span>
      <span className="text-[10px] text-circus-muted opacity-50">{slotId}</span>
    </div>
  );
}
