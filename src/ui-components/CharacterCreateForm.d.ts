/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharacterCreateFormInputValues = {
    name?: string;
    body?: number;
    heart?: number;
    mind?: number;
};
export declare type CharacterCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    body?: ValidationFunction<number>;
    heart?: ValidationFunction<number>;
    mind?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharacterCreateFormOverridesProps = {
    CharacterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    heart?: PrimitiveOverrideProps<TextFieldProps>;
    mind?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharacterCreateFormProps = React.PropsWithChildren<{
    overrides?: CharacterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CharacterCreateFormInputValues) => CharacterCreateFormInputValues;
    onSuccess?: (fields: CharacterCreateFormInputValues) => void;
    onError?: (fields: CharacterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharacterCreateFormInputValues) => CharacterCreateFormInputValues;
    onValidate?: CharacterCreateFormValidationValues;
} & React.CSSProperties>;
export default function CharacterCreateForm(props: CharacterCreateFormProps): React.ReactElement;
