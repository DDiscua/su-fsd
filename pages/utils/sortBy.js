import * as moment from 'moment';

export const sortBy = (items, key) => {
    switch (key) {
        case 0:
            return sortByCreatedAt(items);
        case 1:
            return sortByAZ(items);
        case 2:
            return sorByZA(items);
        default:
            return items;
    }
}

export const sortByCreatedAt = (items) => {
    return items.sort((a, b) => {
        const dateA = moment(a.date, 'DD/MM/YYYY[T]HH:mm:ss');
        const dateB = moment(b.date, 'DD/MM/YYYY[T]HH:mm:ss');
        return dateA.unix() - dateB.unix();
    });
}



export const sortByAZ = (items) => {
    return items.sort((a, b) => {
        return a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
    });
}

export const sorByZA = (items) => {
    return items.sort((a, b) => {
        return b.name.localeCompare(a.name, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
    });
}
