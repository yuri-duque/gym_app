import { Button as NBButton, IButtonProps, Text } from 'native-base';
import { bool, string } from 'yup';

type Props = IButtonProps & {
  title: string;
  full?: boolean;
  width?: string;
  bg?: string;
};

export function Button({ title, full, width, bg, ...rest }: Props) {
  return (
    <NBButton
      w={width ? width : full ? 'full' : 'container'}
      h={'40px'}
      bg={bg || 'blue.400'}
      _pressed={{ bgColor: 'blue.600' }}
      _hover={{ bgColor: 'blue.600' }}
      {...rest}
    >
      <Text
        color={'white'}
        fontSize={'md'}
        fontWeight={'semibold'}
        letterSpacing={'xl'}
      >
        {title}
      </Text>
    </NBButton>
  );
}
