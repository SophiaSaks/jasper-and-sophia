// Declare these scss modules to avoid typescript error
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}