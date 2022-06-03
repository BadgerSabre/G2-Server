module.exports = [
    {
        name: "Machine A",
        required_parts: [],
        required_jobs: {
            "JOB-01A-00": {
                tasks: {
                    "CNC-01A-00": {
                        order: 1,
                        sub_jobs: {
                            "CNC-01A-01": {
                                parts_produced: 4,
                                pid: 30006,
                                hours_per_part: 0.5
                            },
                            "CNC-01A-02": {
                                parts_produced: 4,
                                pid: 30007,
                                hours_per_part: 0.5
                            },
                        }
                    },
                    "WELD-01A-00": {
                        sub_jobs: {
                            "WELD-01A-01": {
                                parts_produced: 2,
                                pid: 20001,
                                hours_per_part: 0.5
                            }
                        }
                    },
                    "FIN-01A-00": {
                        sub_jobs: {
                            "FIN-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.25
                            },
                            "FIN-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 4
                            }
                        }
                    },
                    "ASM-01A-00": {
                        sub_jobs: {
                            "ASM-01A-01": {
                                parts_produced: 2,
                                pid: 50001,
                                hours_per_part: 0.25
                            },
                            "ASM-01A-02": {
                                parts_produced: 2,
                                pid: 50002,
                                hours_per_part: 0.25
                            },
                            "ASM-01A-03": {
                                parts_produced: 2,
                                pid: 50003,
                                hours_per_part: 0.5
                            },
                            "ASM-01A-04": {
                                parts_produced: 1,
                                pid: 50011,
                                hours_per_part: 4
                            },
                        }
                    },
                    "ELEC-01A-00": {
                        sub_jobs: {
                            "ELEC-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "ELEC-01A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                    "TEST-01A-00": {
                        sub_jobs: {
                            "TEST-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "TEST-01A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                }
            },
            "JOB-02A-00": {
                tasks: {
                    "CNC-02A-00": {
                        sub_jobs: {
                            "CNC-02A-01": {
                                parts_produced: 4,
                                pid: 30006,
                                hours_per_part: 0.25
                            },
                            "CNC-02A-02": {
                                parts_produced: 4,
                                pid: 30008,
                                hours_per_part: 0.25
                            },
                        }
                    },
                    "WELD-02A-00": {
                        sub_jobs: {
                            "WELD-02A-01": {
                                parts_produced: 2,
                                pid: 20002,
                                hours_per_part: 0.5
                            }
                        }
                    },
                    "FIN-02A-00": {
                        sub_jobs: {
                            "FIN-02A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.25
                            },
                            "FIN-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 4
                            }
                        }
                    },
                    "ASM-02A-00": {
                        sub_jobs: {
                            "ASM-02A-01": {
                                parts_produced: 0,
                                pid: 50004,
                                hours_per_part: 0.25
                            },
                            "ASM-02A-02": {
                                parts_produced: 0,
                                pid: 50005,
                                hours_per_part: 0.25
                            },
                            "ASM-02A-03": {
                                parts_produced: 0,
                                pid: 50006,
                                hours_per_part: 0.5
                            },
                            "ASM-02A-04": {
                                parts_produced: 0,
                                pid: 50012,
                                hours_per_part: 4
                            },
                        }
                    },
                    "ELEC-02A-00": {
                        sub_jobs: {
                            "ELEC-02A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "ELEC-02A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                    "TEST-02A-00": {
                        sub_jobs: {
                            "TEST-02A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "TEST-02A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                }
            },
            "JOB-03A-00": {
                tasks: {
                    "CNC-03A-00": {
                        sub_jobs: {
                            "CNC-03A-01": {
                                parts_produced: 4,
                                pid: 30006,
                                hours_per_part: 0.083
                            },
                            "CNC-03A-02": {
                                parts_produced: 4,
                                pid: 30009,
                                hours_per_part: 0.083
                            },
                        }
                    },
                    "WELD-03A-00": {
                        sub_jobs: {
                            "WELD-03A-01": {
                                parts_produced: 1,
                                pid: 20003,
                                hours_per_part: 2
                            }
                        }
                    },
                    "FIN-03A-00": {
                        sub_jobs: {
                            "FIN-03A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.25
                            },
                            "FIN-01A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 4
                            }
                        }
                    },
                    "ASM-03A-00": {
                        sub_jobs: {
                            "ASM-03A-01": {
                                parts_produced: 0,
                                pid: 50001,
                                hours_per_part: 0.25
                            },
                            "ASM-03A-02": {
                                parts_produced: 0,
                                pid: 50008,
                                hours_per_part: 0.25
                            },
                            "ASM-03A-03": {
                                parts_produced: 0,
                                pid: 50009,
                                hours_per_part: 0.5
                            },
                            "ASM-03A-04": {
                                parts_produced: 0,
                                pid: 50013,
                                hours_per_part: 1.5
                            },
                        }
                    },
                    "ELEC-03A-00": {
                        sub_jobs: {
                            "ELEC-03A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "ELEC-03A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                    "TEST-03A-00": {
                        sub_jobs: {
                            "TEST-03A-01": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 0.5
                            },
                            "TEST-03A-02": {
                                parts_produced: 0,
                                pid: 0,
                                hours_per_part: 1
                            } 
                        }
                    },
                },
            }
        },
        average_build_time: 24,//I think this may have to be a virtual
        average_price: 20000 // May also need to be a virtual
    },
    {
        name: "Machine B",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine C",
        required_parts: [],
        required_jobs: {},
    },    {
        name: "Machine D",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine E",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine F",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine B",
        required_parts: [],
        required_jobs: {},
    }
]