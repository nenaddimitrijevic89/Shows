class Image{
    constructor(image){
        this.id = image.id;
        this.main = image.main;
        this.type = image.type;
        this.original = image.resolutions?.original?.url || "";
        this.medium = image.resolutions?.medium?.url || "";
    }
}

export { Image };