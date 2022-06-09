# Documentation

## Routings

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /                    | Welcome Message |
| GET     | /products            | Fetches All Products in Collection |
| GET     | /products/:id        | Fetches a Product That Matches :id |
| GET     | /products/find/:name | Fetches a Product That Matches :name |
| GET     | /products/time/:id   | Calculates Estimated Time to Build Product |
| GET     | /products/price/:id  | Calculates Estimated Price to Build Product |
| GET     | /products/parts/:id  | Returns a list of all required parts needed to build Product |
| POST    | /products            | Creates a New Product |
| PUT     | /products/:id        | Updates an Existing Product |
| DELETE  | /products/:id        | Finds a Product That Matches :id & Deletes it |
| GET     | /subjobs             | Fetches All SubJobs in Collection |
| GET     | /subjobs/:id         | Fetches SubJob That Matches :id |
| POST    | /subjobs             | Creates a New SubJob |
| PUT     | /subjobs/:id         | Updates an Existing SubJob |
| GET     | /materials           | Fetches All Materials in Collection |
| GET     | /materials/:id       | Fetches Material That Matches :id |
| POST    | /materials           | Creates a New Material |
| GET     | /customers           | Fetches All Customers in Collection |
| GET     | /customers/:id       | Fetches Customer That Matches :id |
| POST    | /customers           | Creates a New Customer |
| PUT     | /customers/:id       | Updates an Existing Customer |
| GET     | /opp                 | Fetches All Opportunities in Collection |
| GET     | /opp/:id             | Fetches Opportunity That Matches :id |
| POST    | /opp                 | Creates a New Opportunity |
| PUT     | /opp/:id             | Updates an Existing Opportunity |

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