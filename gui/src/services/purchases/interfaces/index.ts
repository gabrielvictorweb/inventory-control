import { Product } from "@/services/products/interfaces";

export interface ResponseWirelessInfo {
  wifi_avaiable: boolean;
}

export interface PurchaseInterface {
  id: number;
  quantity: number;
  authorId: number;
  productId: number;
  price: string;
  statusPurchaseId: number;
  product: Product;
  createdAt: string;
}