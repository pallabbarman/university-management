/* eslint-disable comma-dangle */
import paginationFields from 'constants/pagination';
import { semesterFilterableFields } from 'constants/semester';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
    allSemesters,
    createSemester,
    editSemester,
    removeSemester,
    singleSemester,
} from 'services/semester.service';
import { ISemester } from 'types/semester';
import catchAsync from 'utils/catchAsync';
import pick from 'utils/pick';
import sendResponse from 'utils/sendResponse';

export const newSemester = catchAsync(async (req: Request, res: Response) => {
    const { ...semesterData } = req.body;
    const result = await createSemester(semesterData);

    sendResponse<ISemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester is created successfully!',
        data: result,
    });
});

export const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, semesterFilterableFields);
    const paginationOption = pick(req.query, paginationFields);

    const result = await allSemesters(filters, paginationOption);

    sendResponse<ISemester[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semesters is retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});

export const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await singleSemester(id);

    sendResponse<ISemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester is retrieved successfully!',
        data: result,
    });
});

export const updateSemester = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await editSemester(id, updatedData);

    sendResponse<ISemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester is updated successfully!',
        data: result,
    });
});

export const deleteSemester = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await removeSemester(id);

    sendResponse<ISemester>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Semester is deleted successfully!',
        data: result,
    });
});
