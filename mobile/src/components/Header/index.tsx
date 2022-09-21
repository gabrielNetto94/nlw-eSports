import {View, Text, ViewProps} from "react-native";

import {styles} from "./styles";

interface HeaderProps extends ViewProps {
  title: string;
  subTitle: string;
}

export function Header({title, subTitle, ...rest}: HeaderProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
}
