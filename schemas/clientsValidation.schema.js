const { check, param, body } = require("express-validator");

module.exports = {
    validateCreateClient: [
        body('contract_id')
            .notEmpty().withMessage('Contract id field cannot be empty!').bail()
            .isNumeric().withMessage('Contract id field must be numeric! (Whitespaces are not valid)').bail(),
    
        body('case_number')
            .notEmpty().withMessage('Case number field cannot be empty!').bail()
            .isNumeric().withMessage('Case number field can only contain numbers! (Whitespaces, characters or special characters are not valid)').bail()
            .isLength({ min: 8, max: 9 }).withMessage('Case number field must have 8 or 9 digits').bail(),
    ],

    validateLogInClient: [
        body('case_number')
            .notEmpty().withMessage('Case number field cannot be empty!').bail()
            .isNumeric().withMessage('Case number field can only contain numbers! (Whitespaces, characters or special characters are not valid)').bail()
            .isLength({ min: 8, max: 9 }).withMessage('Case number field must have 8 or 9 digits').bail()
    ],

    validateFulfilled: [
        body('client_id')
            .notEmpty().withMessage('The client id cannot be empty').bail()
            .isNumeric().withMessage('The client id must be an integer').bail(),
    ],
    
    validateGetAbsoluteValues: [
        body('clientId')
            .notEmpty().withMessage('Client id cannot be empty!')
            .bail()
            .isNumeric().withMessage('Client id must be an integer!')
            .bail(),

        body('clientUuid')
            .notEmpty().withMessage('Client uuid cannot be empty!')
            .bail()
            .isString().withMessage('Client uuid must be a string!')
            .bail(),

        body('contractId')
            .notEmpty().withMessage('Contract id cannot be empty')
            .bail()
            .isNumeric().withMessage('Contract id must be an integer')
            .bail()
    ],

    validateGetComments: [
        param("clientId")
            .notEmpty()
            .withMessage("Client id field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
            "Contract id field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),
    ],

    validateDeleteComments: [
        param("commentUuid")
            .notEmpty()
            .withMessage("CommentUuid field cannot be empty!")
            .bail()
    ],

    validateUpsertComments: [
        body("id")
            .notEmpty()
            .withMessage("id field cannot be empty!")
            .bail(),

        body("clientId")
            .notEmpty()
            .withMessage("clientId field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
                "clientId field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),

        body("fileId")
            .notEmpty()
            .withMessage("fileId field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
                "fileId field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),

        body("author")
            .notEmpty()
            .withMessage("Author field cannot be empty!")
            .bail(),

        body("x")
            .notEmpty()
            .withMessage("Author field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
                "X field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),

        body("y")
            .notEmpty()
            .withMessage("Author field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
                "Y field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),

        body("color")
            .notEmpty()
            .withMessage("Author field cannot be empty!")
            .bail()
            .isArray({ min: 3 })
            .withMessage("color must be an array with at least three element")
            .bail()
            .custom((value) => {
                // Check if each element in the array is an integer
                for (const num of value) {
                    if (!Number.isInteger(num)) {
                        throw new Error("color array must contain integers only");
                    }
                }
                return true;
            }),

        body("opacity")
            .notEmpty()
            .withMessage("Opacity field cannot be empty!")
            .bail()
            .isNumeric()
            .withMessage(
                "Opacity field must be numeric! (Whitespaces are not valid)"
            )
            .bail(),

        body("state")
            .notEmpty()
            .withMessage("State field cannot be empty!")
            .bail(),
        
    ],

};
