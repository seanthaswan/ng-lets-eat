export class Recipe {
  public name: string;
  public tags: string[];
  public description: string;
  public imagePath: string;
  public imageStyles: object;

  constructor(name: string, tags: string[], desc: string, imagePath: string) {
    this.name = name;
    this.tags = tags;
    this.description = desc;
    this.imagePath = imagePath;
    this.imageStyles = {
      maxHeight: "100px",
      height: "100px",
      background: `url(${imagePath}) center center no-repeat`,
      backgroundSize: "cover",
      marginBottom: "15px",
      borderRadius: "2px"
    };
  }
}
