"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminValidation = void 0;
/* eslint-disable import/prefer-default-export */
const zod_1 = require("zod");
exports.updateAdminValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
            middleName: zod_1.z.string().optional(),
        }),
        dateOfBirth: zod_1.z.string().optional(),
        gender: zod_1.z.string().optional(),
        bloodGroup: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        contactNo: zod_1.z.string().optional(),
        emergencyContactNo: zod_1.z.string().optional(),
        presentAddress: zod_1.z.string().optional(),
        permanentAddress: zod_1.z.string().optional(),
        managementDepartment: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
    }),
});