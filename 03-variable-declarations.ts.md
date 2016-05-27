# Variable Declarations

Here’s the first _destructuring_ example. 


```typescript

    let destructured: number[] = [1, 2];
    let [first, second] = destructured;

    function f([first, second]: [number, number]) {
        return first + second;
    }

    let [zero, ...theRemaining] = [0, 1, 2, 3, 4];

    let [, , two, , four] = [0, 1, 2, 3, 4];

    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    }
    let {a, b} = o;

    ({a, b} = {a: "baz", b: 101});

    function keepWholeObject(wholeObject: {a: number, b?: number}) {
        let {a, b = 1000} = wholeObject;
        return a + b;
    }
```

OK, let’s output the results!

    document.write(
      destructured

      + '<br>' + first
      + '<br>' + second

      + '<br>' + f([1, 2])
      + '<br>' + zero
      + '<br>' + theRemaining
      + '<br>' + two
      + '<br>' + four

      + '<br>' + a
      + '<br>' + b

      + '<br>' + keepWholeObject({a:7})
    );
