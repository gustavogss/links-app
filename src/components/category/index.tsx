import { Text, Pressable, PressableProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

type CategoryProps = PressableProps & {
  title: string,
  icon: keyof typeof MaterialIcons.glyphMap,
  isSelected: boolean
}

export function Category({ title, icon, isSelected, ...rest }: CategoryProps) {
  const color = isSelected ? colors.green[300] : colors.gray[400]
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.title, { color }]}>{title}</Text>
    </Pressable>
  )
};