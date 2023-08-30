// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray // albums: (string | number)[]
}

type userId = stringOrNumber // type userId = string | number