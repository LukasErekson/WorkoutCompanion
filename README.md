# Workout Companion

Workout Companion provides a way to track sets, reps, and workouts for strength training. The app functionality can be broken down into 3 essential parts: [Exercises](#exercises), [Routines](#routines), and [Workouts](#workouts).

## Exercises 🏋️

Exercises are the base of every workout routine. The my represent the individual movements you want to do whether it's one set or several. You can use the preset exercises to create a workout routine, or you can add your own exercises customized for you! A custom weight-training program, cross-training, or physical therapy, you can add any of the exercises you'd like to incorporate into your workouts!

Exercises are comprised of the following basic elements:

1. A name
2. An optional description
3. An optional image

Once we start incorporating exercises into a plan/workout routine, that's when we customize more details such as

## Routines 🏃

Routines are collections of exercises that serve as the basis of a workout. You can create your own routine to focus on certain exercises you want to do. For example, you can have separate routines for leg day, chest day, or warm-ups/cool-downs from cardio. In reality, you can make a routine for whatever you want to do!

Within a routine, you define the number of sets, reps, and weight for each exercise. In addition to what an exercise already has, an exercise in a routine includes the following:

1. Number of sets
2. Number of reps per set
   - Including ranges such as "Between 6 to 8" or "To fatigue"
3. Weight (Body/assisted/added)
4. Rest time between sets

### Routines and Progressive Overload 💪

[Progressive Overload](https://en.wikipedia.org/wiki/Progressive_overload) is a method to grow strength over time by _progressively_ increasing the _load_ of the exercises you do. Rather than doing more reps with a lower weight, Progressive Overload pushes to use fewer reps with increasingly more weight. If you are succesful in completing an exercise according to the min/max reps for a set, the app will prompt you to see if you want to increase the weight for this exercise. For exercises that use body weight, this would include adding resistance while for exercises with weight, it would recommending increasing by increments of 5, and so on. If accepted, the new weight will be saved for the routine so that the next time it's accessed for a workout, the weight is updated.

## Workouts 🥵

A Workout is a Routine in action. This is where you can record and track your progress when doing a routine.

### Active Workouts

Along with displaying all the details of each exercise as stated above in a routine, workouts also let you know:

1. The current set you're on
2. How many reps/set you have performed already

### Workout History

Workouts are saved in your workout history when completed.

## Admin 📋️

Workout Companion is created using React-Native. As a React developer by trade, I wanted to dive into what React Native has to offer while making something that would be genuinely useful to me. If you find it helpful, that's just icing on the cake! 🍰
