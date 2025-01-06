- we gotta use useState hook, to store boolean values etc
- we can use the terinary operators for two things
- 1. One is for heading
- 2. Other is for changing components

- We create a function/mostly arrow function and then we use the useState method and we change the value present in the useState method 
- Changing the value in useState method, changes the value in useState variable

- for conditional rendering we mostly use useState(someBooleanValueEitherTrueOrFalseLol)
- we can use conditional rendering and change the components altogether, like 
- booleanVariable ? <RedComponent/> : <BlueComponent/>

- there is a difference between onClick = {functionName()} and onClick = {() => functionName()}
- the former is called when the renders happen, i.e. automatic
- the latter is called only when the button is clicked
