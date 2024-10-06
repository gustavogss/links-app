import { View, Text } from "react-native"
import { styles } from "./styles"
import { Header } from "@/components/header"
import { Category } from "@/components/category"
import { colors } from "@/styles/colors"

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Category title="Projetos" icon="code" isSelected />
      <Category title="Site" icon="language" isSelected={false} />
      <Category title="Videos" icon="movie" isSelected={false} />
    </View>
  )
};