import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const headers: any = {
    'Content-Type': 'application/json'
};

class Http {
    private static http: AxiosInstance;
    private static instance: Http;

    private baseURL: string = 'https://api.github.com';

    constructor() {
        if (Http.http) {
            return Http.instance;
        }

        Http.http = axios.create({
            baseURL: this.baseURL,
        });
    }

    get(baseURL: string = this.baseURL, path: string = '', config: AxiosRequestConfig = {}): Promise<any> {
        const reqHeaders: any =  {
            ...headers,
        };

        return axios.get(`${baseURL}${path}`, { ...config, headers: reqHeaders });
    }

    post(path: string, data: any): Promise<any> {
        const token = localStorage.getItem('token');
        const reqHeaders: any =  {
            ...headers,
            'Authorization': token
        };

        return axios.post(`${this.baseURL}${path}`, data, { headers: reqHeaders });
    }

    put(path: string, data: any): Promise<any> {
        const token = localStorage.getItem('token');
        const reqHeaders: any =  {
            ...headers,
            'Authorization': token
        };

        return axios.put(`${this.baseURL}${path}`, data, { headers: reqHeaders });
    }

    remove(path: string): Promise<any> {
        const token = localStorage.getItem('token');
        const reqHeaders: any =  {
            ...headers,
            'Authorization': token
        };

        return axios.delete(`${this.baseURL}${path}`, { headers: reqHeaders });
    }

}

export default new Http();