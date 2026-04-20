import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.atheneai.co",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://www.atheneai.co/features",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://www.atheneai.co/pricing",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: "https://www.atheneai.co/team",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}