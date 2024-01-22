import React, {FC, useEffect, useState} from "react";
import { api } from "../../../shared/api";

type Props = {
    children: ReturnType<FC>;
}

export const StatusApp: FC<Props> = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading');

    useEffect(() => {
        api.statusApp()
            .then((status) => setAppStatus(status))
            .catch(() => setAppStatus('err'))
    }, []);

    if (appStatus === 'err') {
        return <div>App недоступно :(</div>
    }

    if (appStatus === 'loading') {
        return <div>Загрузка...</div>
    }

    return (children)
}