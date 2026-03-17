export default function RoleCard({
  title,
  subtitle,
  selected,
  onClick,
  icon,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'group relative w-full rounded-md border px-4 py-3 text-center transition',
        'bg-slate-100/90 hover:bg-slate-100 border-slate-300/70',
        'shadow-sm hover:shadow active:shadow-sm',
        selected
          ? 'border-blue-500 bg-white/80 shadow ring-2 ring-blue-100'
          : 'ring-0',
      ].join(' ')}
    >
      <div className="mx-auto grid place-items-center">
        <div className="grid size-10 place-items-center rounded-md bg-transparent">
          {icon ?? (
            <span className="text-base font-semibold text-slate-700">
              {title?.slice(0, 1) ?? '?'}
            </span>
          )}
        </div>

        <div className="mt-2 text-xs font-semibold text-slate-700">
          Sign Up As {title}
        </div>
        <div className="mt-1 text-[11px] text-slate-500">{subtitle}</div>
      </div>
    </button>
  )
}

