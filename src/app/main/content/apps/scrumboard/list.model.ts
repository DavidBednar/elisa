import { ElisaUtils } from '@elisa/utils';

export class List
{
    id: string;
    name: string;
    idCards: string[];

    constructor(list)
    {
        this.id = list.id || ElisaUtils.generateGUID();
        this.name = list.name || '';
        this.idCards = [];
    }
}
