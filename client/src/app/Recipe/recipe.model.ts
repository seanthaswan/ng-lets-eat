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
      maxHeight: "200px",
      height: "200px",
      background: `url(${imagePath}) center center no-repeat`,
      backgroundSize: "cover",
      marginBottom: "15px"
    };
  }
}
