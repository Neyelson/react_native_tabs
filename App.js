import * as React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const TerceiraRota = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const QuartaRota = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const QuintaRota = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Primeira', icon: 'num1' },
    { key: 'second', title: 'Segunda' },
    { key: 'terceira', title: 'Terceira' },
    { key: 'quarta', title: 'Quarta' },
    { key: 'quinta', title: 'Quinta' },

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
});