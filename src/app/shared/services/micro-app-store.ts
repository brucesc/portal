interface MicroAppConfig {
    name: string;
    path: string;
    element: string;
}  
export const configStore: MicroAppConfig[] = [
    { name: 'steven', path: 'http://localhost:8081/main.js', element: 'steven-dad-power' },
    { name: 'charlie', path: 'http://localhost:8082/main.js', element: 'charlie-kid-energy' },
    { name: 'maddie', path: 'http://localhost:8083/main.js', element: '' },
    { name: 'kara', path: 'http://localhost:8084/main.js', element: '' },
];