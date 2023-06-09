export class RecipeModel {
  public name?: string;
  public description?: string;
  public imagePath?: string;

  constructor(
    name?: string,
    description?: string,
    imagePath?: string
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}


export interface RecipeInterface {
  name?: string;
  description?: string;
  imagePath?: string;
}
