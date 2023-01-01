export const make = {
    ":host": {
        be: "definitive",
        having: {
            config: {
                propDefaults: {
                    expanded: false,
                    collapsed: true,
                    hydratingTransform: {
                        section: [{}, {
                                click: {
                                    prop: "expanded",
                                    toggleProp: true
                                }
                            }],
                        button: {
                            disabled: false,
                        }
                    },
                    transform: {
                        expandP: {
                            hidden: "expanded"
                        },
                        collapseP: {
                            hidden: "collapsed"
                        }
                    }
                },
                propInfo: {
                    expanded: {
                        notify: {
                            negateTo: "collapsed",
                            dispatch: true,
                            reflectTo: {
                                aria: "expanded"
                            }
                        }
                    }
                }
            }
        },
    }
};
