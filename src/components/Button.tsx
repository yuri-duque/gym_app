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
      h={16}
      bg={bg || 'green.600'}
      _pressed={{ bgColor: 'green.700' }}
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
