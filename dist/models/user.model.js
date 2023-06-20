"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable comma-dangle */
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    student: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Student',
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademicFaculty',
    },
    admin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;