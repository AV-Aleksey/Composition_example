import React, {useEffect, useState} from "react";
import { Layout } from "../../shared/components/Layout";

import App from "./App/App";
import { api } from "../../shared/api";
import {StatusApp} from "./StatusApp";

/**@Пример
 * - Загрузка критически важных данных
 * */
export const Root = () => {
    return (
        <Layout>
            <StatusApp>
                <App />
            </StatusApp>
        </Layout>
    )
}