class EmployeeDetailPage {
  name;
  constructor(name) {
    this.name = name;
  }

  render() {
    const employeeDetailPage = document.createElement("section");
    employeeDetailPage.setAttribute("class", "employeeDetailPage");

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    container.innerHTML = `
            <div class='employeeDetailPage__wrapper'>
                <div class='employeeDetailPage__inner'>
                    <h1 class='employeeDetailPage__title'>Персональная страница сотрудника</h1>
                    <div class='employeeDetailPage__content'>
                        <div class='employeeDetailPage__image-container'>
                            <img src='https://media.istockphoto.com/id/1919265357/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%B2%D0%BF%D0%B5%D0%B2%D0%BD%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2-%D1%81%D0%BE%D0%B1%D1%96-%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D1%89%D0%BE-%D1%81%D1%82%D0%BE%D1%97%D1%82%D1%8C-%D0%B2-%D0%BE%D1%84%D1%96%D1%81%D1%96-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D0%B8%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC.webp?s=2048x2048&w=is&k=20&c=cmr1vLAmgH19HxFy7EFgEgk72cudCZXoxxmSObfyEIo=' alt='employee_image' />
                        </div>
                        <div class='employeeDetailPage__info'>
                            <div class='employeeDetailPage__info-wrapper'>
                                <div class='employeeDetailPage__info-firstName'>
                                    <span>имя:</span>
                                    <span>Иван</span>
                                </div>
                                <div class='employeeDetailPage__info-lastName'>
                                    <span>Фамилия: </span>
                                    <span>Иванов</span>
                                </div>
                                <div class='employeeDetailPage__department'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__branch'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__jobTitle'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__description'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__phone'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__email'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__birthday'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__isAdmin'>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div class='employeeDetailPage__address'>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    employeeDetailPage.appendChild(container);

    return employeeDetailPage;
  }
}

export { EmployeeDetailPage };
