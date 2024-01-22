import React, {FC, useEffect, useState} from "react";

import { User } from "../../../../../shared/api/types";
import { api } from "../../../../../shared/api";
import { Button, Card } from "antd";


/**Пример 1:
 * - Загрузка контента
 * - extra контент
 * */

type Props = {
    onDelete?: (id: number) => void;
}

export const UserInfo: FC<Props> = ({ onDelete}) => {
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        api.userInfo()
            .then((data) => setUserInfo(data))
            .catch(() => console.log('ошибка'))
    }, []);

    if (!userInfo) {
        return <Card>
            <span>loading...</span>
        </Card>
    }

    return (
        <Card>
            <div>{userInfo.name} {userInfo.position}</div>
            {onDelete && <Button onClick={() => onDelete(userInfo.id)}>Удалить</Button>}
        </Card>
    )
}