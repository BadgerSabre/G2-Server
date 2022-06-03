// -- Relational -- //
//  - departments[work_centers][work_center][employees] => Employees

module.exports = [
    {
        dept_id: 100,
        dept_name: "Engineering",
        work_centers: [
            {
                work_center: "Mechanical Engineering",
                employees: [],
                wc_id: 101
            },
            {
                work_center: "Electrical Engineering",
                employees: [],
                wc_id: 102
            },
            {
                work_center: "Project Engineering",
                employees: [],
                wc_id: 103
            }
        ]
    },
    {
        dept_id: 200,
        dept_name: "Customer Service",
        work_centers: [
            {
                work_center: "Sales",
                employees: [],
                wc_id: 201
            },
            {
                work_center: "After Sales",
                employees: [],
                wc_id: 202
            },
            {
                work_center: "Marketing",
                employees: [],
                wc_id: 203
            },
            {
                work_center: "Service Technician",
                employees: [],
                wc_id: 204
            }
        ]
    },
    {
        dept_id: 300,
        dept_name: "Production",
        work_centers: [
        ]
    },
    {
        dept_id: 400,
        dept_name: "Infastructure",
        work_centers: [
            {
                work_center: "Administration",
                employees: [],
                wc_id: 401
            },
            {
                work_center: "Information Technology",
                employees: [],
                wc_id: 402
            },
        ]
    },
    {
        dept_id: 500,
        dept_name: "Financial",
        work_centers: [
            {
                work_center: "Accounting",
                employees: [],
                wc_id: 501
            }
        ]
    },
    {
        dept_id: 600,
        dept_name: "Operations",
        work_centers: [
            {
                work_center: "Human Resources",
                employees: [],
                wc_id: 601
            },
            {
                work_center: "Project Management",
                employees: [],
                wc_id: 602
            },
            {
                work_center: "Executives",
                employees: [],
                wc_id: 603
            },
        ]
    },

]