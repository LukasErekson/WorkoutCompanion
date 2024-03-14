// For the list of available exercises
type Exercise = {
  name: string;
  image?: any;
  description?: string;
};

enum Duration {
  min = 'minute',
  minute = 'minute',
  s = 'second',
  second = 'second',
}

enum WeightUnits {
  lbs = 'lbs',
  pounds = 'lbs',
  kgs = 'kgs',
  kilograms = 'kgs',
  body = 'body',
}

enum WeightType {
  resistance = 'resistance',
  assisted = 'assisted',
  NA = 'N/A',
}

// For exercises that are part of a workout or workout plan
type RoutineExercise =
  | Exercise
  | {
      restTime: string | number;
      restTimeUnits?: Duration;
      sets: number;
      weight: number | string | null;
      weightType?: WeightType;
      weightUnits?: WeightUnits;
      rep_min: number | string;
      rep_max: number | string;
    };

// For workout exercises that are part of an active workout
type WorkingExercise =
  | RoutineExercise
  | {
      currentRep: number;
      reps: number[];
    };

export {
  Exercise,
  RoutineExercise as WorkoutExercise,
  WorkingExercise,
  Duration,
  WeightType,
  WeightUnits,
};
