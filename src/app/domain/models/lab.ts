import{ Module } from './Module';
import{ User } from './User';

export class Lab{
    id?: number;
    authors?: User[];
    title?: string;
    modules?: Module[];
}
