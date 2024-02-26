type Exercise = {
  name: string;
  restTime: string | number;
  restTimeUnits?: 'minute' | 'second';
  sets: number;
  weight: number | string | null;
  weightUnits?: 'lbs' | 'kg' | 'body weight';
  image?: string; // Path?
  rep_min?: number | string;
  rep_max?: number | string;
  description?: string;
};

type WorkingExercise =
  | Exercise
  | {
      currentRep: number;
      reps: number[];
    };

export {Exercise, WorkingExercise};
