import { newsData } from "@/lib/news"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"

// This is required for static export to work with dynamic routes
export async function generateStaticParams() {
    return newsData.map((post) => ({
        slug: post.slug,
    }))
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = newsData.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Navigation />

            <main className="min-h-screen pt-12 pb-24">
                {/* Header / Hero */}
                <div className="container mx-auto px-4 mb-12">
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver al Inicio
                        </Button>
                    </Link>

                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                            Noticias
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
                        <div className="flex items-center justify-center text-muted-foreground gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content */}
                <article className="container mx-auto px-4 max-w-3xl">
                    <div
                        className="prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-accent prose-img:rounded-xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Navigation to other news (optional, simple Implementation) */}
                <div className="container mx-auto px-4 max-w-3xl mt-20 pt-10 border-t">
                    <h3 className="text-2xl font-bold mb-6">Más Noticias</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {newsData.filter(p => p.id !== post.id).slice(0, 2).map((otherPost) => (
                            <Link key={otherPost.id} href={`/news/${otherPost.slug}`} className="group block border rounded-xl p-4 hover:border-accent transition-colors">
                                <h4 className="font-bold group-hover:text-accent transition-colors mb-2">{otherPost.title}</h4>
                                <p className="text-sm text-muted-foreground">{otherPost.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
