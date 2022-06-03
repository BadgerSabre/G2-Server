module.exports = [
    {
        name: "Machine A",
        required_parts: [],
        required_jobs: {
            "JOB-01A-00": {
                tasks: {
                    "CNC-01A-00": {
                        order_num: 1,
                        sub_jobs: {
                            "CNC-01A-01": {
                                parts_produced: 4,
                                pid: 30006,
                                hours_per_part: 0.5
                            },
                            "CNC-01A-02": {
                                parts_produced: 4,
                                pid: 30016,
                                hours_per_part: 0.5
                            },
                        }
                    },
                    "WELD-01A-00": {
                        order_num: 2,
                        sub_jobs: {
                            "WELD-01A-01": {
                                parts_produced: 2,
                                pid: 20001,
                                hours_per_part: 0.5
                            }
                        }
                    },
                    "FIN-01A-00": {
                        order_num: 3,
                        sub_jobs: {
                            "FIN-01A-01": {
                                parts_produced: 2,
                                pid: 70001,
                                hours_per_part: 0.25
                            },
                            "FIN-01A-02": {
                                parts_produced: 2,
                                pid: 70012,
                                hours_per_part: 4
                            },
                            "FIN-01A-03": {
                                parts_produced: 2,
                                pid: 700011,
                                hours_per_part: 0.25
                            },
                            "FIN-01A-04": {
                                parts_produced: 2,
                                pid: 70013,
                                hours_per_part: 4
                            }
                        }
                    },
                    "ASM-01A-00": {
                        order_num: 4,
                        sub_jobs: {
                            //A
                            "ASM-01A-01": {
                                parts_produced: 2,
                                pid: 50001,
                                hours_per_part: 0.5
                            },
                            //AA
                            "ASM-01A-02": {
                                parts_produced: 2,
                                pid: 500021,
                                hours_per_part: 0.25
                            },
                            "ASM-01A-03": {
                                parts_produced: 1,
                                pid: 50011,
                                hours_per_part: 4
                            },
                        }
                    },
                    "ELEC-01A-00": {
                        order_num: 5,
                        sub_jobs: {
                            "ELEC-01A-01": {
                                parts_produced: 2,
                                pid: 40001,
                                hours_per_part: 0.5
                            },
                            "ELEC-01A-02": {
                                parts_produced: 1,
                                pid: 400011,
                                hours_per_part: 1
                            } 
                        }
                    },
                    "TEST-01A-00": {
                        order_num: 6,
                        sub_jobs: {
                            "TEST-01A-01": {
                                parts_produced: 0,
                                pid: 40001,
                                hours_per_part: 0.5
                            },
                            "TEST-01A-02": {
                                parts_produced: 0,
                                pid: 400011,
                                hours_per_part: 1
                            } 
                        }
                    },
                }
            },
        },
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
        name: "Machine G",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine H",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine I",
        required_parts: [],
        required_jobs: {},
    },
    {
        name: "Machine J",
        required_parts: [],
        required_jobs: {},
    }
]