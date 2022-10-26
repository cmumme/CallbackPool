# Callback Pool
Includes a ``CallbackPool`` class, than, when drained, will execute all functions currently in it's pool and then remove them from the pool.

```ts
import { CallbackPool } from "@rbxts/callback-pool"

const MyPool = new CallbackPool([
    () => {
        print("First function ran!")
    },
    () => {
        print("Second function ran!")
    }
])

/*
    Expected output:
        - First function ran!
        - Second function ran!
*/
MyPool.Drain()

MyPool.Add(() => {
    print("Third function ran!")
}).Add(() => {
    print("Fourth function ran!")
})

/*
    Expected output:
        - Third function ran!
        - Fourth function ran!
*/
MyPool.Drain()
```