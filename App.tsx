import { Box, NativeBaseProvider, ScrollView, View } from 'native-base';
import { Footer } from './src/components/Footer';
import { Signup } from './src/screens/Sigup';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={{ maxHeight: 'calc(100vh - 50px)' }}>
        <ScrollView>
          <Signup />
          <Signup />
          <View h={5}></View>
        </ScrollView>
      </View>
      <View minHeight={'50px'}>
        <Footer />
      </View>
    </NativeBaseProvider>
  );
}
