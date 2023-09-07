import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


function CategoryGridTitle({ title, color, onPress }) {
  return <View style={styles.gridItem}>
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
      onPress={onPress}
    >
      <View style={[styles.innerContiner, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', // to see shadow to IOS
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' // for IOS
  },
  innerContiner: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center'

  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});