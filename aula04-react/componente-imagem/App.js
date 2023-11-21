import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Switch } from 'react-native';

const Pokemon = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "green",
          }}
        >
          Snorlax Berrie
        </Text>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png',
          }}
          style={{
            width: 200,
            height: 210,
            alignSelf: 'center',
          }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue='Digite aquiii!'
      />

      <View style={styles.container}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </ScrollView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}

export default Pokemon;