interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    { name: 'steven', src: 'http://localhost:8081/main.js' },
    { name: 'charlie', src: 'http://localhost:8082/main.js' },
    { name: 'maddie', src: 'http://localhost:8083/main.js' },
    { name: 'kara', src: 'http://localhost:8084/main.js' },
];