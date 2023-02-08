type Workout = {
  id: string;
  name: string;
  typeReps: 'repetições' | 'repetições + maximo' | 'isometria' | 'tempo';
  sets?: number;
  reps?: Array<Number>;
  typeWeights?: 'kg' | 'placas';
  weights?: Array<Number>;
  typeTime?: 'segundos' | 'minutos';
  time?: Number;
  typeRest?: 'segundos' | 'minutos';
  rest?: Number;
  gifName?: string;
};
