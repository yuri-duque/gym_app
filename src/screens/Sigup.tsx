import { Heading, Center, VStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  function handleSignup(data: FormData) {
    console.log(data);
  }

  return (
    <VStack bgColor={'gray.100'} flex={1} px={10}>
      <Center>
        <Heading fontSize={'xl'} my={8}>
          Crie sua conta
        </Heading>

        <Controller
          control={control}
          name="name"
          rules={{
            required: 'Informe o nome',
            minLength: {
              value: 5,
              message: 'O nome deve ter pelo menos 5 catacteres'
            }
          }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Nome"
              errorMessage={errors.name?.message}
              onChangeText={onChange}
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Informe o e-mail',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              errorMessage={errors.email?.message}
              onChangeText={onChange}
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Informe a senha' }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Senha"
              errorMessage={errors.password?.message}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="passwordConfirm"
          rules={{ required: 'Informe a confirmação de senha' }}
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Confirme a senha"
              errorMessage={errors.passwordConfirm?.message}
              onChangeText={onChange}
              secureTextEntry
            />
          )}
        ></Controller>

        <Button title="Cadastrar" onPress={handleSubmit(handleSignup)} />
      </Center>
    </VStack>
  );
}
