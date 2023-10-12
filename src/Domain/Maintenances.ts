class Maintenance {
  private id?: string;
  private description: string;
  private carId: number;
  private date: string;

  construction(
    id: string | undefined,
    description: string,
    carId: number,
    date: string
  ) {
    this.id = id;
    this.description = description;
    this.carId = carId;
    this.date = date;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription() {
    return this.description;
  }

  public setCarId(carId: number) {
    this.carId = carId;
  }

  public getCarId() {
    return this.carId;
  }

  public setDate(date: string) {
    this.date = date;
  }

  public getDate() {
    return this.date;
  }
}

export default Maintenance;