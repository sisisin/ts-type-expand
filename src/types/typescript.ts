import type * as ts from "typescript"

// doesn't exist public type def
export type MyType = ts.Type & {
  types?: MyType[]
}

export type MyNode = ts.Node & {
  type?: ts.TypeNode
  locals?: Map<string, ts.Symbol>
}

export type BaseType = {
  name?: string
  typeText: string
  props: PropType[]
  union: BaseType[] // for union type
  typeForProps: MyType | undefined // only properties are expandable
}

export type PropType = BaseType & {
  propName: string
}

export type FunctionType = BaseType & {
  functionName: string
  args: BaseType[]
  returnType: BaseType
}
