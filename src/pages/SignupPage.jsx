import { useMemo, useState } from 'react'
import RoleCard from '../components/RoleCard.jsx'
import SocialButton from '../components/SocialButton.jsx'

function Emoji({ value, className }) {
  return (
    <span className={className} role="img" aria-hidden="true">
      {value}
    </span>
  )
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.86-6.86C35.91 2.4 30.42 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.46 13.27 17.77 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.4c-.54 2.9-2.17 5.36-4.62 7.02l7.07 5.48C43.16 37.2 46.1 31.4 46.1 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.54 28.59c-.5-1.48-.79-3.06-.79-4.69s.29-3.21.79-4.69l-7.98-6.19C.92 16.36 0 20.05 0 23.9c0 3.85.92 7.54 2.56 10.88l7.98-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.42 0 11.91-2.12 15.89-5.75l-7.07-5.48c-1.96 1.32-4.46 2.1-8.82 2.1-6.23 0-11.54-3.77-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

function MicrosoftLogo() {
  return (
    <span className="grid grid-cols-2 gap-[2px]" aria-hidden="true">
      <span className="size-[7px] bg-[#F25022]" />
      <span className="size-[7px] bg-[#7FBA00]" />
      <span className="size-[7px] bg-[#00A4EF]" />
      <span className="size-[7px] bg-[#FFB900]" />
    </span>
  )
}

function YahooMark() {
  return (
    <span
      className="text-xs font-black tracking-tight text-white"
      aria-hidden="true"
    >
      Y!
    </span>
  )
}

const ROLES = [
  {
    key: 'employee',
    title: 'Employee',
    icon: <Emoji value="🧑‍💻" className="text-2xl leading-none" />,
  },
  {
    key: 'employer',
    title: 'Employer',
    icon: <Emoji value="💼" className="text-2xl leading-none" />,
  },
]

const PROVIDERS = [
  { key: 'Google', icon: <GoogleLogo />, variant: 'light' },
  { key: 'Microsoft', icon: <MicrosoftLogo />, variant: 'light' },
  { key: 'Yahoo', icon: <YahooMark />, variant: 'yahoo' },
]

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState(null)

  const selectedRoleTitle = useMemo(() => {
    const found = ROLES.find((r) => r.key === selectedRole)
    return found?.title ?? null
  }, [selectedRole])

  function onProviderClick(provider) {
    if (!selectedRole) {
      alert('Please select a role first.')
      return
    }

    console.log({
      role: selectedRoleTitle,
      provider,
    })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 p-4">
      <div className="relative w-full max-w-sm -translate-y-8">
        <div className="flex items-center justify-center gap-2 text-white">
          <div className="grid size-14 place-items-center rounded-lg bg-transparent">
            <Emoji value="💼" className="text-4xl leading-none drop-shadow" />
          </div>
          <div className="text-3xl font-extrabold leading-none tracking-wide">
            Hirabl
          </div>
        </div>

        <header className="mt-6 text-center text-white">
          <h1 className="text-base font-semibold">Sign Up to Hirabl</h1>
          <p className="mt-1 text-xs text-white/80">Choose your role to continue</p>
        </header>

        <div className="mt-6 grid grid-cols-2 gap-4">
            {ROLES.map((role) => (
              <RoleCard
                key={role.key}
                title={role.title}
                subtitle={role.subtitle}
                selected={selectedRole === role.key}
                onClick={() => setSelectedRole(role.key)}
                icon={role.icon}
              />
            ))}
          </div>

        <div className="my-6 flex items-center gap-3 text-[11px] text-white/85">
          <div className="h-px flex-1 bg-white/35" />
          <div>Or sign up with</div>
          <div className="h-px flex-1 bg-white/35" />
        </div>

        <div className="space-y-3">
            {PROVIDERS.map((provider) => (
              <SocialButton
                key={provider.key}
                provider={provider.key}
                icon={provider.icon}
                variant={provider.variant}
                onClick={() => onProviderClick(provider.key)}
              />
            ))}
          </div>

        <div className="mt-5 flex items-center gap-2 text-[11px] text-white/85">
          <div className="h-px flex-1 bg-white/25" />
          <div className="whitespace-nowrap text-center">
            Already have an account?{' '}
            <a
              href="#"
              className="font-semibold text-white/95 transition hover:text-white"
            >
              Log in
            </a>
          </div>
          <div className="h-px flex-1 bg-white/25" />
        </div>
      </div>
    </div>
  )
}

