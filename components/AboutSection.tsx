import { PortableText, type PortableTextBlock } from 'next-sanity'

export interface AboutSectionProps {
  heading?: string
  body?: PortableTextBlock[]
}

export default function AboutSection({ heading, body }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{heading}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto prose prose-lg text-muted-foreground">
          {body && <PortableText value={body} />}
        </div>
      </div>
    </section>
  )
}
