const rewire = require("rewire")
const multi_column_search_array_table = rewire("./multi-column-search-array-table")
const checkIfValid = multi_column_search_array_table.__get__("checkIfValid")
// @ponicode
describe("checkIfValid", () => {
    test("0", () => {
        let callFunction = () => {
            checkIfValid({ key3: -5.48, 0: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            checkIfValid({ key3: 0, 0: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            checkIfValid({ key3: -5.48, 0: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            checkIfValid({ key3: -5.48, 0: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            checkIfValid({ key3: 0, 0: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            checkIfValid(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("multi_column_search_array_table.multiColumnSearchArrayTable", () => {
    test("0", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable(["7289708e-b17a-477c-8a77-9ab575c4b4d8", "a85a8e6b-348b-4011-a1ec-1e78e9620782", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9"], { 1: -5.48, key5: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable(["7289708e-b17a-477c-8a77-9ab575c4b4d8", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "7289708e-b17a-477c-8a77-9ab575c4b4d8", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9"], { 1: -5.48, key5: "1.2.3.4" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable(["7289708e-b17a-477c-8a77-9ab575c4b4d8", "a85a8e6b-348b-4011-a1ec-1e78e9620782", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "7289708e-b17a-477c-8a77-9ab575c4b4d8"], { 1: -100, key5: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable(["7289708e-b17a-477c-8a77-9ab575c4b4d8", "7289708e-b17a-477c-8a77-9ab575c4b4d8", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "03ea49f8-1d96-4cd0-b279-0684e3eec3a9"], { 1: -100, key5: "192.168.99.101" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable(["7289708e-b17a-477c-8a77-9ab575c4b4d8", "7289708e-b17a-477c-8a77-9ab575c4b4d8", "7289708e-b17a-477c-8a77-9ab575c4b4d8", "7289708e-b17a-477c-8a77-9ab575c4b4d8"], { 1: -100, key5: "150.151.152.153" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            multi_column_search_array_table.multiColumnSearchArrayTable([], { 1: NaN, key5: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
