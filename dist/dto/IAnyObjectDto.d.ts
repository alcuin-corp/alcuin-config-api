export interface IResourceDto {
    ["fr-FR"]: string;
    ["en-US"]: string;
}
export interface IAnyObjectDto {
    Id: string;
    ObjectType: string;
    Name?: IResourceDto;
}
export declare function getName(obj: IAnyObjectDto): string;
