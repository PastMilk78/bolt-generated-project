"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTransaction = (type)=>{\n        if (!description || !amount || parseFloat(amount) <= 0) {\n            alert(\"Por favor, completa todos los campos correctamente.\");\n            return;\n        }\n        const transactionAmount = type === \"income\" ? parseFloat(amount) : -parseFloat(amount);\n        const newTransaction = {\n            description,\n            amount: transactionAmount,\n            time: new Date()\n        };\n        setTransactions([\n            ...transactions,\n            newTransaction\n        ]);\n        setDescription(\"\");\n        setAmount(\"\");\n    };\n    const removeTransaction = (index)=>{\n        const now = new Date();\n        const transactionTime = new Date(transactions[index].time);\n        const diff = (now - transactionTime) / 1000 / 60; // diferencia en minutos\n        if (diff <= 1) {\n            setTransactions(transactions.filter((_, i)=>i !== index));\n        } else {\n            alert(\"No se puede eliminar la transacci\\xf3n despu\\xe9s de un minuto.\");\n        }\n    };\n    const total = transactions.reduce((acc, transaction)=>acc + transaction.amount, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.title,\n                children: \"Think Deep Accounting\"\n            }, void 0, false, {\n                fileName: \"/home/project/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.inputContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Descripci\\xf3n\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        style: styles.input\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"Monto\",\n                        value: amount,\n                        onChange: (e)=>setAmount(e.target.value),\n                        style: styles.input\n                    }, void 0, false, {\n                        fileName: \"/home/project/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.buttonContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addTransaction(\"income\"),\n                                style: styles.circleButton,\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/home/project/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addTransaction(\"expense\"),\n                                style: styles.circleButton,\n                                children: \"-\"\n                            }, void 0, false, {\n                                fileName: \"/home/project/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/project/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/project/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.tableContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    style: styles.table,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                style: styles.headerRow,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        style: styles.th,\n                                        children: \"Descripci\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/project/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        style: styles.th,\n                                        children: \"Monto (MXN $)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/project/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        style: styles.th,\n                                        children: \"Hora\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/project/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        style: styles.th,\n                                        children: \"Acciones\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/project/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/project/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: transactions.map((transaction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: styles.td,\n                                            children: transaction.description\n                                        }, void 0, false, {\n                                            fileName: \"/home/project/pages/index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: styles.td,\n                                            children: transaction.amount.toFixed(2)\n                                        }, void 0, false, {\n                                            fileName: \"/home/project/pages/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: styles.td,\n                                            children: transaction.time.toLocaleTimeString()\n                                        }, void 0, false, {\n                                            fileName: \"/home/project/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            style: styles.td,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>removeTransaction(index),\n                                                style: styles.deleteButton,\n                                                children: \"Eliminar\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/project/pages/index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/project/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/project/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/project/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/project/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.totalContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: styles.total,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Total\"\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: styles.verticalSeparator\n                        }, void 0, false, {\n                            fileName: \"/home/project/pages/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: styles.totalAmount,\n                            children: [\n                                \"MXN $\",\n                                total.toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/project/pages/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/project/pages/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/project/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/project/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yMp8cJdXXQ4Jq6qrOHK4LEZMPhE=\");\n_c = Home;\nconst styles = {\n    container: {\n        padding: \"20px\",\n        fontFamily: \"Helvetica, Arial, sans-serif\",\n        color: \"#FFFFFF\",\n        backgroundColor: \"#1a1a1a\",\n        textAlign: \"center\",\n        minHeight: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\"\n    },\n    title: {\n        letterSpacing: \"-0.05em\",\n        lineHeight: \"0.85em\",\n        color: \"#FFD700\",\n        marginBottom: \"20px\",\n        fontWeight: \"normal\"\n    },\n    inputContainer: {\n        margin: \"20px 0\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n    },\n    input: {\n        margin: \"10px 0\",\n        padding: \"10px\",\n        fontSize: \"16px\",\n        borderRadius: \"20px\",\n        border: \"1px solid #FFD700\",\n        backgroundColor: \"#333333\",\n        color: \"#FFFFFF\",\n        width: \"80%\"\n    },\n    buttonContainer: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        marginTop: \"10px\"\n    },\n    circleButton: {\n        width: \"40px\",\n        height: \"40px\",\n        backgroundColor: \"#FFD700\",\n        border: \"none\",\n        color: \"#333333\",\n        cursor: \"pointer\",\n        margin: \"0 5px\",\n        borderRadius: \"50%\",\n        fontSize: \"20px\",\n        transition: \"background-color 0.3s\"\n    },\n    deleteButton: {\n        padding: \"5px 10px\",\n        backgroundColor: \"#FF6347\",\n        border: \"none\",\n        color: \"#FFFFFF\",\n        cursor: \"pointer\",\n        borderRadius: \"20px\",\n        transition: \"background-color 0.3s\"\n    },\n    tableContainer: {\n        backgroundColor: \"#2a2a2a\",\n        borderRadius: \"20px\",\n        padding: \"20px\",\n        margin: \"20px auto\",\n        width: \"80%\",\n        boxShadow: \"0 0 10px rgba(0, 0, 0, 0.5)\"\n    },\n    table: {\n        width: \"100%\",\n        borderCollapse: \"collapse\"\n    },\n    headerRow: {\n        backgroundColor: \"#444444\"\n    },\n    th: {\n        borderBottom: \"2px solid #FFD700\",\n        padding: \"10px\",\n        color: \"#FFD700\",\n        borderRight: \"1px solid #333333\",\n        borderRadius: \"10px\",\n        fontWeight: \"normal\"\n    },\n    td: {\n        borderBottom: \"1px solid #444444\",\n        padding: \"10px\",\n        fontWeight: \"normal\"\n    },\n    totalContainer: {\n        backgroundColor: \"#2a2a2a\",\n        borderRadius: \"20px\",\n        padding: \"10px\",\n        margin: \"20px auto\",\n        width: \"80%\",\n        boxShadow: \"0 0 10px rgba(0, 0, 0, 0.5)\"\n    },\n    total: {\n        color: \"#FFFFFF\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        fontWeight: \"normal\"\n    },\n    totalAmount: {\n        color: \"#FFD700\",\n        marginLeft: \"10px\",\n        fontWeight: \"normal\"\n    },\n    verticalSeparator: {\n        width: \"1px\",\n        height: \"20px\",\n        backgroundColor: \"#FFD700\",\n        margin: \"0 10px\"\n    }\n};\nstyles.circleButton[\":hover\"] = {\n    backgroundColor: \"#FFC107\"\n};\nstyles.deleteButton[\":hover\"] = {\n    backgroundColor: \"#FF4500\"\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpQztBQUVsQixTQUFTQyxPQUFPOztJQUM3QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsTUFBTVEsaUJBQWlCLENBQUNDLE9BQVM7UUFDL0IsSUFBSSxDQUFDTCxlQUFlLENBQUNFLFVBQVVJLFdBQVdKLFdBQVcsR0FBRztZQUN0REssTUFBTTtZQUNOO1FBQ0YsQ0FBQztRQUVELE1BQU1DLG9CQUFvQkgsU0FBUyxXQUFXQyxXQUFXSixVQUFVLENBQUNJLFdBQVdKLE9BQU87UUFDdEYsTUFBTU8saUJBQWlCO1lBQ3JCVDtZQUNBRSxRQUFRTTtZQUNSRSxNQUFNLElBQUlDO1FBQ1o7UUFFQVosZ0JBQWdCO2VBQUlEO1lBQWNXO1NBQWU7UUFDakRSLGVBQWU7UUFDZkUsVUFBVTtJQUNaO0lBRUEsTUFBTVMsb0JBQW9CLENBQUNDLFFBQVU7UUFDbkMsTUFBTUMsTUFBTSxJQUFJSDtRQUNoQixNQUFNSSxrQkFBa0IsSUFBSUosS0FBS2IsWUFBWSxDQUFDZSxNQUFNLENBQUNILElBQUk7UUFDekQsTUFBTU0sT0FBTyxDQUFDRixNQUFNQyxlQUFjLElBQUssT0FBTyxJQUFJLHdCQUF3QjtRQUUxRSxJQUFJQyxRQUFRLEdBQUc7WUFDYmpCLGdCQUFnQkQsYUFBYW1CLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxNQUFNTjtRQUN0RCxPQUFPO1lBQ0xOLE1BQU07UUFDUixDQUFDO0lBQ0g7SUFFQSxNQUFNYSxRQUFRdEIsYUFBYXVCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxjQUFnQkQsTUFBTUMsWUFBWXJCLE1BQU0sRUFBRTtJQUVsRixxQkFDRSw4REFBQ3NCO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMxQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLEtBQUs7MEJBQUU7Ozs7OzswQkFDekIsOERBQUNMO2dCQUFJQyxPQUFPQyxPQUFPSSxjQUFjOztrQ0FDL0IsOERBQUNDO3dCQUNDMUIsTUFBSzt3QkFDTDJCLGFBQVk7d0JBQ1pDLE9BQU9qQzt3QkFDUGtDLFVBQVUsQ0FBQ0MsSUFBTWxDLGVBQWVrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzlDUixPQUFPQyxPQUFPSyxLQUFLOzs7Ozs7a0NBRXJCLDhEQUFDQTt3QkFDQzFCLE1BQUs7d0JBQ0wyQixhQUFZO3dCQUNaQyxPQUFPL0I7d0JBQ1BnQyxVQUFVLENBQUNDLElBQU1oQyxVQUFVZ0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN6Q1IsT0FBT0MsT0FBT0ssS0FBSzs7Ozs7O2tDQUVyQiw4REFBQ1A7d0JBQUlDLE9BQU9DLE9BQU9XLGVBQWU7OzBDQUNoQyw4REFBQ0M7Z0NBQU9DLFNBQVMsSUFBTW5DLGVBQWU7Z0NBQVdxQixPQUFPQyxPQUFPYyxZQUFZOzBDQUFFOzs7Ozs7MENBQzdFLDhEQUFDRjtnQ0FBT0MsU0FBUyxJQUFNbkMsZUFBZTtnQ0FBWXFCLE9BQU9DLE9BQU9jLFlBQVk7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbEYsOERBQUNoQjtnQkFBSUMsT0FBT0MsT0FBT2UsY0FBYzswQkFDL0IsNEVBQUNDO29CQUFNakIsT0FBT0MsT0FBT2dCLEtBQUs7O3NDQUN4Qiw4REFBQ0M7c0NBQ0MsNEVBQUNDO2dDQUFHbkIsT0FBT0MsT0FBT21CLFNBQVM7O2tEQUN6Qiw4REFBQ0M7d0NBQUdyQixPQUFPQyxPQUFPb0IsRUFBRTtrREFBRTs7Ozs7O2tEQUN0Qiw4REFBQ0E7d0NBQUdyQixPQUFPQyxPQUFPb0IsRUFBRTtrREFBRTs7Ozs7O2tEQUN0Qiw4REFBQ0E7d0NBQUdyQixPQUFPQyxPQUFPb0IsRUFBRTtrREFBRTs7Ozs7O2tEQUN0Qiw4REFBQ0E7d0NBQUdyQixPQUFPQyxPQUFPb0IsRUFBRTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzFCLDhEQUFDQztzQ0FDRWpELGFBQWFrRCxHQUFHLENBQUMsQ0FBQ3pCLGFBQWFWLHNCQUM5Qiw4REFBQytCOztzREFDQyw4REFBQ0s7NENBQUd4QixPQUFPQyxPQUFPdUIsRUFBRTtzREFBRzFCLFlBQVl2QixXQUFXOzs7Ozs7c0RBQzlDLDhEQUFDaUQ7NENBQUd4QixPQUFPQyxPQUFPdUIsRUFBRTtzREFBRzFCLFlBQVlyQixNQUFNLENBQUNnRCxPQUFPLENBQUM7Ozs7OztzREFDbEQsOERBQUNEOzRDQUFHeEIsT0FBT0MsT0FBT3VCLEVBQUU7c0RBQUcxQixZQUFZYixJQUFJLENBQUN5QyxrQkFBa0I7Ozs7OztzREFDMUQsOERBQUNGOzRDQUFHeEIsT0FBT0MsT0FBT3VCLEVBQUU7c0RBQ2xCLDRFQUFDWDtnREFBT0MsU0FBUyxJQUFNM0Isa0JBQWtCQztnREFBUVksT0FBT0MsT0FBTzBCLFlBQVk7MERBQUU7Ozs7Ozs7Ozs7OzttQ0FMeEV2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVlqQiw4REFBQ1c7Z0JBQUlDLE9BQU9DLE9BQU8yQixjQUFjOzBCQUMvQiw0RUFBQ0M7b0JBQUc3QixPQUFPQyxPQUFPTixLQUFLOztzQ0FDckIsOERBQUNtQztzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDL0I7NEJBQUlDLE9BQU9DLE9BQU84QixpQkFBaUI7Ozs7OztzQ0FDcEMsOERBQUNEOzRCQUFLOUIsT0FBT0MsT0FBTytCLFdBQVc7O2dDQUFFO2dDQUFNckMsTUFBTThCLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9ELENBQUM7R0E3RnVCckQ7S0FBQUE7QUErRnhCLE1BQU02QixTQUFTO0lBQ2JDLFdBQVc7UUFDVCtCLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLGlCQUFpQjtRQUNqQkMsV0FBVztRQUNYQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7SUFDZDtJQUNBdEMsT0FBTztRQUNMdUMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pULE9BQU87UUFDUFUsY0FBYztRQUNkQyxZQUFZO0lBQ2Q7SUFDQXpDLGdCQUFnQjtRQUNkMEMsUUFBUTtRQUNSUixTQUFTO1FBQ1RDLGVBQWU7UUFDZkUsWUFBWTtJQUNkO0lBQ0FwQyxPQUFPO1FBQ0x5QyxRQUFRO1FBQ1JkLFNBQVM7UUFDVGUsVUFBVTtRQUNWQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUmQsaUJBQWlCO1FBQ2pCRCxPQUFPO1FBQ1BnQixPQUFPO0lBQ1Q7SUFDQXZDLGlCQUFpQjtRQUNmMkIsU0FBUztRQUNURSxnQkFBZ0I7UUFDaEJXLFdBQVc7SUFDYjtJQUNBckMsY0FBYztRQUNab0MsT0FBTztRQUNQRSxRQUFRO1FBQ1JqQixpQkFBaUI7UUFDakJjLFFBQVE7UUFDUmYsT0FBTztRQUNQbUIsUUFBUTtRQUNSUCxRQUFRO1FBQ1JFLGNBQWM7UUFDZEQsVUFBVTtRQUNWTyxZQUFZO0lBQ2Q7SUFDQTVCLGNBQWM7UUFDWk0sU0FBUztRQUNURyxpQkFBaUI7UUFDakJjLFFBQVE7UUFDUmYsT0FBTztRQUNQbUIsUUFBUTtRQUNSTCxjQUFjO1FBQ2RNLFlBQVk7SUFDZDtJQUNBdkMsZ0JBQWdCO1FBQ2RvQixpQkFBaUI7UUFDakJhLGNBQWM7UUFDZGhCLFNBQVM7UUFDVGMsUUFBUTtRQUNSSSxPQUFPO1FBQ1BLLFdBQVc7SUFDYjtJQUNBdkMsT0FBTztRQUNMa0MsT0FBTztRQUNQTSxnQkFBZ0I7SUFDbEI7SUFDQXJDLFdBQVc7UUFDVGdCLGlCQUFpQjtJQUNuQjtJQUNBZixJQUFJO1FBQ0ZxQyxjQUFjO1FBQ2R6QixTQUFTO1FBQ1RFLE9BQU87UUFDUHdCLGFBQWE7UUFDYlYsY0FBYztRQUNkSCxZQUFZO0lBQ2Q7SUFDQXRCLElBQUk7UUFDRmtDLGNBQWM7UUFDZHpCLFNBQVM7UUFDVGEsWUFBWTtJQUNkO0lBQ0FsQixnQkFBZ0I7UUFDZFEsaUJBQWlCO1FBQ2pCYSxjQUFjO1FBQ2RoQixTQUFTO1FBQ1RjLFFBQVE7UUFDUkksT0FBTztRQUNQSyxXQUFXO0lBQ2I7SUFDQTdELE9BQU87UUFDTHdDLE9BQU87UUFDUEksU0FBUztRQUNURSxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkksWUFBWTtJQUNkO0lBQ0FkLGFBQWE7UUFDWEcsT0FBTztRQUNQeUIsWUFBWTtRQUNaZCxZQUFZO0lBQ2Q7SUFDQWYsbUJBQW1CO1FBQ2pCb0IsT0FBTztRQUNQRSxRQUFRO1FBQ1JqQixpQkFBaUI7UUFDakJXLFFBQVE7SUFDVjtBQUNGO0FBRUE5QyxPQUFPYyxZQUFZLENBQUMsU0FBUyxHQUFHO0lBQzlCcUIsaUJBQWlCO0FBQ25CO0FBRUFuQyxPQUFPMEIsWUFBWSxDQUFDLFNBQVMsR0FBRztJQUM5QlMsaUJBQWlCO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGFkZFRyYW5zYWN0aW9uID0gKHR5cGUpID0+IHtcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFhbW91bnQgfHwgcGFyc2VGbG9hdChhbW91bnQpIDw9IDApIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGNvbXBsZXRhIHRvZG9zIGxvcyBjYW1wb3MgY29ycmVjdGFtZW50ZS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbkFtb3VudCA9IHR5cGUgPT09ICdpbmNvbWUnID8gcGFyc2VGbG9hdChhbW91bnQpIDogLXBhcnNlRmxvYXQoYW1vdW50KTtcbiAgICBjb25zdCBuZXdUcmFuc2FjdGlvbiA9IHtcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgYW1vdW50OiB0cmFuc2FjdGlvbkFtb3VudCxcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgfTtcblxuICAgIHNldFRyYW5zYWN0aW9ucyhbLi4udHJhbnNhY3Rpb25zLCBuZXdUcmFuc2FjdGlvbl0pO1xuICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgICBzZXRBbW91bnQoJycpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRyYW5zYWN0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0cmFuc2FjdGlvblRpbWUgPSBuZXcgRGF0ZSh0cmFuc2FjdGlvbnNbaW5kZXhdLnRpbWUpO1xuICAgIGNvbnN0IGRpZmYgPSAobm93IC0gdHJhbnNhY3Rpb25UaW1lKSAvIDEwMDAgLyA2MDsgLy8gZGlmZXJlbmNpYSBlbiBtaW51dG9zXG5cbiAgICBpZiAoZGlmZiA8PSAxKSB7XG4gICAgICBzZXRUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ05vIHNlIHB1ZWRlIGVsaW1pbmFyIGxhIHRyYW5zYWNjacOzbiBkZXNwdcOpcyBkZSB1biBtaW51dG8uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvdGFsID0gdHJhbnNhY3Rpb25zLnJlZHVjZSgoYWNjLCB0cmFuc2FjdGlvbikgPT4gYWNjICsgdHJhbnNhY3Rpb24uYW1vdW50LCAwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRoaW5rIERlZXAgQWNjb3VudGluZzwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs25cIlxuICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vbnRvXCJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZFRyYW5zYWN0aW9uKCdpbmNvbWUnKX0gc3R5bGU9e3N0eWxlcy5jaXJjbGVCdXR0b259Pis8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZFRyYW5zYWN0aW9uKCdleHBlbnNlJyl9IHN0eWxlPXtzdHlsZXMuY2lyY2xlQnV0dG9ufT4tPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGFibGVDb250YWluZXJ9PlxuICAgICAgICA8dGFibGUgc3R5bGU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHN0eWxlPXtzdHlsZXMuaGVhZGVyUm93fT5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGh9PkRlc2NyaXBjacOzbjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzdHlsZT17c3R5bGVzLnRofT5Nb250byAoTVhOICQpPC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXtzdHlsZXMudGh9PkhvcmE8L3RoPlxuICAgICAgICAgICAgICA8dGggc3R5bGU9e3N0eWxlcy50aH0+QWNjaW9uZXM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17c3R5bGVzLnRkfT57dHJhbnNhY3Rpb24uZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3N0eWxlcy50ZH0+e3RyYW5zYWN0aW9uLmFtb3VudC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzdHlsZXMudGR9Pnt0cmFuc2FjdGlvbi50aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzdHlsZXMudGR9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVUcmFuc2FjdGlvbihpbmRleCl9IHN0eWxlPXtzdHlsZXMuZGVsZXRlQnV0dG9ufT5FbGltaW5hcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxuICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy50b3RhbH0+XG4gICAgICAgICAgPHNwYW4+VG90YWw8L3NwYW4+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnZlcnRpY2FsU2VwYXJhdG9yfT48L2Rpdj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnRvdGFsQW1vdW50fT5NWE4gJHt0b3RhbC50b0ZpeGVkKDIpfTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWExYTFhJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICB0aXRsZToge1xuICAgIGxldHRlclNwYWNpbmc6ICctMC4wNWVtJyxcbiAgICBsaW5lSGVpZ2h0OiAnMC44NWVtJyxcbiAgICBjb2xvcjogJyNGRkQ3MDAnLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICB9LFxuICBpbnB1dENvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogJzIwcHggMCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBpbnB1dDoge1xuICAgIG1hcmdpbjogJzEwcHggMCcsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNGRkQ3MDAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMzMzMnLFxuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgd2lkdGg6ICc4MCUnLFxuICB9LFxuICBidXR0b25Db250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICB9LFxuICBjaXJjbGVCdXR0b246IHtcbiAgICB3aWR0aDogJzQwcHgnLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkQ3MDAnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWFyZ2luOiAnMCA1cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjNzJyxcbiAgfSxcbiAgZGVsZXRlQnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzVweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkY2MzQ3JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MnLFxuICB9LFxuICB0YWJsZUNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMyYTJhMmEnLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICBtYXJnaW46ICcyMHB4IGF1dG8nLFxuICAgIHdpZHRoOiAnODAlJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICB9LFxuICB0YWJsZToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gIH0sXG4gIGhlYWRlclJvdzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyM0NDQ0NDQnLFxuICB9LFxuICB0aDoge1xuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjRkZENzAwJyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgY29sb3I6ICcjRkZENzAwJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjMzMzMzMzJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgfSxcbiAgdGQ6IHtcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzQ0NDQ0NCcsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICB9LFxuICB0b3RhbENvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMyYTJhMmEnLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBtYXJnaW46ICcyMHB4IGF1dG8nLFxuICAgIHdpZHRoOiAnODAlJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICB9LFxuICB0b3RhbDoge1xuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgfSxcbiAgdG90YWxBbW91bnQ6IHtcbiAgICBjb2xvcjogJyNGRkQ3MDAnLFxuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgfSxcbiAgdmVydGljYWxTZXBhcmF0b3I6IHtcbiAgICB3aWR0aDogJzFweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRDcwMCcsXG4gICAgbWFyZ2luOiAnMCAxMHB4JyxcbiAgfSxcbn07XG5cbnN0eWxlcy5jaXJjbGVCdXR0b25bJzpob3ZlciddID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZDMTA3Jyxcbn07XG5cbnN0eWxlcy5kZWxldGVCdXR0b25bJzpob3ZlciddID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkY0NTAwJyxcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImFtb3VudCIsInNldEFtb3VudCIsImFkZFRyYW5zYWN0aW9uIiwidHlwZSIsInBhcnNlRmxvYXQiLCJhbGVydCIsInRyYW5zYWN0aW9uQW1vdW50IiwibmV3VHJhbnNhY3Rpb24iLCJ0aW1lIiwiRGF0ZSIsInJlbW92ZVRyYW5zYWN0aW9uIiwiaW5kZXgiLCJub3ciLCJ0cmFuc2FjdGlvblRpbWUiLCJkaWZmIiwiZmlsdGVyIiwiXyIsImkiLCJ0b3RhbCIsInJlZHVjZSIsImFjYyIsInRyYW5zYWN0aW9uIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwiaW5wdXRDb250YWluZXIiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b25Db250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY2lyY2xlQnV0dG9uIiwidGFibGVDb250YWluZXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJoZWFkZXJSb3ciLCJ0aCIsInRib2R5IiwibWFwIiwidGQiLCJ0b0ZpeGVkIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiZGVsZXRlQnV0dG9uIiwidG90YWxDb250YWluZXIiLCJoMiIsInNwYW4iLCJ2ZXJ0aWNhbFNlcGFyYXRvciIsInRvdGFsQW1vdW50IiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImhlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});