## Documentation

### Database

### Collections

| Collection    | Relational    |
| ------------- | ------------- |
| departments   | employees     |
| employees     | none          |
| inventories   | undecided     |
| opportunities | undecided     |
| part          | undecided     |
| products      | undecided     |
| projects      | undecided     |
| vendors       | undecided     |

### Schemas

#### department

```
const departmentSchema = new mongoose.Schema({
    dept_id: Number,
    dept_name: String,
    work_centers: [{
        work_center: String,
        employees: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee'
        }],
        wc_id: Number
    }]
})
```


### Routings

| Route         | Type          | Description   |
| ------------- | ------------- | ------------- |
| /             | GET           | ?             |
| /             | GET           | ?             |
| /             | GET           | ?             |