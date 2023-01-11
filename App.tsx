import { Box, NativeBaseProvider, ScrollView, View } from 'native-base';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import { Signup } from './src/screens/Sigup';

export default function App() {
  return (
    <NativeBaseProvider>
      <View height={'60px'}>
        <Header />
      </View>
      <View style={{ maxHeight: 'calc(100vh - 120px)' }}>
        <ScrollView>
          <Signup />
          <Signup />
          <View h={5}></View>
        </ScrollView>
      </View>
      <View height={'60px'}>
        <Footer />
      </View>
    </NativeBaseProvider>
  );
}
