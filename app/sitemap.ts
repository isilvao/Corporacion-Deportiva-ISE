import type { MetadataRoute } from "next"
import { newsData } from "@/lib/news"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://corpoise.com"

    // Static routes
    const routes = [
        "",
        "/about",
        "/categories",
        "/achievements",
        "/statutes",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }))

    // Dynamic news routes
    const newsRoutes = newsData.map((news) => ({
        url: `${baseUrl}/news/${news.slug}`,
        lastModified: new Date(), // Ideally this would come from the news data
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }))

    return [...routes, ...newsRoutes]
}
