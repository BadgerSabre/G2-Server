# Documentation

## Database

### Collections

| Collection    | Reference(s)  |
| ------------- | ------------- |
| departments   | employees     |
| employees     | none          |
| inventories   | maybe vendors |
| opportunities | undecided     |
| catalogs      | products      |
| products      | none          |
| projects      | inventory, maybe catalog |
| vendors       | none          |

## Schemas

### catalog:

```
const catalogSchema = new mongoose.Schema({})
```

### department:

![Department Schema](./docs/imgs/departments-schema.PNG)

### employee:

```
const employeeSchema = new mongoose.Schema({
    dept_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    first_name:{
        type: String,
        required: true
    },
    id_num: {
        type: Number,
        required: true,
        unique: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: String,
    pay: {
        type: Number,
        default: 0
    },
    salary: {
        type: Boolean,
        default: false
    },
    start_date: Date,
    wc_id: {
        type: Number,
        required: true
    },
})
```

### inventory:

```
const inventorySchema = new mongoose.Schema({
    pid: {
        type: Number,
        unique: true,
        required: true
    },
    inStock: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    vmi: {
        type: Boolean,
        default: false
    }
})
```

### opportunity

```
const opportunitySchema = new mongoose.Schema({})
```

### product

```
const productSchema = new mongoose.Schema({})
```

### vendor

```
const vendorSchema = new mongoose.Schema({})
```

## Routings

| Type          | Route         | Description   |
| ------------- | ------------- | ------------- |
| GET           | /             | ?             |
| GET           | /             | ?             |
| GET           | /             | ?             |