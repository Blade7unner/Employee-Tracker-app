
# Employee Tracker

## Description

Employee Tracker is a command-line application to manage a company's employee database, allowing users to view and interact with information stored in databases. This interface makes it easy for non-developers to view and manage the departments, roles, and employees in a company, aiding in the organization and planning of a business.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Features](#features)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install the Employee Tracker application, follow these steps:

1. Clone the repository to your local machine using:

   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the cloned repository directory:

   ```sh
   cd path-to-your-repo
   ```

3. Install the necessary dependencies:

   ```sh
   npm install
   ```

4. Ensure you have MySQL installed and running on your local machine.

5. Set up your MySQL database using the `schema.sql` and `seed.sql` files provided in the `db` directory.

## Usage

To start the application, run the following command in your terminal:

```sh
node server.js
```

You will be presented with a series of options to manage your employee database:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Follow the on-screen prompts to interact with the database.

## Walkthrough Video

For a full walkthrough of the application's functionality, please refer to the following video:

[![Employee Tracker Walkthrough Video](video-thumbnail-url)](video-link-url)

*Note: Replace `video-thumbnail-url` and `video-link-url` with the actual links to your video.*

## Features

- Interactive command-line interface using Inquirer.js
- Connection to MySQL database to store and retrieve data
- Ability to view, add, and update employees, departments, and roles

## Contributing

Contributions to the Employee Tracker are welcome! Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) as a guideline for community interactions.

## Questions

For any questions or concerns, please open an issue or contact me directly at your-email@example.com. You can find more of my work at [your-username](https://github.com/your-username/).
