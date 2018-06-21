const TARGET_ID = "TargetId";
const IS_REF = "IsRef";
const REF_TYPE = "RefType";

export function isRefDto(self: any): self is IRefDto {
    if (self && typeof(self) === "object") {
        if (TARGET_ID in self && IS_REF in self && REF_TYPE in self) {
            return true;
        }
    }
    return false;
}

export interface IRefDto {
    [TARGET_ID]: string;
    [IS_REF]: true;
    [REF_TYPE]: "Required";
}
