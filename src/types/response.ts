export interface IApiResponse<T> {
    statusCode: number;
    success: boolean;
    message: string | null;
    data: T | null;
}
