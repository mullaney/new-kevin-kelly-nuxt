---
title: Becoming an expert at reducing arrays in JavaScript
published_on: 1605657179320
---

When learning JavaScript, one of the early challenges was understanding the higher order methods for arrays like map, sort, find, filter, and reduce. The idea of passing a function as a parameter to another function was uncomfortable. But like most things, using these methods gradually made them feel familiar, and eventually easy. It did not take me too much time to understand map, filter and sort, mostly because I had many opportunities to use them while learning React.

However, learning how to use reduce took more time. I understood broadly why I might need reduce. But because I got so little practice using reduce, it took a long time for it to feel familiar.

When tackling problems, if I saw multiple solutions, I would rarely choose the solution which used reduce. At a certain point, I realized in order to learn reduce, I needed to use reduce whenever I could. So I did. I started choosing the solution which used reduce. Now it feels familiar and easy. And I've developed a simple, step by step process. Let's take the following example:

```js
// Calculate the duration of the longest event in minutes
const events = [
  {
    id: 101,
    name: 'Birthday Bash',
    start_time: '07 Dec 2020 12:00:00 GMT',
    end_time: '07 Dec 2020 14:00:00 GMT'
  },
  {
    id: 111,
    name: 'White Elephant Party',
    start_time: '14 Dec 2020 19:00:00 GMT',
    end_time: '14 Dec 2020 20:30:00 GMT'
  },
  {
    id: 121,
    name: 'Holiday Dinner and Dance',
    start_time: '21 Dec 2020 19:30:00 GMT',
    end_time: '21 Dec 2020 23:30:00 GMT'
  }
];

```

## Step 1: Decide if reduce will work?

If the answers to the following questions are yes, I try to use reduce:

- Is the source data in the form of an array?
- Is the desired result not an array?

Usually, if the desired result is an array, you would want to use filter (to return a subset of the original array) or map (which returns a complementary array of the same length as the original array). But if you are processing an array and want a single value or single object as the result, often reduce is your best option.

## Step 2: Create the shell

First, start with a shell of the solution like this:

```js
const longestDuration = events.reduce((acc, event) => {
  return acc;
}, 0);
```

The next three questions to ask are:

- What is a good name for the desired result? In this case, 'longestDuration' seems appropriate.
- What is the array where the data can be found? Here the array is called 'events'.
- Figure out what each element of the array represents? Often it's just the singular version of the array name, like 'event' in this problem.

Now what about 'acc'? That represents the **accumulator**. Like other higher order functions, reduce is a kind of loop. It executes the function passed to it, once for each element of the source array. Each time it runs, it passes along the return value of the previous iteration. It accumulates a value. This accumulated value is always the first parameter of the function. I usually begin by calling it 'acc' to remind me that it's the accumulator, and I assume that I will need to return that value from the function.

And finally, I set an initial value for the accumulator. In this case the desired result will be a number, so beginning with 0 sounds reasonable. In other cases, the initial value may be an empty string, an empty object, or even an empty array.

Notice if we run this now, the result will be 0. It starts as 0, and for each iteration, the 0 value is passed to the function as the acc parameter and returned from the function. The end result will be 0, not quite what we want.

## Step 3: Calculate the value for the current element

In this case we need to calculate the duration of the current event in minutes. There are a lot of ways to do this, here is one:

```js
const longestDuration = events.reduce((acc, event) => {
  const duration = (Date.parse(event.end_time) - Date.parse(event.start_time)) / 60000;
  return acc;
}, 0);
```

Date.parse returns a value in milliseconds, so you need to divide the difference of the two timestamps by 60000, the number of milliseconds in a minute. If we ran this now, it would still return 0. But we could console.log the value of duration to make sure it's calculating correctly.

## Step 4: Rename the accumulator (optional)

Since we are looking for the longest duration, we need to compare duration to the longest one we have found so far. That's the value that needs to be passed from one iteration to the next. That's the accumulator in this example. For clarity, let's rename the accumulator, longestSoFar:

```js
const longestDuration = events.reduce((longestSoFar, event) => {
  const duration = (Date.parse(event.end_time) - Date.parse(event.start_time)) / 60000;
  return longestSoFar;
}, 0);
```

## Step 5: Return the proper value from each iteration

For each iteration, we have the duration of the current event, and the longest duration we have found so far.  We can compare the two durations and return the longer one.

```js
const longestDuration = events.reduce((longestSoFar, event) => {
  const duration = (Date.parse(event.end_time) - Date.parse(event.start_time)) / 60000;
  return (duration > longestSoFar) ? duration : longestSoFar;
}, 0);
```

Or if ternary operators feel uncomfortable, you can use if/else:

```js
const longestDuration = events.reduce((longestSoFar, event) => {
  const duration = (Date.parse(event.end_time) - Date.parse(event.start_time)) / 60000;
  if (duration > longestSoFar) {
    return duration;
  } else {
    return longestSoFar;
  }
}, 0);
```
Now when we run the code, it returns 240, the duration in minutes of the 3rd event, exactly what we want.

## Summary

Higher order functions can feel uncomfortable for new developers. It takes some practice and some time for them to feel natural and easy. Reduce took longer for me to feel comfortable with, because I didn't practice it. But after using it for a while, it now feels as natural as any other tool in my JavaScript toolbox.

Explore this code using this repl: [https://repl.it/@kvinklly/Array-reduce-example](https://repl.it/@kvinklly/Array-reduce-example).
