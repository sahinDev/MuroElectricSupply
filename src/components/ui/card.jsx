export function Card({ className = '', children, ...props }) {
  return (
    <div className={`rounded-3xl bg-white shadow-sm ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`p-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
