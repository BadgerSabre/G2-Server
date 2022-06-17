# Documentation

## Routings

### Customers

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /customers           | Fetches All Customers in Collection |
| GET     | /customers/:id       | Fetches Customer That Matches :id |
| POST    | /customers           | Creates a New Customer |
| PUT     | /customers/:id       | Updates an Existing Customer |

### Materials
| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| Type    | Route                | Description   |
| GET     | /materials           | Fetches All Materials in Collection |
| GET     | /materials/:id       | Fetches Material That Matches :id |
| POST    | /materials           | Creates a New Material |

### Opportunities

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /opp                 | Fetches All Opportunities in Collection |
| GET     | /opp/:id             | Fetches Opportunity That Matches :id |
| POST    | /opp                 | Creates a New Opportunity |
| PUT     | /opp/:id             | Updates an Existing Opportunity |

### Products

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

### Projects

| Type    | Route                 | Description   |
| ------- | --------------------  | ------------- |
| GET     | /projects             | Fetches All Projects in Collection |
| GET     | /projects/dates/:type | Fetches All Projects Within a date range :type |
| GET     | /projects/:id         | Fetches Project That Matches :id |
| POST    | /projects             | Creates a New Project |
| PUT     | /projects/:id         | Updates an Existing Project |

### Sub Jobs

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /subjobs             | Fetches All SubJobs in Collection |
| GET     | /subjobs/:id         | Fetches SubJob That Matches :id |
| POST    | /subjobs             | Creates a New SubJob |
| PUT     | /subjobs/:id         | Updates an Existing SubJob |


### Materials
| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| Type    | Route                | Description   |
| GET     | /materials           | Fetches All Materials in Collection |
| GET     | /materials/:id       | Fetches Material That Matches :id |
| POST    | /materials           | Creates a New Material |

### Customers

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /customers           | Fetches All Customers in Collection |
| GET     | /customers/:id       | Fetches Customer That Matches :id |
| POST    | /customers           | Creates a New Customer |
| PUT     | /customers/:id       | Updates an Existing Customer |

### Opportunities

| Type    | Route                | Description   |
| ------- | -------------------- | ------------- |
| GET     | /opp                 | Fetches All Opportunities in Collection |
| GET     | /opp/:id             | Fetches Opportunity That Matches :id |
| POST    | /opp                 | Creates a New Opportunity |
| PUT     | /opp/:id             | Updates an Existing Opportunity |

### Departments

| Type   | Route                 | Description   |
| ------ | --------------------- | ------------- |
| GET    | /departments          | Fetches All Departments in Collection |
| GET    | /departments/:id      | Fetches Department that Matches :id |
| POST   | /departments          | Creates a New Department |
| PUT    | /departments/:id      | Updates an Existing Department |

### Employees

| Type   | Route                  | Desciption    |
| ------ | ---------------------- | ------------- |
| GET    | /employees             | Fetches All Employees in Collection |
| GET    | /employees/:id         | Fetches Employee that Matches :id |
| POST   | /employees             | Creates a New Employee |
| PUT    | /employees/:id         | Updates an Existing Employee |
| DELETE | /employees/:id         | Finds Employee that Matches :id & Deletes it |

### Vendors

| Type   | Route                  | Description   |
| ------ | ---------------------- | ------------- |
| GET    | /vendors               | Fetches All Vendors in Collection |
| GET    | /vendors/:id           | Fetches Vendor that Matches :id |
| POST   | /vendors               | Creates a New Vendor |
| PUT    | /vendors/:id           | Updates an Existing Vendor |
| DELETE | /vendors/:id           | Finds Vendor that Matches :id & Deletes it |

## Database

### Collections

| Collection    | Reference(s)  |
| ------------- | ------------- |
| customers     | projects, opportunities |
| departments   | employees     |
| employees     | none          |
| inventories   | maybe vendors |
| jobs          | tasks         |
| materials     | inventories, maybe subjobs? |
| opportunities | employees, customers, projects |
| products      | jobs          |
| projects      | products      |
| subjobs       | materials, inventories |
| tasks         | subjobs       |
| tokens        | none          |
| vendors       | inventories   |

## Schemas

### customer:


### department:

![Department Schema](./docs/imgs/departments-schema.PNG)

### employee:

![Employee Schema](./docs/imgs/employee-schema.PNG)

### inventory:

![Inventory Schema](./docs/imgs/inventory-schema.PNG)

### job:

### material:

### opportunity:

```
const opportunitySchema = new mongoose.Schema({})
```

### product:

```
const productSchema = new mongoose.Schema({})
```
### project:

### subjob:

### task:

### token:

### vendor

```
const vendorSchema = new mongoose.Schema({})
```