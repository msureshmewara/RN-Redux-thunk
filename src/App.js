import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Card from "./common/Cards";
import { DATA } from "./common/DummyData";
import CommonListView from "./common/CommonListView";

function App() {
  return (
    <View style={styles.app}>
      <CommonListView>
        data={DATA}
        renderItems={Card()}
      </CommonListView>

      {Card()}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: "100%"
  }
});

export default App;
