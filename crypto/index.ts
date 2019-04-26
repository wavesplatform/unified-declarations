import * as fs from 'fs'
import { resolve } from 'path'
import * as ts from 'typescript'

function visit(node: ts.Node) {
  if (ts.isInterfaceDeclaration(node)) {
    console.log(node.members[1].getChildAt(2))
    // Object.keys(ts).filter(x => x.startsWith('is')).map((x: string) => {
    //   try {
    //     if (((<any>ts)[x])(node.members[1].getChildAt(1)) === true) {
    //       console.log(x)
    //     }
    //   } catch (error) {

    //   }
    // })
  }
  node.forEachChild(visit)
}

function instrument(fileName: string, sourceCode: string) {
  const sourceFile = ts.createSourceFile(fileName, sourceCode, ts.ScriptTarget.Latest, true)
  visit(sourceFile)
}

const inputFile = resolve(__dirname, '../crypto.ts')
instrument(inputFile, fs.readFileSync(inputFile, 'utf-8'))

