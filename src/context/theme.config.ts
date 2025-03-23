export enum Theme {
    DEFAULT = 'default-theme',
    ALTERNATIVE = 'alternative-theme',
}

export const THEMES = {
    [Theme.DEFAULT]: () => import('@/theme/default.scss'),
    [Theme.ALTERNATIVE]: () => import('@/theme/alternative.scss'),
};
