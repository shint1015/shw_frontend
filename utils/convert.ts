

type Column = {
    field: string,
    headerName: string,
    width: number,
    align?: string,
}

type ConvertArr = {
    roles?: Record<number, string>,
    workUsers?: Record<number, string>,
}

export const convertFormatTableData = (data: Record<string, any>, columns:Column[], convertArr?: ConvertArr) => {
    let rows: Record<string, any> = [];
    const roles = convertArr?.roles ?? {};
    const workUsers = convertArr?.workUsers ?? {};
    if (!data) {
        return rows;
    }

    for (let i = 0; i < Object.keys(data).length; i++) {
        let record: { [key: string]: string } = {};
        for (let j = 0; j < columns.length; j++) {
            if (columns[j].field === 'startedAt' || columns[j].field === 'endedAt') {
                record[columns[j].field] = new Date(Number(data[i][columns[j].field]) * 1000).toLocaleString();
                continue;
            }
            if (columns[j].field === 'role') {
                record[columns[j].field] = roles[data[i]['roleId']] ?? '';
                continue;
            }
            if (columns[j].field === 'workTo') {
                record[columns[j].field] = workUsers[data[i][columns[j].field]] ?? '';
                continue;
            }

            record[columns[j].field] = data[i][columns[j].field] as string;
        }
        rows.push(record);
    }
    return rows;
}