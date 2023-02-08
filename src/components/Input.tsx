import { Input as NBInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  return (
    <FormControl mb={4} isInvalid={!!errorMessage}>
      <NBInput
        fontSize={'md'}
        w={'full'}
        h={16}
        isInvalid={isInvalid}
        _focus={{ bg: 'gray.200', borderWidth: 2, borderColor: 'green.300' }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
