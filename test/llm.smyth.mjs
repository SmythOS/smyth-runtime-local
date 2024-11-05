import assert from 'assert';
import { execSync, execFileSync } from 'child_process';

describe('llm.smyth', function () {
    describe('/ask', function () {
        it('Answer should include Paris', function () {

            const result = execFileSync('./bin/smyth-runtime-macos', [
                '--agent', 'agents/llm.smyth',
                '--vault', 'vault.json',
                '--post', 'question="What is the capital of France?"',
                '--endpoint', 'ask'
            ]);

            assert.ok(result.includes('Paris'));
        });
    });
});