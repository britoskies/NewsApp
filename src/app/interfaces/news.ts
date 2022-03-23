interface iSource {
    name: string
}

interface iArticle {
    source: iSource,
    author: string,
    title: string,
    description: string,
    urlToImage: string,
    publishedAt: string
}

export interface iNews {
    articles: iArticle
}