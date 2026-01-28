class EmployeeDetailPage {
    name
    constructor(name) {
        this.name = name
    }

    render() {
        const employeeDetailPage = document.createElement('section')
        employeeDetailPage.setAttribute('class', 'employeeDetailPage')

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        employeeDetailPage.appendChild(container)

        return employeeDetailPage
    }
}

export { EmployeeDetailPage }