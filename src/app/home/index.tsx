import { View, Text } from "react-native"
import { styles } from "./styles"
import { Header } from "@/components/header"
import { Category } from "@/components/category"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
    </View>
  )
};