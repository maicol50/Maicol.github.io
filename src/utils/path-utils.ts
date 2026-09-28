const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const basePath = baseUrl.replace(/\/$/, '');

export function withBase(path: string) {
    const relativePath = path.startsWith(`${basePath}/`) ? path.slice(basePath.length + 1) : path.replace(/^\/+/, '');
    return `${baseUrl}${relativePath}`;
}