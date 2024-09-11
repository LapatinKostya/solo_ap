import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Link href={'/termsOfService'}>Click</Link>
      <Link href={'/privacyPolicy'}>Click</Link>
    </div>
  )
}
