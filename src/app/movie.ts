
export interface Movie {
    title: string;
    description: string;
    images: {
        posterArt: {
            url:string,
            width:number,
            height:number
        }
    }
    releaseYear: number;
}