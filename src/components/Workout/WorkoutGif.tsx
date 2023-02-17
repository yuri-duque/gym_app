import { AspectRatio, Image } from 'native-base';
import handleGif from '../../utils/handleGif';

type WorkoutCardProps = {
  gifName: string;
};

export function WorkoutGif({ gifName }: WorkoutCardProps) {
  const gif = handleGif(gifName);

  return (
    <AspectRatio ratio={12 / 12} minHeight={'260px'}>
      <Image source={gif} alt="image" />
    </AspectRatio>
  );
}
