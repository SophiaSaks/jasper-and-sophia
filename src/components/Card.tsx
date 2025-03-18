import { ReactElement } from 'react';

interface CardProps {
    children: ReactElement;
}
export const Card = ({children}:CardProps) =>
     (
        <div className="card">
        {children}
        </div>
    )
