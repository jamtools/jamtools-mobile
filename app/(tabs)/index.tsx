import { Button, Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import WebView from 'react-native-webview';
import React, {useState} from 'react';

const webappURL = 'https://d25x1tcq80gk7s.cloudfront.net';
// const webappURL = 'https://jaam.app';

const MyWebComponent = ({url}: {url: string}) => {
  return (
    Platform.OS === "web" ? (
      <iframe
        allow='midi'
        src={url}
        height={'100%'}
        width={'100%'}
      />
    ) : (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: url}}
          style={{marginTop: 22, flex: 1}}
        />
      </View>
    )
  );
};

export default function TabOneScreen() {
  const [url, setUrl] = useState(webappURL);
  const [loadedUrl, setLoadedUrl] = useState(webappURL);

  const onUrlTextChange = (e: React.ChangeEvent) => {
    console.log(e);
    // setUrl(e.target);
  };

  const changeUrl = () => {
    setLoadedUrl(url);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <Text style={styles.title}>Yeah boy</Text> */}
      {/* <View style={styles.textInputContainer}>
        <TextInput
          style={styles.smallWidth}
          value={url}
          onChange={(e) => {
            setUrl((e.target as any).value as string);
            // setUrl(e.target);
          }}
        /> */}
        {/* <Button onPress={changeUrl} title='Go'></Button> */}
      {/* </View> */}
      {/* <MyWebComponent url={loadedUrl}/> */}

        <View style={{paddingTop: 10}}>
          <Text style={styles.title}>
            Jam Tools mobile app
          </Text>
        </View>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInputContainer: {
    width: '50%',
  },
  smallWidth: {
    width: '90%',
  }

});
