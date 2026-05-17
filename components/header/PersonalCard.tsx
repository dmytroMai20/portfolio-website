import Image from 'next/image'

export interface PersonalCardProps {
    name?: string | null
    title?: string | null
    email?: string | null
    phone?: string | null
    avatarUrl?: string | null
}

export default function PersonalCard({ name, title, email, phone, avatarUrl }: PersonalCardProps) {
    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt={name ?? ''}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>
            <div>
                <h1 className="text-xl font-bold text-foreground">{name}</h1>
                <p className="text-sm text-muted-foreground">{title}</p>
                <div className="mt-1 space-y-1">
                    {email && <p className="text-xs text-muted-foreground">{email}</p>}
                    {phone && <p className="text-xs text-muted-foreground">{phone}</p>}
                </div>
            </div>
        </div>
    )
}
