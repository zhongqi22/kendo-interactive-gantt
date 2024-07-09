import { GanttDependency, DependencyType } from "@progress/kendo-angular-gantt";

export interface Task {
    id: number;
    title: string;
    start: Date;
    end: Date;
    completionRatio: number;
    parentTaskId?: number;
}

export const dependencies: GanttDependency[] = [
{ id: 1, fromId: 111, toId: 112, type: DependencyType.FS },
{ id: 2, fromId: 112, toId: 113, type: DependencyType.FS },
{ id: 3, fromId: 121, toId: 122, type: DependencyType.FS },
{ id: 4, fromId: 122, toId: 123, type: DependencyType.FS },
{ id: 5, fromId: 131, toId: 132, type: DependencyType.FS },
{ id: 6, fromId: 132, toId: 133, type: DependencyType.FS },
{ id: 7, fromId: 141, toId: 142, type: DependencyType.FS },
{ id: 8, fromId: 142, toId: 143, type: DependencyType.FS },
{ id: 9, fromId: 151, toId: 152, type: DependencyType.FS },
{ id: 10, fromId: 152, toId: 153, type: DependencyType.FS },

{ id: 11, fromId: 211, toId: 212, type: DependencyType.FS },
{ id: 12, fromId: 212, toId: 213, type: DependencyType.FS },
{ id: 13, fromId: 221, toId: 222, type: DependencyType.FS },
{ id: 14, fromId: 222, toId: 223, type: DependencyType.FS },
{ id: 15, fromId: 231, toId: 232, type: DependencyType.FS },
{ id: 16, fromId: 232, toId: 233, type: DependencyType.FS },
{ id: 17, fromId: 241, toId: 242, type: DependencyType.FS },
{ id: 18, fromId: 242, toId: 243, type: DependencyType.FS },
{ id: 19, fromId: 251, toId: 252, type: DependencyType.FS },
{ id: 20, fromId: 252, toId: 253, type: DependencyType.FS },

{ id: 21, fromId: 311, toId: 312, type: DependencyType.FS },
{ id: 22, fromId: 312, toId: 313, type: DependencyType.FS },
{ id: 23, fromId: 321, toId: 322, type: DependencyType.FS },
{ id: 24, fromId: 322, toId: 323, type: DependencyType.FS },
{ id: 25, fromId: 331, toId: 332, type: DependencyType.FS },
{ id: 26, fromId: 332, toId: 333, type: DependencyType.FS },
{ id: 27, fromId: 341, toId: 342, type: DependencyType.FS },
{ id: 28, fromId: 342, toId: 343, type: DependencyType.FS },
{ id: 29, fromId: 351, toId: 352, type: DependencyType.FS },
{ id: 30, fromId: 352, toId: 353, type: DependencyType.FS },

{ id: 31, fromId: 411, toId: 412, type: DependencyType.FS },
{ id: 32, fromId: 412, toId: 413, type: DependencyType.FS },
{ id: 33, fromId: 421, toId: 422, type: DependencyType.FS },
{ id: 34, fromId: 422, toId: 423, type: DependencyType.FS },
{ id: 35, fromId: 431, toId: 432, type: DependencyType.FS },
{ id: 36, fromId: 432, toId: 433, type: DependencyType.FS },
{ id: 37, fromId: 441, toId: 442, type: DependencyType.FS },
{ id: 38, fromId: 442, toId: 443, type: DependencyType.FS },
{ id: 39, fromId: 451, toId: 452, type: DependencyType.FS },
{ id: 40, fromId: 452, toId: 453, type: DependencyType.FS },

{ id: 41, fromId: 511, toId: 512, type: DependencyType.FS },
{ id: 42, fromId: 512, toId: 513, type: DependencyType.FS },
{ id: 43, fromId: 521, toId: 522, type: DependencyType.FS },
{ id: 44, fromId: 522, toId: 523, type: DependencyType.FS },
{ id: 45, fromId: 531, toId: 532, type: DependencyType.FS },
{ id: 46, fromId: 532, toId: 533, type: DependencyType.FS },
{ id: 47, fromId: 541, toId: 542, type: DependencyType.FS },
{ id: 48, fromId: 542, toId: 543, type: DependencyType.FS },
{ id: 49, fromId: 551, toId: 552, type: DependencyType.FS },
{ id: 50, fromId: 552, toId: 553, type: DependencyType.FS },

];

export const data: Task[] = [
    { 
        id:11, 
        title: '1-1',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 111, 
        title: 'SKU A',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 11
    },
    {
        id: 112, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 11
    },
    {
        id: 113, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 11
    },
    { 
        id:12, 
        title: '1-2',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 121, 
        title: 'SKU A',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 12
    },
    {
        id: 122, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 12
    },
    {
        id: 123, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 12
    },
    { 
        id:13, 
        title: '1-3',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 131, 
        title: 'SKU D',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 13
    },
    {
        id: 132, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 13
    },
    {
        id: 133, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 13
    },
    { 
        id:14, 
        title: '1-4',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 141, 
        title: 'SKU E',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 14
    },
    {
        id: 142, 
        title: 'SKU F',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 14
    },
    {
        id: 143, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 14
    },
    { 
        id:15, 
        title: '1-5',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 151, 
        title: 'SKU A',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 15
    },
    {
        id: 152, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 15
    },
    {
        id: 153, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 15
    },
    { 
        id:21, 
        title: '2-1',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 211, 
        title: 'SKU C',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-27T23:59'),
        completionRatio: 0,
        parentTaskId: 21
    },
    {
        id: 212, 
        title: 'SKU A',
        start: new Date('2023-03-28T00:00'),
        end: new Date('2023-03-29T23:59'),
        completionRatio: 0,
        parentTaskId: 21
    },
    {
        id: 213, 
        title: 'SKU A',
        start: new Date('2023-03-30T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 21
    },
    { 
        id:22, 
        title: '2-2',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 221, 
        title: 'SKU C',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-27T23:59'),
        completionRatio: 0,
        parentTaskId: 22
    },
    {
        id: 222, 
        title: 'SKU E',
        start: new Date('2023-03-28T00:00'),
        end: new Date('2023-03-29T23:59'),
        completionRatio: 0,
        parentTaskId: 22
    },
    {
        id: 223, 
        title: 'SKU E',
        start: new Date('2023-03-30T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 22
    },
    { 
        id:23, 
        title: '2-3',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 231, 
        title: 'SKU C',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-27T23:59'),
        completionRatio: 0,
        parentTaskId: 23
    },
    {
        id: 232, 
        title: 'SKU E',
        start: new Date('2023-03-28T00:00'),
        end: new Date('2023-03-29T23:59'),
        completionRatio: 0,
        parentTaskId: 23
    },
    {
        id: 233, 
        title: 'SKU E',
        start: new Date('2023-03-30T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 23
    },
    { 
        id:24, 
        title: '2-4',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 241, 
        title: 'SKU C',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-27T23:59'),
        completionRatio: 0,
        parentTaskId: 24
    },
    {
        id: 242, 
        title: 'SKU D',
        start: new Date('2023-03-28T00:00'),
        end: new Date('2023-03-29T23:59'),
        completionRatio: 0,
        parentTaskId: 24
    },
    {
        id: 243, 
        title: 'SKU D',
        start: new Date('2023-03-30T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 24
    },
    { 
        id:25, 
        title: '2-5',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 251, 
        title: 'SKU C',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-27T23:59'),
        completionRatio: 0,
        parentTaskId: 25
    },
    {
        id: 252, 
        title: 'SKU D',
        start: new Date('2023-03-28T00:00'),
        end: new Date('2023-03-29T23:59'),
        completionRatio: 0,
        parentTaskId: 25
    },
    {
        id: 253, 
        title: 'SKU D',
        start: new Date('2023-03-30T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 25
    },
    { 
        id:31, 
        title: '3-1',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 311, 
        title: 'SKU D',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 31
    },
    {
        id: 312, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 31
    },
    {
        id: 313, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 31
    },
    { 
        id:32, 
        title: '3-2',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 321, 
        title: 'SKU A',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 32
    },
    {
        id: 322, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 32
    },
    {
        id: 323, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 32
    },
    { 
        id:33, 
        title: '3-3',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 331, 
        title: 'SKU D',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 33
    },
    {
        id: 332, 
        title: 'SKU D',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 33
    },
    {
        id: 333, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 33
    },
    { 
        id:34, 
        title: '3-4',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 341, 
        title: 'SKU D',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 34
    },
    {
        id: 342, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 34
    },
    {
        id: 343, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 34
    },
    { 
        id:35, 
        title: '3-5',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
    },
    {
        id: 351, 
        title: 'SKU A',
        start: new Date('2023-03-27T00:00'),
        end: new Date('2023-03-28T23:59'),
        completionRatio: 0,
        parentTaskId: 35
    },
    {
        id: 352, 
        title: 'SKU A',
        start: new Date('2023-03-29T00:00'),
        end: new Date('2023-03-30T23:59'),
        completionRatio: 0,
        parentTaskId: 35
    },
    {
        id: 353, 
        title: 'SKU C',
        start: new Date('2023-03-31T00:00'),
        end: new Date('2023-03-31T23:59'),
        completionRatio: 0,
        parentTaskId: 35
    },
];