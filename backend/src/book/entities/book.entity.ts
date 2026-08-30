export class BookEntity{
    title:         string
    author:        string
    description:   string
    publishedYear: number
    pages:        number
    createdAt: Date
    userId: number

    constructor(partial: Partial<BookEntity>) {
        Object.assign(this, partial);  
    }
}