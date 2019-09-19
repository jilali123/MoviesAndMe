// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    
  render() {
    console.log(this.props)
    const film = this.props.film
    return (
      
      <View style={styles.main_container}>        
        <Image style={styles.image_item} source={{uri: "image"}}/>
        <View style={styles.view_content}>
            < View style = {
                styles.view_header
            } >
                < Text style = {
                    styles.title_text
                } > {film.title} </Text>
                < Text style = {
                    styles.vote_text
                } > {film.vote_average}</Text>
            </View>
            <View style={styles.description_text}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            </View>
            <View style={styles.date_text}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
            </View>                    
            
        </View>

        {/* <Text style={styles.title_text}>Titre du film</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    
  },
  image_item:{
    flex:1,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 5,
    backgroundColor: 'grey',
  },
  view_content: {
      margin: 5,
    flex:2,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'column'
  },
    view_header: {
        flexDirection: 'row',
        flex: 1
    },

  title_text: {
    flexWrap: 'wrap',
    flex: 4,
    fontSize: 15,
    fontWeight: 'bold'
  },
    vote_text: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold'
    },
  description_text: {
      flex: 3,
      fontSize: 12
  },
  date_text: {
      flex: 1,
      textAlign: 'right'
  }

})

export default FilmItem