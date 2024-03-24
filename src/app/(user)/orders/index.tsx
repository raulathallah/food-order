import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";
const product = products[1];
export default function OrderScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}