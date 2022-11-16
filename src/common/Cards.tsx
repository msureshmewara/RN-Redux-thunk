import { SafeAreaView, View, Image, Text, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View style={styles.container}>
        <Image
          style={styles.img_profile}
          source={{
            uri:
              "https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg"
          }}
        />
        <View style={styles.text_container}>
          <Text style={styles.label_text}>props.first_name</Text>
          <Text style={styles.label_text}>props.last_name</Text>
          <Text style={styles.email}>props.email</Text>
        </View>
        <View>
          <Image
            style={styles.img_icons}
            source={{
              uri:
                "https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
            }}
          />
          <Image
            style={styles.img_icons}
            source={{
              uri:
                "https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png"
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%"
  },
  img_profile: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2
  },
  img_icons: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2
  },
  text_container: {
    flex: 1,
    marginLeft: 10
  },
  user_details_container: {
    flexDirection: "row",
    width: "100%"
  },
  label_text: {
    fontWeight: "bold",
    fontSize: "1rem",
    margin: 3,
    textAlign: "left"
  },
  email: {
    fontWeight: "bold",
    fontSize: "1rem",
    margin: 3,
    textAlign: "left"
  }
});
