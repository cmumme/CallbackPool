import { CallbackPool } from "."
import { describe, it } from "mocha"
import { expect } from "chai"

describe("CallbackPool", () => {
    let Variable1 = "Unchanged"
    let Variable2 = "Unchanged"
    let Variable3 = "Unchanged"
    let Variable4 = "Unchanged"
    let Variable5 = "Unchanged"
    let Variable6 = "Unchanged"
        
    const Pool = new CallbackPool([
        () => {
            Variable1 = "Changed"
        },
        () => {
            Variable2 = "Changed"
        },
        () => {
            Variable3 = "Changed"
        }
    ])

    it("Calls all callbacks when drained", () => {
        Pool.Drain()

        expect(Variable1).to.equal("Changed", "Variable1 is changed")
        expect(Variable2).to.equal("Changed", "Variable2 is changed")
        expect(Variable3).to.equal("Changed", "Variable3 is changed")
    })

    it("Can refill and redrain", () => {
        Pool.Add(() => {
            Variable4 = "Changed"
        }).Add(() => {
            Variable5 = "Changed"
        }).Add(() => {
            Variable6 = "Changed"
        })

        Pool.Drain()

        expect(Variable4).to.equal("Changed", "Variable4 is changed")
        expect(Variable5).to.equal("Changed", "Variable5 is changed")
        expect(Variable6).to.equal("Changed", "Variable6 is changed")
    })
})