(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        332: function(module, exports, __webpack_require__) {
            __webpack_require__(333),
                __webpack_require__(437),
                (module.exports = __webpack_require__(438));
        },
        438: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        145
                    );
                    Object(
                        _storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure
                    )(function loadStories() {
                        __webpack_require__(591);
                    }, module);
                }.call(this, __webpack_require__(165)(module));
        },
        591: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                            0
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                            react__WEBPACK_IMPORTED_MODULE_0__
                        ),
                        _storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                            203
                        ),
                        _storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            151
                        ),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                            145
                        ),
                        _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                            63
                        );
                    Object(
                        _storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.setDefaults
                    )({header: !1, inline: !0, source: !0});
                    var stories = Object(
                            _storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf
                        )('react-styled-toggle', module),
                        _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            null
                        ),
                        _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            {
                                backgroundColorChecked: 'papayawhip',
                                backgroundColorUnchecked: 'aquamarine'
                            }
                        ),
                        _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            {
                                width: 40,
                                height: 20,
                                sliderWidth: 12,
                                sliderHeight: 12,
                                translate: 19
                            }
                        ),
                        _ref4 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            {name: 'toggle', value: 'toggleValue'}
                        ),
                        _ref5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            {labelRight: 'Label'}
                        ),
                        _ref6 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src__WEBPACK_IMPORTED_MODULE_4__.a,
                            {labelLeft: 'Label'}
                        );
                    stories
                        .addDecorator(function(story, context) {
                            return Object(
                                _storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.withInfo
                            )('common info')(story)(context);
                        })
                        .addDecorator(
                            _storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs
                        )
                        .add('Standard', function() {
                            return _ref;
                        })
                        .add('Controlled component', function() {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _src__WEBPACK_IMPORTED_MODULE_4__.a,
                                {
                                    disabled: Object(
                                        _storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.boolean
                                    )('disabled', !1),
                                    checked: Object(
                                        _storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.boolean
                                    )('checked', !0)
                                }
                            );
                        })
                        .add('Customized colors', function() {
                            return _ref2;
                        })
                        .add('Customized size', function() {
                            return _ref3;
                        })
                        .add('Set name and value of input', function() {
                            return _ref4;
                        })
                        .add('Label right', function() {
                            return _ref5;
                        })
                        .add('Label left', function() {
                            return _ref6;
                        });
                }.call(this, __webpack_require__(165)(module));
        },
        594: function(module, exports, __webpack_require__) {
            var map = {
                './nestedObjectAssign': 283,
                './nestedObjectAssign.js': 283
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                return map[req];
            }
            (webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id = 594);
        },
        63: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__(37);
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                prop_types = __webpack_require__(4),
                prop_types_default = __webpack_require__.n(prop_types),
                styled_components_browser_esm = (__webpack_require__(31),
                __webpack_require__(38),
                __webpack_require__(39),
                __webpack_require__(88));
            function _templateObject5() {
                var data = _taggedTemplateLiteral([
                    '\n    color: #777;\n    font-size: 15px;\n    font-family: helvetica;\n    padding: 0 10px;\n'
                ]);
                return (
                    (_templateObject5 = function() {
                        return data;
                    }),
                    data
                );
            }
            function _templateObject4() {
                var data = _taggedTemplateLiteral([
                    '\n    position: absolute;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: ',
                    ";\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    border-radius: 34px;\n    &:before {\n        position: relative;\n        border-radius: 50%;\n        content: '';\n        height: ",
                    'px;\n        width: ',
                    'px;\n        left: 4px;\n        background-color: ',
                    ';\n        -webkit-transition: 0.2s;\n        transition: 0.2s;\n    }\n'
                ]);
                return (
                    (_templateObject4 = function() {
                        return data;
                    }),
                    data
                );
            }
            function _templateObject3() {
                var data = _taggedTemplateLiteral([
                    '\n    &:checked + span {\n        background-color: ',
                    ';\n    }\n    &:disabled + span {\n        background-color: ',
                    ';\n        opacity: 0.4;\n        cursor: not-allowed;\n    }\n    &:disabled:checked + span {\n        background-color: ',
                    ';\n        opacity: 0.4;\n        cursor: not-allowed;\n    }\n    &:focus + span {\n        box-shadow: 0 0 1px #2196f3;\n    }\n    &:checked + span:before {\n        -webkit-transform: translateX(',
                    'px);\n        -ms-transform: translateX(',
                    'px);\n        transform: translateX(',
                    'px);\n    }\n'
                ]);
                return (
                    (_templateObject3 = function() {
                        return data;
                    }),
                    data
                );
            }
            function _templateObject2() {
                var data = _taggedTemplateLiteral([
                    '\n    position: relative;\n    display: inline-block;\n    width: ',
                    'px;\n    height: ',
                    'px;\n    > input {\n        display: none;\n    }\n'
                ]);
                return (
                    (_templateObject2 = function() {
                        return data;
                    }),
                    data
                );
            }
            function _templateObject() {
                var data = _taggedTemplateLiteral([
                    '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'
                ]);
                return (
                    (_templateObject = function() {
                        return data;
                    }),
                    data
                );
            }
            function _taggedTemplateLiteral(strings, raw) {
                return (
                    raw || (raw = strings.slice(0)),
                    Object.freeze(
                        Object.defineProperties(strings, {
                            raw: {value: Object.freeze(raw)}
                        })
                    )
                );
            }
            var GlobalContainer = styled_components_browser_esm.a.label(
                    _templateObject()
                ),
                InputContainer = styled_components_browser_esm.a.label(
                    _templateObject2(),
                    function(props) {
                        return props.width;
                    },
                    function(props) {
                        return props.height;
                    }
                ),
                Input = styled_components_browser_esm.a.input(
                    _templateObject3(),
                    function(props) {
                        return props.backgroundColorChecked;
                    },
                    function(props) {
                        return props.backgroundColorUnchecked;
                    },
                    function(props) {
                        return props.backgroundColorChecked;
                    },
                    function(props) {
                        return props.translate;
                    },
                    function(props) {
                        return props.translate;
                    },
                    function(props) {
                        return props.translate;
                    }
                ),
                Slider = styled_components_browser_esm.a.span(
                    _templateObject4(),
                    function(props) {
                        return props.backgroundColorUnchecked;
                    },
                    function(props) {
                        return props.sliderHeight;
                    },
                    function(props) {
                        return props.sliderWidth;
                    },
                    function(props) {
                        return props.backgroundColorButton;
                    }
                ),
                Label = styled_components_browser_esm.a.span(
                    _templateObject5()
                ),
                Toggle = function(props) {
                    var onChange = props.onChange,
                        checked = props.checked,
                        disabled = props.disabled,
                        width = props.width,
                        height = props.height,
                        translate = props.translate,
                        backgroundColorChecked = props.backgroundColorChecked,
                        backgroundColorUnchecked =
                            props.backgroundColorUnchecked,
                        backgroundColorButton = props.backgroundColorButton,
                        name = props.name,
                        value = props.value,
                        labelRight = props.labelRight,
                        labelLeft = props.labelLeft,
                        sliderWidth = props.sliderWidth,
                        sliderHeight = props.sliderHeight;
                    return react_default.a.createElement(
                        GlobalContainer,
                        null,
                        labelLeft &&
                            react_default.a.createElement(
                                Label,
                                null,
                                labelLeft
                            ),
                        react_default.a.createElement(
                            InputContainer,
                            {onChange: onChange, width: width, height: height},
                            react_default.a.createElement(Input, {
                                type: 'checkbox',
                                name: name,
                                value: value,
                                checked: checked,
                                disabled: disabled,
                                translate: translate,
                                backgroundColorChecked: backgroundColorChecked
                            }),
                            react_default.a.createElement(Slider, {
                                sliderWidth: sliderWidth,
                                sliderHeight: sliderHeight,
                                backgroundColorUnchecked: backgroundColorUnchecked,
                                backgroundColorButton: backgroundColorButton
                            })
                        ),
                        labelRight &&
                            react_default.a.createElement(
                                Label,
                                null,
                                labelRight
                            )
                    );
                };
            (Toggle.displayName = 'Toggle'),
                (Toggle.propTypes = {
                    checked: prop_types_default.a.bool,
                    disabled: prop_types_default.a.bool,
                    onChange: prop_types_default.a.func,
                    backgroundColorChecked: prop_types_default.a.string,
                    backgroundColorUnchecked: prop_types_default.a.string,
                    backgroundColorButton: prop_types_default.a.string,
                    name: prop_types_default.a.string,
                    value: prop_types_default.a.string,
                    labelRight: prop_types_default.a.string,
                    labelLeft: prop_types_default.a.string,
                    sliderWidth: prop_types_default.a.number,
                    sliderHeight: prop_types_default.a.number,
                    width: prop_types_default.a.number,
                    height: prop_types_default.a.number,
                    translate: prop_types_default.a.number
                }),
                (Toggle.defaultProps = {
                    backgroundColorChecked: '#2193F3',
                    backgroundColorUnchecked: '#ccc',
                    backgroundColorButton: '#fff',
                    sliderWidth: 26,
                    sliderHeight: 26,
                    width: 60,
                    height: 34,
                    translate: 26
                });
            __webpack_exports__.a = Toggle;
            (Toggle.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'Toggle',
                props: {
                    backgroundColorChecked: {
                        defaultValue: {value: "'#2193F3'", computed: !1},
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    backgroundColorUnchecked: {
                        defaultValue: {value: "'#ccc'", computed: !1},
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    backgroundColorButton: {
                        defaultValue: {value: "'#fff'", computed: !1},
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    sliderWidth: {
                        defaultValue: {value: '26', computed: !1},
                        type: {name: 'number'},
                        required: !1,
                        description: ''
                    },
                    sliderHeight: {
                        defaultValue: {value: '26', computed: !1},
                        type: {name: 'number'},
                        required: !1,
                        description: ''
                    },
                    width: {
                        defaultValue: {value: '60', computed: !1},
                        type: {name: 'number'},
                        required: !1,
                        description: ''
                    },
                    height: {
                        defaultValue: {value: '34', computed: !1},
                        type: {name: 'number'},
                        required: !1,
                        description: ''
                    },
                    translate: {
                        defaultValue: {value: '26', computed: !1},
                        type: {name: 'number'},
                        required: !1,
                        description: ''
                    },
                    checked: {
                        type: {name: 'bool'},
                        required: !1,
                        description: ''
                    },
                    disabled: {
                        type: {name: 'bool'},
                        required: !1,
                        description: ''
                    },
                    onChange: {
                        type: {name: 'func'},
                        required: !1,
                        description: ''
                    },
                    name: {
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    value: {
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    labelRight: {
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    },
                    labelLeft: {
                        type: {name: 'string'},
                        required: !1,
                        description: ''
                    }
                }
            }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES['src/index.js'] = {
                        name: 'Toggle',
                        docgenInfo: Toggle.__docgenInfo,
                        path: 'src/index.js'
                    });
        }
    },
    [[332, 1, 2]]
]);
//# sourceMappingURL=main.0b92eb9c5acc6ac46cd3.bundle.js.map
