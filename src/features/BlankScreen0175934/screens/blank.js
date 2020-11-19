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

  state = {
    TextInput_6: "",
    TextInput_75: "",
    TextInput_79: "",
    TextInput_85: "",
    TextInput_89: "",
    TextInput_91: "",
    TextInput_95: "",
    TextInput_108: "",
    TextInput_100: "",
    TextInput_118: "",
    TextInput_121: ""
  }

  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Morning Plan"
        editable={false}
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <View style={styles.View_9}>
        <View>
          <View>
            <View />
            <View>
              <TextInput
                placeholder="9"
                style={styles.TextInput_75}
                value={this.state.TextInput_75}
                onChangeText={nextValue =>
                  this.setState({ TextInput_75: nextValue })
                }
              />
            </View>
          </View>
          <View>
            <View>
              <TextInput
                placeholder="10"
                style={styles.TextInput_79}
                value={this.state.TextInput_79}
                onChangeText={nextValue =>
                  this.setState({ TextInput_79: nextValue })
                }
              />
            </View>
            <View>
              <TextInput
                placeholder="11"
                style={styles.TextInput_85}
                value={this.state.TextInput_85}
                onChangeText={nextValue =>
                  this.setState({ TextInput_85: nextValue })
                }
              />
            </View>
          </View>
          <View>
            <View>
              <TextInput
                placeholder="12"
                style={styles.TextInput_89}
                value={this.state.TextInput_89}
                onChangeText={nextValue =>
                  this.setState({ TextInput_89: nextValue })
                }
              />
            </View>
          </View>
        </View>
        <View>
          <View>
            <View>
              <TextInput
                placeholder=":00"
                editable={false}
                value={this.state.TextInput_91}
                onChangeText={nextValue =>
                  this.setState({ TextInput_91: nextValue })
                }
              />
            </View>
            <View>
              <TextInput
                placeholder="Sample text input placeholder"
                value={this.state.TextInput_95}
                onChangeText={nextValue =>
                  this.setState({ TextInput_95: nextValue })
                }
              />
            </View>
          </View>
          <View>
            <View>
              <TextInput
                placeholder="Sample text input placeholder"
                value={this.state.TextInput_108}
                onChangeText={nextValue =>
                  this.setState({ TextInput_108: nextValue })
                }
              />
            </View>
            <View>
              <TextInput
                placeholder="Sample text input placeholder"
                value={this.state.TextInput_100}
                onChangeText={nextValue =>
                  this.setState({ TextInput_100: nextValue })
                }
              />
            </View>
          </View>
          <View>
            <View>
              <TextInput
                placeholder="Sample text input placeholder"
                value={this.state.TextInput_118}
                onChangeText={nextValue =>
                  this.setState({ TextInput_118: nextValue })
                }
              />
              <TextInput
                placeholder=":15"
                editable={false}
                value={this.state.TextInput_121}
                onChangeText={nextValue =>
                  this.setState({ TextInput_121: nextValue })
                }
              />
            </View>
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
  View_59: {},
  View_1: { alignContent: "space-between" },
  TextInput_6: { fontFamily: "Montserrat-Regular", textAlign: "center" },
  View_9: { width: 0, flexDirection: "row" },
  View_10: {},
  View_15: {},
  View_16: {},
  View_17: {},
  TextInput_75: { width: "018%" },
  View_18: {},
  View_19: {},
  TextInput_79: { width: "18%" },
  View_20: {},
  TextInput_85: { width: "18%" },
  View_21: {},
  View_22: {},
  TextInput_89: { width: "18%" },
  View_11: {},
  View_23: {},
  View_24: {},
  TextInput_91: {},
  View_25: {},
  TextInput_95: {},
  View_29: {},
  View_30: {},
  TextInput_108: {},
  View_31: {},
  TextInput_100: {},
  View_32: {},
  View_33: {},
  TextInput_118: {},
  TextInput_121: {},
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
