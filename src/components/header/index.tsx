import { View, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from "@/styles/colors"

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.8} >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  )
};