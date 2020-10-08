import React,{Component} from "react";
import {Text,View,Stylesheet,TextInput,TouchableOpacity} from "react-native" ;
import {Header} from "react-native-elements";

export default class HomeScreen extends React.Component(){

    getWord=(word)=>{
        var url = "https://whitehat-dictionary.glitch.me/?word=" + word ;
        return fetch(url)
        .then((data)=>{
            return data.json(
                .then((response){
                    var responseObject =JSON.parse(response)
                    var word  = responseObject.word 
                    var lexicalCategoryO = responseObject.result[0].lexicalEnteries[0].lexicalCategory.text
                }
            )
        }
    }

<TextInput style = {styles.inputBox} onChangeText={text=>{
    this.setState({
        text : text ,
        isSearchPressed : false,
        word : "Loading...",
        example : [],
        definition: "",
        lexicalCategory : ''
    })

}}
  value ={this.state.text}/>

  <TouchableOpacity styles={styles.searchButton}  onPress={()=>{
    this.setState =({
            isSearchPressed : true
    })
    this.getWord(this.state.text)
  }}>

  </TouchableOpacity>

  render(){
      return(
          <View styles = {styles.deailsContainer}>
          <Text styes = {Styles.detailedText}>
          Word : {""}
          </Text>
          <Text style={{fontSize : 18}}>
          {this.state.word}
          </Text>

          <View styles = {styles.deailsContainer}>
          <Text styes = {Styles.detailedText}>
          type : {""}
          </Text>
          <Text style={{fontSize : 18}}>
          {this.state.lexicalCategory}
          </Text>
          </View>

          <View styles = {styles.deailsContainer}>
          <Text styes = {Styles.detailedText}>
          definition: {""}
          </Text>
          <Text style={{fontSize : 18}}>
          {this.state.definition}
          </Text>
          </View>

          </View>

          
      )
  }

}


const styles = Stylesheet.create({
    deailsContainer : {
        flex : 1
    },
    detailedText : {
        fontSze : 11 
    }
})
