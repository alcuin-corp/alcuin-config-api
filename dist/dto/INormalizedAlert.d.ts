import { AnyAlert } from ".";
export interface INormalizedAlert {
    ObjectId: string;
    Message: string;
    Status: number;
    ObjectType: string;
    StackTrace: string;
}
export declare function normalizeAlert(err: AnyAlert): INormalizedAlert;
