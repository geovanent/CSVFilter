export interface IFileRepository {
    save(data: any): Promise<void>; 
    getAll(): Promise<any[]>;
}
