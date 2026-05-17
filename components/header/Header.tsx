import { getPersonalCard } from '../../lib/queries'
import PersonalCard from './PersonalCard'
import HeaderClient from './HeaderClient'

export default async function Header() {
  const card = await getPersonalCard()

  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {card && <PersonalCard {...card} />}
          <HeaderClient />
        </div>
      </div>
    </header>
  )
}
