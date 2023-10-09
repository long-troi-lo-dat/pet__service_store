function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if (values.hoten === "") {
        error.hoten = "Họ tên không được để trống!"
    }
    else {
        error.hoten = ""
    }
    if (values.sdt === "") {
        error.sdt = "Số điện thoại không được để trống!"
    }
    else {
        error.sdt = ""
    }
    if (values.email === "") {
        error.email = "Email không được để trống!"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Địa chỉ Email không đúng định dạng!"
    }
    else {
        error.email = ""
    }
    if (values.password === "") {
        error.password = "password không được để trống!"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "password phải có 8 ký tự bao gồm chữ thường, chữ hoa và ký tự số!"
    }
    else {
        error.password = ""
    }
    return error;
}
export default validation