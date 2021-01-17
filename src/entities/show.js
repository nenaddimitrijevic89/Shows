class Show{
    constructor(show){
        this.id = show.id;
        this.name = show.name;
        this.summary = show.summary;
        this.rating = show.rating.average;
        this.mediumImage = show.image.medium;
        this.largeImage = show.image.original;
    }
}

export { Show };