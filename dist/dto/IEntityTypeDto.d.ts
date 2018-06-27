import { IAnyObjectDto } from "./IAnyObjectDto";
export interface IEntityTypeDto extends IAnyObjectDto {
    Code: string;
    ObjectType: "EntityType";
}
