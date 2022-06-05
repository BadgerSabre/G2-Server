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

![Department Schema](./docs/imgs/Capture.PNG)

### employee:

![Employee Schema](./docs/imgs/employee-schema.PNG)

### inventory:

![Inventory Schema](./docs/imgs/inventory-schema.PNG)

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