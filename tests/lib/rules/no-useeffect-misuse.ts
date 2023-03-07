import rule from '../../../lib/rules/no-useffect-misuse';
import * as fs from "fs";
import * as path from "path";
import {ruleTester} from "../../ruleTester";

const getFixture = (name: string) => `// ${name}\n${fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8')}\n`;

ruleTester.run('no-setstate-in-useffect', rule as any, {
    invalid: [
        {
            code: getFixture('common-setState-in-useEffect.ts'),
            errors: [{
                messageId: 'noSetStateCall'
            }]
        },
        {
            code: getFixture('setState-from-derivative-fn-in-useEffect.ts'),
            errors: [{
                messageId: 'noSetStateCall'
            }]
        }
    ],
    valid: [
        {
            code: getFixture('setState-outside-useEffect.ts'),
        }
    ],
});
