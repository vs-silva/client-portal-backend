import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // allows using describe/it/test without imports
        environment: 'node', // backend project, so Node environment
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
});