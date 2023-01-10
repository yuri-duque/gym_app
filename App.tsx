import { NativeBaseProvider } from 'native-base';
import { Signup } from './src/screens/Sigup';

export default function App() {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
}
