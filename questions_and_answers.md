### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```
- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

#### 1.Answer: A: {}
<i>The answer is an empty object. Because in this javascript code greetign's value is an empty object. so that when we console.log(greetign) it gives us an empty object.</i>



###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).
```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

#### 2. Answer: C: "12"
<i>The sum of 1 and "2" (which is string) is "12". because in javascript when we calculate sum of a number with a string it gives us a string. </i>




###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

#### 3. Answer: A: `['🍕', '🍫', '🥑', '🍔']`
<i>The answer is option A. Which is an array of some element. because we set food =['🍕', '🍫', '🥑', '🍔'] .so that when we console.log(food) it gives us the value of food which is an array.</i>




###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`

#### 4. Answer: B: Hi there, undefined.
<i>The ans of this Question is Hi there, undefined. beacuse in this function there is no value of 'name'. so that when we call the function it gives name's value undefine. </i>



###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

#### 5. Answer: C: 3
<i> In this JavaScript code initializes a count variable to 0 and defines an array nums with elements [0, 1, 2, 3]. this is uses a 'forEach' loop.In this loop, if the element is not equal to 0, then the count variable is incremented.After the loop it gives us the final value of 'count' , which will be the number of elements in 'nums' that aren't equal to 0, and then it gives us the output 3. </i>



