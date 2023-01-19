export default function handleGif(gifName: string) {
  switch (gifName) {
    case 'supino-inclinado-aparelho':
      return require('../../assets/gifs/supino-inclinado-aparelho.gif');

    case 'supino-reto-aparelho':
      return require('../../assets/gifs/supino-reto-aparelho.gif');

    default:
      break;
  }
}
