/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Character } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharacterUpdateFormInputValues = {
    name?: string;
    body?: number;
    heart?: number;
    mind?: number;
};
export declare type CharacterUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    body?: ValidationFunction<number>;
    heart?: ValidationFunction<number>;
    mind?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharacterUpdateFormOverridesProps = {
    CharacterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    heart?: PrimitiveOverrideProps<TextFieldProps>;
    mind?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharacterUpdateFormProps = React.PropsWithChildren<{
    overrides?: CharacterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    character?: Character;
    onSubmit?: (fields: CharacterUpdateFormInputValues) => CharacterUpdateFormInputValues;
    onSuccess?: (fields: CharacterUpdateFormInputValues) => void;
    onError?: (fields: CharacterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharacterUpdateFormInputValues) => CharacterUpdateFormInputValues;
    onValidate?: CharacterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CharacterUpdateForm(props: CharacterUpdateFormProps): React.ReactElement;
