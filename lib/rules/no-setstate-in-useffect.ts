import {ESLintUtils, TSESTree} from '@typescript-eslint/utils';
import * as ts from 'typescript';
import * as tsutils from 'tsutils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`);

function isDefinedInReactTypesLib(typeSymbol: ts.Symbol) {
   return typeSymbol?.getDeclarations()?.[0]?.getSourceFile().fileName;
}

function isReactDispatchType(type: ts.Type) {
    if (!type.aliasSymbol) {
        return;
    }

    const isDispatchType = type.aliasSymbol.name === 'Dispatch';

    if (!isDispatchType) {
        return;
    }

    return isDefinedInReactTypesLib(type.aliasSymbol);
}

function isSetStateFn(fnType: ts.Type) {
    debugger;
    return isReactDispatchType(fnType);
}

function isEffectFnCall(call: TSESTree.CallExpression) {
    const {callee} = call;

    if (callee.type !== 'Identifier') {
        return;
    }

    return callee.name === 'useEffect' || callee.name === 'useLayoutEffect';
}

export default createRule({
    name: 'no-setstate-in-useffect',
    create(context, optionsWithDefault) {
        return {
            CallExpression(call) {
                const fnCalled = call.callee;

                const parserServices = ESLintUtils.getParserServices(context);
                const checker = parserServices.program.getTypeChecker();

                // 2. Find the backing TS node for the ES node, then that TS type
                const originalNode = parserServices.esTreeNodeToTSNodeMap.get(
                    fnCalled
                );

                const nodeType = checker.getTypeAtLocation(originalNode);

                if (!isSetStateFn(nodeType)) {
                    return;
                }

                const parentCalls = context.getAncestors().filter(node => node.type === 'CallExpression') as TSESTree.CallExpression[];

                if (!parentCalls.length) {
                    return;
                }

                if (!parentCalls.some(isEffectFnCall)) {
                    return;
                }

                context.report({
                    node: call,
                    messageId: 'noSetStateCall'
                });

                // const nodeType2 = checker.typeToTypeNode(nodeType);
                // tsutils.getT
                // console.log({nodeType, name: checker.typeToString(nodeType), props: (nodeType as any).checker.getAllPossiblePropertiesOfTypes(nodeType)});
            }
        };
    },
    defaultOptions: [],
    meta: {
        docs: {
            description: "setState should not be called inside useEffect",
            recommended: "error",
        },
        messages: {
            noSetStateCall: 'Instead of calling setState in useEffect, consider ...'
        },
        type: 'suggestion',
        schema: [],
    }
})