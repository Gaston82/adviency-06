export interface GiftStructure {
  id: string;
  name: string;
  to: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface GiftsStateStructure {
  gifts: GiftStructure[];
}
