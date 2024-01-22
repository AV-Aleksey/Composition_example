class Api {
    private async request<T>(data: T): Promise<T> {
        return new Promise((resolve) => setTimeout(() => {
            return resolve(data);
        }, 2000));
    }

    public async statusApp() {
        return this.request('done');
    }

    public async userInfo() {
        return this.request({ id: 1, name: 'Aleksey', position: 'manager' });
    }
}

export const api = new Api();

