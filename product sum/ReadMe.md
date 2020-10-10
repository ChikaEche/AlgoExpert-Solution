Product Sum

This is a special array which is non-empty that contains either integers or other "special" arrays. The product sum of a special array is the sum of it's elements where special array inside it are sumeed themselves and then multiplied by thier level of depth.
The depth of a special array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2.
Therefore, the product sum of [x,y] is x+y; the product sum of [x,[y,z]] is x+2*(y+z)

Solution explaination
- create a recursive function that is called when ever there is an inner array.
- using a for loop to iterate through the given array, an if statement is put in place to check if the elent is an array
- if it is an array, the function is called again
- if it is not an array, the element is multiplied by the depth