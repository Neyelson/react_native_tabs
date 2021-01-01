import * as React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import home_icon from './assets/tabicons/numeric-1.png';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#white' }]} />
);

const TerceiraRota = () => (
  <View style={[styles.scene, { backgroundColor: '#white' }]} />
);

const QuartaRota = () => (
  <View style={[styles.scene, { backgroundColor: '#white' }]} />
);

const QuintaRota = () => (
  <View style={[styles.scene, { backgroundColor: '#white' }]} />
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
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'black' }}
      scrollEnabled={true}
      renderIcon={({ route }) => ( <Image style={styles.topbaricon} source={route.icon} /> )}
      renderLabel={({ route }) => ( <Text style={styles.topbartext}> {route.title} </Text> )}
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
      lazy={true}
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
  topbaricon: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topbartext: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});