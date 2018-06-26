export interface IResourceDto {
    ["fr-FR"]: string;
    ["en-US"]: string;
}

export interface IAnyObjectDto {
    Id: string;
    ObjectType: string;
    Name?: IResourceDto;
}

export function getName(obj: IAnyObjectDto): string {
    if (obj.Name) {
        return obj.Name["fr-FR"] || "no name";
    }
    return "no name";
}
