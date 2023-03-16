/* Description
Here is a rope with a length of x cm. We will cut it in the following way: each m cm to make a mark, and then each n cm to make a mark. Finally, We cut the rope from the marked place. Please calculate that we have a total of several kinds of length of the rope, and how many of each kind of rope?
For example:
length=10  -----here is a rope with length of 10 cm, each "-" is 1cm
----------
m=2  -----------we make marks at each 2cm, "." is the mark
--.--.--.--.--
n=3  -----------we make marks at each 3cm, "." is the mark
--.-.-.--.--.-.-
cut the rope from these marked place, we got:
--  -  -  --  --  -  -
so the result should be: 1cm rope x 4 and 2cm rope x 3
Task
Complete function cutRope() that accepts three arguments length, m and n(three positive integer). Their meaning please refer to the above explanation.
You should return an object that contains all kinds of rope and its numbers. Like the example above, should return: {"1cm":4,"2cm":3}
Examples
cutRope(6,2,3) === {"1cm":2,"2cm":2}
cutRope(7,2,3) === {"1cm":3,"2cm":2}
cutRope(10,2,3) === {"1cm":4,"2cm":3}
cutRope(10,2,5) === {"1cm":2,"2cm":4}
cutRope(11,2,5) === {"1cm":3,"2cm":4} */


function cutRope(length,m,n){
    let newRope = []
    let segmentCounts = {}
    for (let i = 0; i <= length; i++) {
      if (i % m === 0 || i % n === 0 || i === length) {
        if (newRope.length) {
          if (`${newRope.length}cm` in segmentCounts) {
            segmentCounts[`${newRope.length}cm`] += 1
          } else {
            segmentCounts[`${newRope.length}cm`] = 1
          }
        }
        newRope = []
      }
      newRope.push('-')
    }
    
    return segmentCounts
  }
  
  cutRope(6,2,3)


  function cutRope(length,m,n){
    let mCount = 0
    let nCount = 0
    let newRope = []
    
    for (let i = 0; i < length; i++) {
      let pushed = false
      if (mCount === m) {
        newRope.push('.')
        mCount = 0
      }
      
      if (nCount === n) {
        newRope.push('.')
        nCount = 0
      }
      
      newRope.push('-')
      
      mCount++
      nCount++
    }
    
    let ropeSegments = newRope.join('').split('.')
    let segmentCounts = {}
  
    
    for (const segment of ropeSegments) {
      if (!segment.length) continue
      
      if (`${segment.length}cm` in segmentCounts) {
        segmentCounts[`${segment.length}cm`] += 1
      } else {
        segmentCounts[`${segment.length}cm`] = 1
      }
    }
    
    return segmentCounts
  }
  
  cutRope(6,2,3)


  function cutRope(len, m) {
    let rope = []
    for (let i = 1; i < len+1; i++) {
        rope.push("-")
        if (i % m == 0){
            rope.push(".")
        }
    }rope.push('.')
    console.log(rope)
    let result = {}
    let count = 0
    for (x in rope) {
        console.log(rope[x])
        if (rope[x]== '-') {
            count++
        } if (rope[x]== '.' && count>=1){
            if (`${count}cm` in result){
                result[`${count}cm`]++
            } else {
                result[`${count}cm`]=1
            }
            count=0
        }
    }
    console.log(result)
    return result
}