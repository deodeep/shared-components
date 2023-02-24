import { FunctionComponent } from 'react';
type ButtonProps = {
    onPress: () => void;
    title: string;
    style?: Record<string, unknown>;
};
export declare const CustomButton: FunctionComponent<ButtonProps>;
export {};
