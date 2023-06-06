import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

// eslint-disable-next-line prettier/prettier, max-len, consistent-return
const validateRequest = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            });
            return next();
        } catch (error) {
            next(error);
        }
    };

export default validateRequest;
