import { SafeAreaView, FlatListView } from "react-native";

const CommonListView = (props) => {
  return (
    <SafeAreaView>
      <FlatListView
        data={props.data}
        renderItems={props.renderItems}
        keyExtractor={(item) => item.id}
      ></FlatListView>
    </SafeAreaView>
  );
};
export default CommonListView;
