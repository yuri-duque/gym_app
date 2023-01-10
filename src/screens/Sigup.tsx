import { Heading, Center, VStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Signup() {
  return (
    <VStack bgColor={'gray.100'} flex={1} px={10}>
      <Center>
        <Heading fontSize={'xl'} my={16}>
          Crie sua conta
        </Heading>
        <Input placeholder="Nome" errorMessage="erro 123" />
        <Input placeholder="Email" isInvalid />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme a senha" />

        <Button title="Cadastrar" />
      </Center>
    </VStack>
  );
}
