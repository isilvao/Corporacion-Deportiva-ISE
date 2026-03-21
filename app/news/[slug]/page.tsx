import { newsData } from "@/lib/news"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { getImagePath } from "@/lib/utils"

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
                    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                        <Image
                            src={getImagePath(post.image)}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ objectPosition: post.imagePosition || "center" }}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Content */}
                <article className="container mx-auto px-4 max-w-4xl">
                    <div
                        className="prose prose-lg dark:prose-invert prose-headings:text-primary prose-a:text-accent prose-img:rounded-2xl mx-auto prose-p:leading-relaxed prose-strong:text-accent max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Navigation to other news */}
                <div className="container mx-auto px-4 max-w-4xl mt-24 pt-16 border-t border-primary/10">
                    <h3 className="text-3xl font-bold mb-10 text-center">Otras Noticias de Interés</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {newsData.filter(p => p.id !== post.id).slice(0, 2).map((otherPost) => (
                            <Link key={otherPost.id} href={`/news/${otherPost.slug}`} className="group flex flex-col items-start p-6 rounded-2xl bg-secondary/20 border border-transparent hover:border-accent/30 hover:bg-secondary/40 transition-all duration-300">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{otherPost.date}</span>
                                <h4 className="text-xl font-bold group-hover:text-accent transition-colors mb-3 leading-snug">{otherPost.title}</h4>
                                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{otherPost.description}</p>
                                <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Leer más <ArrowLeft className="h-4 w-4 rotate-180" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
