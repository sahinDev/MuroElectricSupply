export function Button({ children, className = '', variant = 'primary', size, ...props }) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3',
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl font-semibold transition-colors duration-200 ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size] ?? ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
