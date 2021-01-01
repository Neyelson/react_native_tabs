import * as React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={styles.viewprincipal} >
  <Text > CONTEÚDO DA PRIMEIRA ABA </Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.viewprincipal} >
  <Text > CONTEÚDO DA SEGUNDA ABA </Text>
  </View>
);

const TerceiraRota = () => (
  <View style={styles.viewprincipal} >
  <Text > CONTEÚDO DA TERCEIRA ABA </Text>
  </View>
);

const QuartaRota = () => (
  <View style={styles.viewprincipal} >
  <Text > CONTEÚDO DA QUARTA ABA </Text>
  </View>
);

const QuintaRota = () => (
  <View style={styles.viewprincipal} >
  <Text > CONTEÚDO DA QUINTA ABA </Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'PRIMEIRA', icon: require('./assets/tabicons/numeric-1.png') },
    { key: 'second', title: 'SEGUNDA', icon: require('./assets/tabicons/numeric-2.png') },
    { key: 'terceira', title: 'TERCEIRA', icon: require('./assets/tabicons/numeric-3.png') },
    { key: 'quarta', title: 'QUARTA', icon: require('./assets/tabicons/numeric-4.png') },
    { key: 'quinta', title: 'QUINTA', icon: require('./assets/tabicons/numeric-5.png') },

  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    terceira: TerceiraRota,
    quarta: QuartaRota,
    quinta: QuintaRota,
  });

  const renderTabBar = props => (
    <TabBar 
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: 'white',  }}
      scrollEnabled={true}
      // poderia renderizar o icone separado só abaixo
     // renderIcon={({ route }) => (  )}
      renderLabel={({ route }) => ( 
       <Text style={styles.topbartext}> <Image style={styles.topbaricon} source={route.icon} /> {route.title} </Text>
      )}
          />
  );
  
  return (
    <SafeAreaView style={styles.container}>
    <TabView
     renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      //prop de baixo é importante pois otimiza a velocidade do app
      //lazy={true}
      //swipeEnabled={false}
    />
</SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
    container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  topbartext: {
    backgroundColor: 'white'
  },
  topbaricon: {
    width:30,
    height:30,
  },

  viewprincipal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

});