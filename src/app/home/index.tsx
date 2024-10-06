import { View, Text } from "react-native"
import { styles } from "./styles"
import { Header } from "@/components/header"
import { Category } from "@/components/category"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
      <Link name="Snippets"
        url="https://www.youtube.com/watch?v=i8GyOz81oV0&t=694s"
        onDetails={() => console.log("Clicou")} />
    </View>
  )
};