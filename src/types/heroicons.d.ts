declare module '@heroicons/react/outline' {
    import { ReactNode } from 'react';
    
    export interface IconProps {
        className?: string;
        strokeWidth?: number;
        ariaHidden?: boolean;
        ariaLabel?: string;
    }

    const icons: Record<string, React.ComponentType<IconProps>>;
    export default icons;
}
