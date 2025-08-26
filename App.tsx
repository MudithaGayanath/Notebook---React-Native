import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const [city, setCity] = useState<string>("");

  const cities = ["Colombo", "Kandy", "Anuradapura", "Galla", "Mathara", "Deraniyagala"]

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    console.log(result);

    //  Alert.alert()
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View>
        <Text style={styles.header}>
          Create Account
        </Text>
        <Text style={styles.subTitle}>Fill following details </Text>
        <Pressable onPress={pickImage} style={styles.imageContainer}>
          {image ? (<Image source={{ uri: image }} />) :
            (<View>
              <Text>+</Text>
              <Text>Add your image</Text>
            </View>)}
        </Pressable>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Full Name</Text>
            <TextInput style={styles.input} value='dsfdf' />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>User Name</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Email</Text>
            <TextInput style={styles.input} keyboardType='email-address' />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>Confirm Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.lable}>City</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={city}
                style={styles.picker}
                onValueChange={(value)=>{setCity(value)}}
              >
                <Picker.Item label='Select City' value={""} />
                {cities.map((city,index)=>( <Picker.Item key={index} label={city} value={city} />))}
              </Picker>
            </View>
          </View>

              <View style={styles.buttonContainer}>
                <Pressable style={styles.backButton} >
                  <Text  style={styles.backButtonText} >Go Back</Text>
                </Pressable>
                <Pressable style={styles.saveButton} >
                  <Text  style={styles.saveButtonText} >Save</Text>
                </Pressable>
              </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth:1,
    borderColor: "#3f3ef3eff",
    borderRadius:6
  },
  picker: {
     borderWidth:1,
    borderColor: "#3f3ef3eff",
    borderRadius:6
  },
  inputContainer: {
    marginBottom: 20
  },
  lable: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#3f3ef3eff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "white"
  },
  form: { flex: 1 },
  imageContainer: { alignItems: "center", marginBottom: 30 },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20
  }
  ,
  header: {
    alignItems: "center",
    marginBottom: 40
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10
  }
  ,
  subTitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20
  },
  backButton:{
    flex:0.45,
    backgroundColor:"transparent",
    paddingVertical:15,
    borderRadius:8,
    alignItems:"center",
    borderWidth:2,
    borderColor:"#999999"
  },
  backButtonText:{
    color:"black",
    fontSize:16,
    fontWeight:"bold"
  },

    saveButton:{
    flex:0.45,
    backgroundColor:"#4A90E2",
    paddingVertical:15,
    borderRadius:8,
    alignItems:"center",
    borderWidth:2,
    borderColor:"#999999"
  },
  saveButtonText:{
    color:"black",
    fontSize:16,
    fontWeight:"bold"
  }


});
