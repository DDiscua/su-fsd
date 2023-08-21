import fs from 'fs';
import path from 'path';
import getConfig from 'next/config'


export default function handler(req, res) {
    try {
        const dir = path.resolve('./public', 'data.csv');

        const file = fs.readFileSync(dir, 'utf8');

        const mapJson = mapData(file.toString());

        res.status(200).json(mapJson)

    } catch (e) {
        console.log('error', e);
    }


}


const mapData = (data) => {
    const array = data.split('\n');
    console.log(data);
    const retVal = [];
    for (let i = 0; i < array.length; i++) {
        const split = array[i].split(',');
        retVal.push({
            date: split[0],
            name: split[1].replace('\r', '')
        });
    }

    return retVal;
}
