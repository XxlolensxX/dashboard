import { montserrat } from "../fonts"

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <main className={`${montserrat.className}`} >
          {children}
        </main> 
      </body>
    </html>
  )
}