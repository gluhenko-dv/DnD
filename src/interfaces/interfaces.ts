export interface ITasksData {
    id: number;
    title: string;
    items: ITaskItem[];
}

export interface ITaskItem {
    id: number;
    title: string;
}
