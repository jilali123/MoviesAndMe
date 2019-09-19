// Components/Search.js

import {
    getFilmsFromApiWithSearchedText
} from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js

import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList, 
    Text
} from 'react-native'

import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

const styles = StyleSheet.create({
    main_container: {
        marginTop: 25,
        flex: 1
    },
    textinput: {
        marginLeft: 0,
        marginRight: 0,
        height: 50,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        paddingLeft: 5
    }
})


export default class Search extends React.Component {
    constructor(props) {
        super(props)
        // Ici on va créer les propriétés de notre component custom Search
        this._films = []
    }
      _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {//console.log(data)
            this._films = data.results
            this.forceUpdate()
        });
      }

    render() {
        console.log(this.props)
        return ( 
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress = {() => {this._loadFilms()}}/> 
                <FlatList 
                    data={this._films}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => <FilmItem film={item}/>} 
                />
            </View >
        )
    }
}