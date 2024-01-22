import React, {FC, useEffect, useState} from "react";
import { Card } from "antd";

type Props<T> = {
    fetch: () => Promise<T>;
    children: (data: T) => ReturnType<FC>;
}

export const QueryCard = <T,>({ fetch, children }: Props<T>) => {
    const [data, setData] = useState<any>(null);
    const [hasErr, setHasError] = useState(false);

    useEffect(() => {
        fetch()
            .then((res) => setData(res))
            .catch(() => setHasError(true))
    }, [])

    if (hasErr) {
        return <Card>
            <span>Ошибка загрузки!</span>
        </Card>
    }

    if (!data) {
        return <Card>
            <span>Загрузка...</span>
        </Card>
    }


    return (
        <Card>
            {children(data)}
        </Card>
    )
}