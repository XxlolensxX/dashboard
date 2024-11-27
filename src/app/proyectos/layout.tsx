import { Navigation } from "@/components/Navigation/Navigation"
import { montserrat } from "../fonts"

import styles from './layout.module.scss'

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className={`${montserrat.className} ${styles.mainGrid}`} >
      <Navigation />
      {children}
    </main>
  )
}