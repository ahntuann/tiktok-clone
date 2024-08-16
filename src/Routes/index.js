import { Home } from '~/pages';
import { Following } from '~/pages';
import { Upload } from '~/pages';
import { Profile } from '~/pages';
import { HeaderOnly } from '~/components/Layout';

export const publicRoutes = () => [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/profile', element: Profile, layout: null },
];
