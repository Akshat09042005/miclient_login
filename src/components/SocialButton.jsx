export default function SocialButton({
  provider,
  onClick,
  icon,
  variant = 'light',
}) {
  const isYahoo = variant === 'yahoo'

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full rounded-md border px-4 py-2.5 transition',
        'text-xs font-medium shadow-sm hover:shadow active:shadow-sm',
        isYahoo
          ? 'border-purple-700 bg-purple-600 text-white hover:bg-purple-500'
          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
      ].join(' ')}
    >
      <span className="flex items-center justify-center gap-2">
        <span
          className={[
            'grid size-6 place-items-center rounded-sm',
            isYahoo ? 'bg-transparent' : 'bg-white',
          ].join(' ')}
        >
          {icon ?? (
            <span className="text-xs font-semibold">{provider.slice(0, 1)}</span>
          )}
        </span>
        <span>Continue with {provider}</span>
      </span>
    </button>
  )
}

