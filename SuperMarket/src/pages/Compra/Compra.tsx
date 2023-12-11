import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Styles from './Styles'



const Compra = () => {
   
  return (
    <ScrollView>
      <View>
        <Card >
          <Card.Title style={{ fontSize: 20, color: '#848484' }}>Finalizar Pedido</Card.Title>
          <View style={Styles.container}>
            <View>
              <Text style={Styles.text}>Total : </Text>
              <Text style={Styles.text}>Itens : </Text>
            </View>
            <TouchableOpacity style={Styles.generalButtons}>
              <Text style={Styles.generalButtonsText} >Finalizar compra</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
};

export default Compra;