declare const TARGET_ID = "TargetId";
declare const IS_REF = "IsRef";
declare const REF_TYPE = "RefType";
export declare function isRefDto(self: any): self is IRefDto;
export interface IRefDto {
    [TARGET_ID]: string;
    [IS_REF]: true;
    [REF_TYPE]: "Required";
}
export {};
