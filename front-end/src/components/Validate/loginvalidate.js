function validation(values) {
    let error = {}
    if (values.email === "") {
        error.email = "Email không được để trống!"
    }
    else {
        error.email = ""
    }
    if (values.password === "") {
        error.password = "password không được để trống!"
    }
    else {
        error.password = ""
    }
    return error;
}
export default validation