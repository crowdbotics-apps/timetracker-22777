import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_6: "" }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <View style={styles.View_9}>
        <View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
          </View>
        </View>
        <View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
          </View>
        </View>
        <View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
          </View>
        </View>
        <View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
          </View>
        </View>
        <View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
            <View />
          </View>
          <View>
            <View />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: { alignContent: "space-between" },
  TextInput_6: {},
  View_9: { flexDirection: "row" },
  View_10: {},
  View_15: {},
  View_16: {},
  View_17: {},
  View_18: {},
  View_19: {},
  View_20: {},
  View_21: {},
  View_22: {},
  View_11: {},
  View_23: {},
  View_24: {},
  View_25: {},
  View_29: {},
  View_30: {},
  View_31: {},
  View_32: {},
  View_33: {},
  View_12: {},
  View_37: {},
  View_38: {},
  View_39: {},
  View_40: {},
  View_41: {},
  View_42: {},
  View_43: {},
  View_44: {},
  View_13: {},
  View_34: {},
  View_35: {},
  View_36: {},
  View_46: {},
  View_47: {},
  View_48: {},
  View_49: {},
  View_50: {},
  View_14: {},
  View_52: {},
  View_53: {},
  View_54: {},
  View_55: {},
  View_56: {},
  View_57: {},
  View_58: {},
  View_59: {}
})
