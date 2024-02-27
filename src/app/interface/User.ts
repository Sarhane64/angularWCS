// export interface User {
//   title: string;
//   quantity: number;
//   date: Date;
//   constact: string;
// }

export class Order {
  constructor(
    public title: string,
    public quantity: number,
    public date: Date,
    public contact: string
  ) {}
}
